#!/usr/bin/env node
/**
 * Remasterise les visuels du hero pour qu'ils aient assez de pixels après le
 * recadrage `object-cover` des cartes.
 *
 * Problème résolu : la carte principale est un cadre de ratio 0,46 alors que les
 * sources sont en 0,67-0,80. Le recadrage ne conserve que ~57 % de la largeur,
 * donc une source de 736 px ne fournit que ~420 px utiles — insuffisant pour un
 * écran retina (595 px) ou 3x (890 px). Le navigateur agrandissait l'image.
 *
 * Traitement : agrandissement Lanczos (meilleur que le redimensionnement du
 * navigateur) + masque de netteté léger pour restituer l'acuité.
 *
 * Usage : node scripts/hero-remaster.mjs [--target=1600] [--dry]
 */

import sharp from 'sharp';
import { statSync, copyFileSync, existsSync, mkdirSync } from 'fs';

const args = process.argv.slice(2);
const getArg = (n, d) => {
	const hit = args.find((a) => a.startsWith(`--${n}=`));
	return hit ? hit.split('=')[1] : d;
};
const TARGET = Number(getArg('target', 1600));
const DRY = args.includes('--dry');

const FILES = [
	'hero-toges-graduation.jpg',
	'hero-uniformes.jpg',
	'hero-tenues-travail-sport.jpg',
];
const DIR = 'src/assets/hero';
const BACKUP = '.hero-originaux';

if (!DRY && !existsSync(BACKUP)) {
	mkdirSync(BACKUP, { recursive: true });
	for (const f of FILES) copyFileSync(`${DIR}/${f}`, `${BACKUP}/${f}`);
	console.log(`💾 originaux sauvegardés dans ${BACKUP}/\n`);
}

console.log('fichier'.padEnd(34), 'avant'.padEnd(13), 'après'.padEnd(13), 'facteur  poids');
for (const f of FILES) {
	const src = `${DIR}/${f}`;
	const m = await sharp(src).metadata();
	const factor = TARGET / m.width;

	if (factor <= 1.001) {
		console.log(`${f.padEnd(34)} ${`${m.width}x${m.height}`.padEnd(13)} inchangé (déjà ≥ ${TARGET}px)`);
		continue;
	}

	const newW = TARGET;
	const newH = Math.round((m.height / m.width) * newW);
	const before = Math.round(statSync(src).size / 1024);

	if (DRY) {
		console.log(`${f.padEnd(34)} ${`${m.width}x${m.height}`.padEnd(13)} ${`${newW}x${newH}`.padEnd(13)} ${factor.toFixed(2)}x   (simulation)`);
		continue;
	}

	const out = `${DIR}/.tmp-${f}`;
	await sharp(src)
		.resize(newW, newH, { kernel: 'lanczos3', fit: 'fill' })
		// Masque de netteté léger : compense la perte d'acuité de l'agrandissement
		// sans créer de halos sur les contours.
		.sharpen({ sigma: 0.7, m1: 1.1, m2: 0.45 })
		.jpeg({ quality: 92, chromaSubsampling: '4:4:4', mozjpeg: true })
		.toFile(out);

	const after = Math.round(statSync(out).size / 1024);
	console.log(`${f.padEnd(34)} ${`${m.width}x${m.height}`.padEnd(13)} ${`${newW}x${newH}`.padEnd(13)} ${factor.toFixed(2)}x   ${before} → ${after} Ko`);

	// remplace seulement si tout s'est bien passé
	copyFileSync(out, src);
}

if (!DRY) {
	console.log('\n✅ Sources remasterisées. Lancez « npm run build » pour régénérer les variantes.');
	console.log(`   Pour revenir en arrière : cp ${BACKUP}/* ${DIR}/`);
}
