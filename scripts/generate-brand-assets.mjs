/**
 * Génère les assets de marque nécessaires au SEO / partage social.
 *
 * Avant : un unique `public/favicon.png` de 4162×2565 px (160 Ko) servi à
 * chaque requête, et `og:image` = le logo 2000×419 (mauvais ratio pour les
 * cartes Facebook/WhatsApp/LinkedIn, qui attendent du 1200×630).
 *
 * Maintenant :
 *   - favicon.svg            → vectoriel, net à 16 px, ~500 o
 *   - favicon-32x32.png      → repli navigateurs anciens
 *   - favicon.png            → 64 px (chemin historique conservé)
 *   - apple-touch-icon.png   → 180 px, fond opaque (exigence iOS)
 *   - icon-192/512.png       → manifest PWA
 *   - images/og/default.jpg  → carte de partage 1200×630 on-brand
 *   - site.webmanifest       → nom court/long, couleurs de thème
 *
 * Tout est dérivé du logo source `public/images/logo.png` : changer le logo
 * suffit à régénérer des assets cohérents.
 *
 * Usage : node scripts/generate-brand-assets.mjs
 */
import sharp from 'sharp';
import { mkdirSync, writeFileSync, existsSync, statSync } from 'node:fs';

const LOGO = 'public/images/logo.png';
const OUT = 'public';

const NAVY = '#00001C';
const GOLD = '#F5B544';
const GOLD_LIGHT = '#FACC6B';
const MUTED = '#A0ACC6';
const WHITE = '#F7F5F0';

const ko = (n) => `${(n / 1024).toFixed(1)} Ko`;

/** Monogramme « CU » : région de gauche du logo horizontal, rognée au pixel près. */
async function monogram() {
	const meta = await sharp(LOGO).metadata();

	// Le logotype horizontal = monogramme + texte. On isole la partie gauche
	// (≈ 40 % de la largeur) puis `trim()` retire les bords transparents :
	// on obtient la boîte englobante exacte du « CU ».
	const trimmed = await sharp(LOGO)
		.extract({ left: 0, top: 0, width: Math.round(meta.width * 0.335), height: meta.height })
		.trim({ threshold: 8 })
		.png()
		.toBuffer({ resolveWithObject: true });

	const { width, height } = trimmed.info;

	// Le monogramme source est bleu nuit : `tint()` ne suffirait pas (il
	// conserve la luminance, donc le résultat resterait sombre). On récupère
	// donc le canal alpha comme masque et on peint un aplat or dessous :
	// le monogramme ressort or plein, lisible sur fond navy.
	const mask = await sharp(trimmed.data).extractChannel('alpha').toBuffer();

	// NB : `metadata()` décrit l'image SOURCE et non la sortie du pipeline —
	// on dimensionne donc l'aplat or à partir de la boîte rognée.
	const mono = await sharp({
		create: { width, height, channels: 3, background: { r: 0xf5, g: 0xb5, b: 0x44 } },
	})
		.joinChannel(mask)
		.png()
		.toBuffer();

	return mono;
}

/** Fond carré navy à coins arrondis. */
function iconBackground(size, radiusRatio = 0.22) {
	const r = Math.round(size * radiusRatio);
	return Buffer.from(
		`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
			<rect width="${size}" height="${size}" rx="${r}" fill="${NAVY}"/>
			<rect x="1" y="1" width="${size - 2}" height="${size - 2}" rx="${r - 1}" fill="none" stroke="${GOLD}" stroke-opacity="0.25" stroke-width="2"/>
		</svg>`,
	);
}

async function buildIcon(size, file, monogramPad = 0.2) {
	const mono = await monogram();
	const inner = Math.round(size * (1 - monogramPad * 2));
	const monoResized = await sharp(mono).resize(inner, inner, { fit: 'inside' }).png().toBuffer();
	const offset = Math.round((size - inner) / 2);

	await sharp(iconBackground(size))
		.composite([{ input: monoResized, left: offset, top: offset }])
		.png({ compressionLevel: 9 })
		.toFile(file);

	console.log(`[brand] ${file} (${size}px) → ${ko(statSync(file).size)}`);
}

/** Favicon vectoriel : monogramme or dessiné en traits, lisible à 16 px. */
function buildSvgFavicon(file) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
	<rect width="64" height="64" rx="14" fill="${NAVY}"/>
	<rect x="1" y="1" width="62" height="62" rx="13" fill="none" stroke="${GOLD}" stroke-opacity="0.25" stroke-width="2"/>
	<!-- C : anneau ouvert à droite -->
	<path d="M 33 19.5 A 13.5 13.5 0 1 0 33 44.5" fill="none" stroke="${GOLD}" stroke-width="8.5" stroke-linecap="round"/>
	<!-- U : jambages + cuvette -->
	<path d="M 42 22 V 36.5 A 8.5 8.5 0 0 0 59 36.5 V 22" fill="none" stroke="${GOLD_LIGHT}" stroke-width="8.5" stroke-linecap="round"/>
</svg>
`;
	writeFileSync(file, svg);
	console.log(`[brand] ${file} (vectoriel) → ${ko(statSync(file).size)}`);
}

/** Carte de partage 1200×630 (og:image, twitter:image, WhatsApp…). */
async function buildOgImage(file) {
	// Le logo est bleu nuit : il n'est lisible que sur un fond clair. On le
	// pose donc sur un panneau blanc cassé, comme dans l'en-tête du site.
	const logoWhite = await sharp(LOGO)
		.resize({ width: 820 })
		.flatten({ background: '#FFFFFF' })
		.png()
		.toBuffer();
	const logoMeta = await sharp(logoWhite).metadata();

	const W = 1200;
	const H = 630;
	const panelW = 980;
	const panelH = logoMeta.height + 88;
	const panelX = (W - panelW) / 2;
	const panelY = 96;

	const background = Buffer.from(
		`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
			<defs>
				<radialGradient id="glowA" cx="85%" cy="8%" r="60%">
					<stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22"/>
					<stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
				</radialGradient>
				<radialGradient id="glowB" cx="6%" cy="95%" r="55%">
					<stop offset="0%" stop-color="${GOLD}" stop-opacity="0.14"/>
					<stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
				</radialGradient>
			</defs>
			<rect width="${W}" height="${H}" fill="${NAVY}"/>
			<rect width="${W}" height="${H}" fill="url(#glowA)"/>
			<rect width="${W}" height="${H}" fill="url(#glowB)"/>
			<!-- panneau clair portant le logotype -->
			<rect x="${panelX}" y="${panelY}" width="${panelW}" height="${panelH}" rx="36" fill="#FFFFFF"/>
			<!-- filet or -->
			<rect x="${panelX}" y="${panelY + panelH + 42}" width="150" height="6" rx="3" fill="${GOLD}"/>
			<text x="${panelX}" y="${panelY + panelH + 108}" font-family="sans-serif" font-size="34" font-weight="600" fill="${WHITE}">Confection industrielle de vêtements professionnels</text>
			<text x="${panelX}" y="${panelY + panelH + 152}" font-family="sans-serif" font-size="27" fill="${MUTED}">Uniformes · Toges · Blouses médicales · Tenues de travail et de sport</text>
			<text x="${W - panelX}" y="${H - 42}" text-anchor="end" font-family="sans-serif" font-size="28" font-weight="600" fill="${GOLD}">confectionunivers.com</text>
			<text x="${panelX}" y="${H - 42}" font-family="sans-serif" font-size="26" fill="${MUTED}">Thiès, Sénégal</text>
		</svg>`,
	);

	await sharp(background)
		.composite([
			{
				input: logoWhite,
				left: Math.round((W - logoMeta.width) / 2),
				top: Math.round(panelY + (panelH - logoMeta.height) / 2),
			},
		])
		.jpeg({ quality: 86, mozjpeg: true })
		.toFile(file);

	console.log(`[brand] ${file} (${W}×${H}) → ${ko(statSync(file).size)}`);
}

function buildManifest(file) {
	const manifest = {
		name: 'Confection Univers — Confection industrielle au Sénégal',
		short_name: 'Confection U.',
		description:
			'Uniformes scolaires, toges de graduation, blouses médicales, tenues de travail et de sport confectionnés au Sénégal.',
		lang: 'fr',
		dir: 'ltr',
		start_url: '/',
		scope: '/',
		display: 'standalone',
		background_color: NAVY,
		theme_color: NAVY,
		categories: ['business', 'shopping'],
		icons: [
			{ src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
			{ src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
		],
	};
	writeFileSync(file, JSON.stringify(manifest, null, 2));
	console.log(`[brand] ${file} → ${ko(statSync(file).size)}`);
}

async function main() {
	if (!existsSync(LOGO)) {
		console.warn('[brand] logo source introuvable — génération ignorée.');
		return;
	}
	mkdirSync(`${OUT}/images/og`, { recursive: true });

	buildSvgFavicon(`${OUT}/favicon.svg`);
	await buildIcon(32, `${OUT}/favicon-32x32.png`, 0.16);
	await buildIcon(64, `${OUT}/favicon.png`, 0.16);
	await buildIcon(180, `${OUT}/apple-touch-icon.png`, 0.18);
	await buildIcon(192, `${OUT}/icon-192.png`, 0.18);
	await buildIcon(512, `${OUT}/icon-512.png`, 0.2);
	await buildOgImage(`${OUT}/images/og/default.jpg`);
	buildManifest(`${OUT}/site.webmanifest`);

	console.log('[brand] assets de marque régénérés.');
}

main().catch((error) => {
	// Comme pour les WebP : un échec ne doit jamais casser le build.
	console.warn('[brand] génération ignorée :', error?.message ?? error);
});
