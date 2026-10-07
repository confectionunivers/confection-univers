#!/usr/bin/env node
/**
 * Prépare toutes les images de la page catalogue à partir de fichiers « masters ».
 *
 * ┌─ UTILISATION ────────────────────────────────────────────────────────────┐
 * │ 1. Dépose tes photos (jpg, png, webp…) dans le dossier « images-source/ » │
 * │ 2. npm run images:prepare                                                 │
 * └───────────────────────────────────────────────────────────────────────────┘
 *
 * Le script reconnaît le nom du master, puis génère TOUTE la famille :
 *
 *   images-source/tenues-scolaires.jpg   ─┬─→ tenues-scolaires-640.webp    640×480
 *                                         ├─→ tenues-scolaires-1280.webp  1280×960
 *                                         └─→ tenues-scolaires-detail.webp 1000×750
 *
 * Deux façons de fournir les visuels de détail :
 *   · un master de famille   → le détail est un recadrage serré (ancrage haut)
 *   · un master dédié        → images-source/tenues-scolaires-detail.jpg est utilisé tel quel
 *
 * Options :
 *   --jpg          génère du JPEG au lieu de WebP (nécessite d'adapter le code)
 *   --quality=86   qualité d'encodage (défaut : 82 WebP / 86 JPEG)
 *   --src=…        dossier source    (défaut : images-source)
 *   --out=…        dossier de sortie (défaut : public/images/catalogue)
 */

import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync, statSync } from 'fs';
import path from 'path';

// ─────────────────────────────────────────────────────────── arguments
const args = process.argv.slice(2);
const getArg = (name, fallback) => {
	const hit = args.find((a) => a.startsWith(`--${name}=`));
	return hit ? hit.split('=')[1] : fallback;
};
const USE_JPG = args.includes('--jpg') || getArg('format') === 'jpg';
const EXT = USE_JPG ? '.jpg' : '.webp';
const QUALITY = Number(getArg('quality', USE_JPG ? 86 : 82));
const SRC = path.resolve(getArg('src', 'images-source'));
const OUT = path.resolve(getArg('out', 'public/images/catalogue'));

// ─────────────────────────────────────────────── familles et dimensions
const GAMMES = [
	'tenues-scolaires',
	'tenues-professionnelles',
	'tenues-medicales',
	'tenues-sportives',
	'tenues-academiques',
	'arts-martiaux',
	'ecoles-coraniques',
	'toges-avocat',
	'tenues-africaines',
	'tenues-hotellerie',
	'blazers-femme-costumes',
];

/** Cible = { clé (= nom de fichier final), dimensions, famille, ancrage, zoom } */
const TARGETS = [];

for (const g of GAMMES) {
	TARGETS.push({ key: `${g}-640`, w: 640, h: 480, family: g, pos: 'centre' });
	TARGETS.push({ key: `${g}-1280`, w: 1280, h: 960, family: g, pos: 'centre' });
	// Si aucun master de détail dédié n'existe, on dérive un cadrage serré du
	// master de famille : ancrage en haut pour garder les têtes et montrer le buste.
	TARGETS.push({ key: `${g}-detail`, w: 1000, h: 750, family: g, pos: 'north', zoom: 0.82 });
}

TARGETS.push({ key: 'manufacture-hero-1280', w: 1280, h: 720, family: 'manufacture-hero', pos: 'centre' });
TARGETS.push({ key: 'manufacture-hero-1600', w: 1600, h: 900, family: 'manufacture-hero', pos: 'centre' });

// Les 4 visuels d'ambiance exigent leur master dédié.
// Volontairement SANS recours automatique à une autre famille : un master manquant
// laisse l'image existante intacte plutôt que de l'écraser par un recadrage hasardeux.
TARGETS.push({ key: 'personnalisation-matieres', w: 760, h: 410, family: 'personnalisation-matieres', pos: 'centre' });
TARGETS.push({ key: 'personnalisation-atelier', w: 680, h: 510, family: 'personnalisation-atelier', pos: 'centre' });
TARGETS.push({ key: 'personnalisation-finition', w: 550, h: 400, family: 'personnalisation-finition', pos: 'centre' });
TARGETS.push({ key: 'personnalisation-geste', w: 700, h: 440, family: 'personnalisation-geste', pos: 'centre' });

// ────────────────────────────────────────────────────────── chargement
if (!existsSync(SRC)) {
	mkdirSync(SRC, { recursive: true });
	console.log(`\n📁 Dossier créé : ${path.relative(process.cwd(), SRC)}`);
	console.log('   Dépose tes images dedans, puis relance « npm run images:prepare ».\n');
	process.exit(0);
}

const allFiles = readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp|tiff?|avif)$/i.test(f));
if (allFiles.length === 0) {
	console.log(`\n⚠️  Aucune image trouvée dans ${path.relative(process.cwd(), SRC)}\n`);
	process.exit(0);
}

const masters = [];
for (const f of allFiles) {
	const p = path.join(SRC, f);
	const meta = await sharp(p).metadata();
	masters.push({ file: f, path: p, base: path.basename(f, path.extname(f)), width: meta.width, height: meta.height });
}

const byBase = new Map(masters.map((m) => [m.base, m]));

/**
 * Choisit le master d'une cible par correspondance EXACTE du nom :
 *   1. un master dédié (ex. « tenues-scolaires-detail.jpg » pour la cible « tenues-scolaires-detail »)
 *   2. sinon le master de famille (ex. « tenues-scolaires.jpg »), utilisé pour toutes ses variantes
 * Aucune correspondance approximative : un master au nom proche n'est jamais utilisé par erreur,
 * et un master manquant NE remplace PAS une image existante.
 */
function pickMaster(target) {
	if (byBase.has(target.key)) return { master: byBase.get(target.key), dedicated: true };
	if (byBase.has(target.family)) return { master: byBase.get(target.family), dedicated: false };
	return null;
}

// ────────────────────────────────────────────────────── génération
mkdirSync(OUT, { recursive: true });

const done = [];
const skipped = [];
const warnings = [];

for (const t of TARGETS) {
	const picked = pickMaster(t);
	if (!picked) {
		skipped.push(t.key);
		continue;
	}
	const { master, dedicated } = picked;

	const dest = path.join(OUT, t.key + EXT);
	let pipeline = sharp(master.path);

	// Zoom de dérivation : uniquement quand le visuel de détail est dérivé du
	// master de famille (aucun master dédié fourni). L'ancrage suit la position.
	if (!dedicated && t.zoom && t.zoom < 1) {
		const zw = Math.round(master.width * t.zoom);
		const zh = Math.round(master.height * t.zoom);
		const left = t.pos.includes('east') ? master.width - zw : t.pos.includes('west') ? 0 : Math.round((master.width - zw) / 2);
		const top = t.pos.includes('north') ? 0 : t.pos.includes('south') ? master.height - zh : Math.round((master.height - zh) / 2);
		pipeline = pipeline.extract({ left, top, width: zw, height: zh });
	}

	// Un master déjà aux bonnes dimensions : on évite une double compression inutile.
	const alreadyExact = !t.zoom && master.width === t.w && master.height === t.h;

	if (alreadyExact) pipeline = sharp(master.path);
	else pipeline = pipeline.resize(t.w, t.h, { fit: 'cover', position: t.pos });

	await pipeline
		.toFormat(USE_JPG ? 'jpeg' : 'webp', {
			quality: QUALITY,
			...(USE_JPG ? { mozjpeg: true } : { effort: 5 }),
		})
		.toFile(dest);

	if (master.width < t.w) {
		warnings.push(`${t.key} : master ${master.file} (${master.width}px) plus petit que la cible (${t.w}px) → agrandissement, qualité dégradée`);
	}

	const kb = Math.round(statSync(dest).size / 1024);
	if (kb > 150) warnings.push(`${t.key}${EXT} : ${kb} Ko (> 150 Ko, image lourde)`);

	done.push({ key: t.key + EXT, from: master.file, dim: `${t.w}×${t.h}`, kb, derived: !dedicated });
}

// ───────────────────────────────────────────────────────── résumé
console.log('\n═══════════════════════════════════════════════════════════════');
console.log(` ${done.length} IMAGE(S) GÉNÉRÉE(S)${EXT}`);
console.log('═══════════════════════════════════════════════════════════════');
for (const r of done) {
	const tag = r.derived ? '  (recadrée)' : '';
	console.log(` ${r.key.padEnd(38)} ${r.dim.padEnd(11)} ${String(r.kb).padStart(3)} Ko${tag}`);
}

if (skipped.length > 0) {
	console.log('\n─────────────────────────────────────────────────────────────');
	console.log(` EN ATTENTE DE MASTER — images existantes laissées intactes (${skipped.length})`);
	console.log('─────────────────────────────────────────────────────────────');
	for (const s of skipped) console.log(` · ${s}`);
}

if (warnings.length > 0) {
	console.log('\n─────────────────────────────────────────────────────────────');
	console.log(' AVERTISSEMENTS');
	console.log('─────────────────────────────────────────────────────────────');
	for (const w of warnings) console.log(` ⚠️  ${w}`);
}

const heavy = done.filter((d) => d.kb > 150).length;
console.log(`\n📂 Destination : ${path.relative(process.cwd(), OUT)}`);
console.log(
	USE_JPG
		? '⚠️  Sortie JPEG : le code du site doit pointer vers des .jpg\n'
		: `✅ Sortie WebP : aucun code à modifier.${done.length > 0 && heavy === 0 ? ' Tout est aux bonnes dimensions.' : ''}\n`
);
