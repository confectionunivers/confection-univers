/**
 * Génère des variantes WebP responsives de toutes les images de public/images.
 *
 * Problème initial : 37 Mo de JPEG/PNG servis tels quels, sans srcset — un
 * mobile sénégalais en 3G téléchargeait des fichiers de 700 Ko pour une
 * vignette de 300 px. C'est le premier facteur de LCP/CLS dégradé, donc de
 * déclassement via les Core Web Vitals.
 *
 * Fonctionnement :
 *   - sortie dans public/images/gen/ (non versionné : régénéré au build) ;
 *   - manifeste .image-cache/image-manifest.json lu par <Picture> ;
 *   - cache par empreinte de contenu : une image inchangée n'est jamais
 *     reconvertie (le build Vercel reste rapide) ;
 *   - l'original reste le repli <img src> pour les navigateurs sans WebP.
 *
 * Comme optimize-hero-images.mjs, un échec ici ne bloque pas le build :
 * <Picture> retombe proprement sur l'image d'origine.
 *
 * Usage : node scripts/optimize-images.mjs
 */
import { readdirSync, statSync, existsSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, basename, extname } from 'node:path';

const SRC_DIR = 'public/images';
const GEN_DIR = 'public/images/gen';
const CACHE_DIR = '.image-cache';
const MANIFEST = join(CACHE_DIR, 'image-manifest.json');
const STATE = join(CACHE_DIR, 'state.json');

/** Largeurs générées, toujours plafonnées à la largeur d'origine. */
const WIDTHS = [480, 768, 1024, 1600];
const WEBP_QUALITY = 76;

/** Dossiers déjà traités par un autre script ou non destinés au <picture>. */
const SKIP_DIRS = new Set(['gen', 'og', 'hero-slides']);

const ko = (n) => `${(n / 1024).toFixed(0)} Ko`;

function collect(dir, out = []) {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		const stat = statSync(full);
		if (stat.isDirectory()) {
			if (!SKIP_DIRS.has(name)) collect(full, out);
		} else if (/\.(jpe?g|png)$/i.test(name)) {
			out.push(full);
		}
	}
	return out;
}

const load = (file, fallback) => {
	try {
		return JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		return fallback;
	}
};

async function main() {
	if (!existsSync(SRC_DIR)) {
		console.warn('[images] dossier source introuvable — étape ignorée.');
		return;
	}

	mkdirSync(GEN_DIR, { recursive: true });
	mkdirSync(CACHE_DIR, { recursive: true });

	const sharp = (await import('sharp')).default;
	const files = collect(SRC_DIR);
	const state = load(STATE, {});
	const manifest = { generatedAt: new Date().toISOString(), images: {} };

	let converted = 0;
	let reused = 0;
	let beforeBytes = 0;
	let afterBytes = 0;

	for (const file of files) {
		// Chemin tel que servi depuis le site : /images/toge-graduation-1.jpg
		const rel = `/${file.replace(/^public\//, '').replace(/\\/g, '/')}`;
		const raw = readFileSync(file);
		const hash = createHash('md5').update(raw).digest('hex');
		const cached = state[rel];

		const stillValid =
			cached &&
			cached.hash === hash &&
			cached.variants.every((variant) => existsSync(`public${variant.src}`));

		if (stillValid) {
			manifest.images[rel] = { w: cached.w, h: cached.h, variants: cached.variants };
			reused += 1;
			continue;
		}

		const meta = await sharp(file).metadata();
		const name = rel
			.replace(/^\/images\//, '')
			.replace(/\.[^.]+$/, '')
			.replace(/[^\w.-]+/g, '--');

		// Variantes inférieures à l'original + une à pleine taille.
		const targets = [...new Set([...WIDTHS.filter((w) => w < meta.width), meta.width])].sort((a, b) => a - b);

		const variants = [];
		for (const width of targets) {
			const dest = join(GEN_DIR, `${name}-${width}.webp`);
			const info = await sharp(file)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: WEBP_QUALITY, effort: 5, alphaQuality: 88 })
				.toFile(dest);
			variants.push({ w: info.width, src: `/images/gen/${basename(dest)}` });
		}

		beforeBytes += raw.length;
		afterBytes += variants.reduce((sum, v) => sum + statSync(`public${v.src}`).size, 0);

		state[rel] = { hash, w: meta.width, h: meta.height, variants };
		manifest.images[rel] = { w: meta.width, h: meta.height, variants };
		converted += 1;
	}

	// Nettoie les variantes orphelines d'images supprimées du dépôt.
	const known = new Set(Object.values(manifest.images).flatMap((entry) => entry.variants.map((v) => basename(v.src))));
	for (const name of readdirSync(GEN_DIR)) {
		if (!known.has(name)) rmSync(join(GEN_DIR, name), { force: true });
	}

	// Élagage de l'état : retire les images disparues.
	for (const key of Object.keys(state)) {
		if (!manifest.images[key]) delete state[key];
	}

	writeFileSync(STATE, JSON.stringify(state));
	writeFileSync(MANIFEST, JSON.stringify(manifest));

	console.log(
		`[images] ${files.length} source(s) : ${converted} convertie(s), ${reused} réutilisée(s) depuis le cache. ` +
			`Poids servi si WebP supporté : ${ko(beforeBytes)} → ${ko(afterBytes)} ` +
			`(-${(100 * (1 - afterBytes / Math.max(beforeBytes, 1))).toFixed(0)} % sur l'ensemble des variantes).`,
	);
}

main().catch((error) => {
	console.warn('[images] optimisation ignorée :', error?.message ?? error);
});
