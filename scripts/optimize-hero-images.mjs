/**
 * Génère les versions WebP des silhouettes du hero (public/images/hero-slides).
 *
 * Les PNG détourés restent la source de vérité et servent de repli pour les
 * navigateurs anciens ; les WebP sont ~12x plus légers et sont servis en
 * priorité via <picture><source type="image/webp">.
 *
 * Ce script tourne automatiquement avant chaque build (script « prebuild ») :
 * il suffit donc de remplacer un PNG sur GitHub, le WebP sera régénéré par
 * Vercel au déploiement suivant.
 *
 * Les WebP sont régénérés à chaque build plutôt que comparés par date de
 * modification : après un `git checkout`, tous les fichiers portent la même
 * date et une comparaison de mtime laisserait passer des WebP périmés.
 *
 * Usage manuel : node scripts/optimize-hero-images.mjs
 */
import { readdirSync, statSync, existsSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'public/images/hero-slides';
const QUALITY = 82;

const ko = (bytes) => `${(bytes / 1024).toFixed(0)} Ko`;

async function main() {
  if (!existsSync(DIR)) {
    console.warn(`[images] dossier introuvable : ${DIR} — étape ignorée.`);
    return;
  }

  const files = readdirSync(DIR);
  const pngFiles = files.filter((name) => name.toLowerCase().endsWith('.png'));

  if (!pngFiles.length) {
    console.warn(`[images] aucun PNG dans ${DIR} — étape ignorée.`);
    return;
  }

  const sharp = (await import('sharp')).default;

  let before = 0;
  let after = 0;

  for (const name of pngFiles) {
    const src = join(DIR, name);
    const dest = src.replace(/\.png$/i, '.webp');
    const srcSize = statSync(src).size;

    const info = await sharp(src)
      .webp({ quality: QUALITY, effort: 6, alphaQuality: 90 })
      .toFile(dest);

    before += srcSize;
    after += info.size;

    const gain = ((1 - info.size / srcSize) * 100).toFixed(0);
    console.log(`[images] ${name} → ${name.replace(/\.png$/i, '.webp')} : ${ko(srcSize)} → ${ko(info.size)} (-${gain} %)`);
  }

  // Supprime les WebP dont le PNG source n'existe plus, pour éviter de servir
  // une ancienne silhouette supprimée sur GitHub.
  const orphans = files.filter(
    (name) =>
      name.toLowerCase().endsWith('.webp') &&
      !pngFiles.some((png) => png.replace(/\.png$/i, '.webp').toLowerCase() === name.toLowerCase()),
  );

  for (const orphan of orphans) {
    unlinkSync(join(DIR, orphan));
    console.log(`[images] ${orphan} supprimé (plus de PNG correspondant).`);
  }

  console.log(
    `[images] ${pngFiles.length} WebP généré(s) : ${ko(before)} → ${ko(after)} (${((1 - after / before) * 100).toFixed(0)} % de réduction).`,
  );
}

// Un échec ici ne doit jamais bloquer le déploiement : les PNG restent servis
// en repli et les WebP déjà versionnés restent utilisés.
try {
  await main();
} catch (error) {
  console.warn('[images] conversion WebP ignorée :', error?.message ?? error);
}
