/**
 * Lecture du manifeste d'images produit par scripts/optimize-images.mjs.
 *
 * Sert à deux endroits :
 *   - <Picture> : srcset WebP + dimensions intrinsèques (réservation d'espace,
 *     donc zéro décalage de mise en page / CLS) ;
 *   - le Layout : `og:image:width` / `og:image:height` doivent décrire la
 *     VRAIE image partagée. Annoncer 1200×630 pour un visuel de 500×281 fait
 *     échouer la validation des cartes chez Facebook/LinkedIn/WhatsApp.
 *
 * Si le manifeste est absent (clone frais, build sans prebuild), tout
 * retombe proprement : pas de srcset, pas de dimensions annoncées.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface ImageVariant {
	w: number;
	src: string;
}

export interface ImageMeta {
	w: number;
	h: number;
	variants: ImageVariant[];
}

const CACHE_KEY = '__cuImageManifest';

export function readImageManifest(): Record<string, ImageMeta> | null {
	const scope = globalThis as unknown as Record<string, unknown>;
	if (CACHE_KEY in scope) return scope[CACHE_KEY] as Record<string, ImageMeta> | null;

	let manifest: Record<string, ImageMeta> | null = null;
	try {
		const file = join(process.cwd(), '.image-cache', 'image-manifest.json');
		if (existsSync(file)) {
			manifest = JSON.parse(readFileSync(file, 'utf8')).images ?? null;
		}
	} catch {
		manifest = null;
	}
	scope[CACHE_KEY] = manifest;
	return manifest;
}

/** Métadonnées d'une image du site, ou `null` si inconnue du manifeste. */
export function getImageMeta(src: string): ImageMeta | null {
	return readImageManifest()?.[src] ?? null;
}

/** srcset WebP trié par largeur, prêt pour l'attribut `srcset`. */
export function webpSrcset(src: string): string | null {
	const meta = getImageMeta(src);
	if (!meta?.variants?.length) return null;
	return meta.variants
		.slice()
		.sort((a, b) => a.w - b.w)
		.map((variant) => `${variant.src} ${variant.w}w`)
		.join(', ');
}
