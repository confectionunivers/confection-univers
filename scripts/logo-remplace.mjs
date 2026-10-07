#!/usr/bin/env node
/**
 * Remplace une inscription indésirable sur un mur par le logo Confection Univers.
 *
 * Usage :
 *   node scripts/logo-remplace.mjs <photo> <sortie> --x=430 --y=290 --w=330 --h=70 [--mode=logo|monogramme]
 *
 *   --x/--y/--w/--h : zone à effacer, en pixels de l'image source (coordonnées d'origine)
 *   --mode          : 'logo' (monogramme + texte) ou 'monogramme' (CU seul)
 *   --bleu / --or   : couleurs du mur autour, échantillonnées automatiquement par défaut
 */

import sharp from 'sharp';

const args = process.argv.slice(2);
const positional = args.filter((a) => !a.startsWith('--'));
const getArg = (n, d) => {
	const hit = args.find((a) => a.startsWith(`--${n}=`));
	return hit ? hit.split('=')[1] : d;
};

const [SRC, OUT] = positional;
if (!SRC || !OUT) {
	console.error('Usage: node scripts/logo-remplace.mjs <photo> <sortie> --x= --y= --w= --h= [--mode=logo|monogramme]');
	process.exit(1);
}

const ZONE = {
	left: Number(getArg('x', 0)),
	top: Number(getArg('y', 0)),
	width: Number(getArg('w', 300)),
	height: Number(getArg('h', 70)),
};
const MODE = getArg('mode', 'logo');

const base = sharp(SRC);
const meta = await base.metadata();
const isPortrait = meta.height > meta.width;

// Retire les métadonnées de rotation EXIF pour que les coordonnées correspondent
// à ce que voit l'utilisateur (sinon les pixels seraient tournés).
const img = await sharp(SRC).rotate().toBuffer({ resolveWithObject: true });
const W = img.info.width;
const H = img.info.height;

// ── 1. Échantillonner la couleur du mur autour de la zone à effacer ──────────
const { data, info } = await sharp(img.data).raw().toBuffer({ resolveWithObject: true });
const ch = info.channels;
const sampleAt = (x, y) => {
	const i = (Math.round(y) * W + Math.round(x)) * ch;
	return [data[i], data[i + 1], data[i + 2]];
};
const samples = [];
const pad = Math.max(12, Math.round(ZONE.height * 0.6));
for (const [sx, sy] of [
	[ZONE.left - pad, ZONE.top + ZONE.height / 2],
	[ZONE.left + ZONE.width + pad, ZONE.top + ZONE.height / 2],
	[ZONE.left + ZONE.width / 2, ZONE.top - pad],
	[ZONE.left + ZONE.width / 2, ZONE.top + ZONE.height + pad],
]) {
	if (sx >= 0 && sx < W && sy >= 0 && sy < H) samples.push(sampleAt(sx, sy));
}
const avg = samples.length
	? samples.reduce((a, s) => [a[0] + s[0] / samples.length, a[1] + s[1] / samples.length, a[2] + s[2] / samples.length], [0, 0, 0]).map(Math.round)
	: [238, 235, 228];
console.log(`couleur du mur détectée : rgb(${avg.join(', ')})  [${samples.length} échantillon(s)]`);

// ── 2. Effacer la zone : on recouvre d'aplats du mur + léger dégradé ─────────
const cover = Buffer.from(
	`<svg width="${ZONE.width}" height="${ZONE.height}">
	   <rect width="${ZONE.width}" height="${ZONE.height}" fill="rgb(${avg.join(',')})"/>
	 </svg>`
);

// ── 3. Préparer le logo ─────────────────────────────────────────────────────
const logoFile = MODE === 'monogramme' ? 'public/images/logo-monogramme.png' : 'public/images/logo.png';
const targetH = Math.round(ZONE.height * 1.15);
let logo = await sharp(logoFile).resize({ height: targetH, fit: 'inside' }).toBuffer();
const lm = await sharp(logo).metadata();

// Le monogramme et le texte ont besoin d'être alignés à gauche de la zone
const left = ZONE.left;
const top = Math.round(ZONE.top + (ZONE.height - lm.height) / 2);

console.log(`logo « ${MODE} » : ${lm.width}x${lm.height} posé en (${left}, ${top})`);

// ── 4. Composer : effacer puis poser le logo ────────────────────────────────
await sharp(img.data)
	.composite([
		{ input: cover, left: ZONE.left, top: ZONE.top },
		{ input: logo, left, top },
	])
	.toFormat('jpeg', { quality: 92, mozjpeg: true })
	.toFile(OUT);

console.log(`→ ${OUT}  (${W}x${H})`);
