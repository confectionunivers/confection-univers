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
 * Usage manuel : node scripts/optimize-hero-images.mjs
 */
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'public/images/hero-slides';
const QUALITY = 82;

const ko = (bytes) => `${(bytes / 1024).toFixed(0)} Ko`;

async function main() {
  if (!existsSync(DIR)) {
    console.warn(`[images] dossier introuvable : ${DIR} — étape ignorée.`);
    return;
  }

  const pngFiles = readdirSync(DIR).filter((name) => name.toLowerCase().endsWith('.png'));

  if (!pngFiles.length) {
    console.warn(`[images] aucun PNG dans ${DIR} — étape ignorée.`);
    return;
  }

  const sharp = (await import('sharp')).default;

  let converted = 0;
  let before = 0;
  let after = 0;

  for (const name of pngFiles) {
    const src = join(DIR, name);
    const dest = src.replace(/\.png$/i, '.webp');

    // Rien à faire si le WebP est déjà plus récent que le PNG source.
    if (existsSync(dest) && statSync(dest).mtimeMs >= statSync(src).mtimeMs) {
      continue;
    }

    const srcSize = statSync(src).size;
    const info = await sharp(src)
      .webp({ quality: QUALITY, effort: 6, alphaQuality: 90 })
      .toFile(dest);

    converted += 1;
    before += srcSize;
    after += info.size;

    const gain = ((1 - info.size / srcSize) * 100).toFixed(0);
    console.log(`[images] ${name} → ${name.replace(/\.png$/i, '.webp')} : ${ko(srcSize)} → ${ko(info.size)} (-${gain} %)`);
  }

  if (converted) {
    console.log(
      `[images] ${converted} fichier(s) converti(s) : ${ko(before)} → ${ko(after)} au total.`,
    );
  } else {
    console.log('[images] WebP déjà à jour, rien à faire.');
  }
}

// Un échec ici ne doit jamais bloquer le déploiement : les PNG restent servis
// en repli et les WebP déjà versionnés restent utilisés.
try {
  await main();
} catch (error) {
  console.warn('[images] conversion WebP ignorée :', error?.message ?? error);
}
