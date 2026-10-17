/**
 * sitemap.xml — généré au build à partir du registre de routes.
 *
 * Pourquoi un endpoint plutôt qu'un fichier statique dans public/ :
 * les routes dynamiques (8 services, 6 collections, 14 articles) sont
 * dérivées des mêmes tableaux que les pages elles-mêmes. Ajouter une
 * entrée dans `src/lib/site-data.ts` met le sitemap à jour tout seul —
 * plus jamais d'URL oubliée ou d'URL fantôme.
 *
 * Inclusions notables :
 *   - `<lastmod>` : Google l'utilise pour prioriser ses passages.
 *   - extension `image:image` : les visuels produits sont le cœur de
 *     l'offre, ils doivent être découverts dans Google Images.
 *   - exclusion des redirections (`/projects`) et des pages `noindex`.
 */
import type { APIRoute } from 'astro';
import { getAllRoutes, SERVICES, COLLECTIONS, type SiteRoute } from '../lib/site-data';
import { BLOG_POSTS } from '../lib/blog-data';
import { SITE, absoluteUrl, canonicalUrl, frenchDateToIso } from '../lib/seo';

export const GET: APIRoute = async () => {
	const today = new Date().toISOString().slice(0, 10);

	const routes: SiteRoute[] = [...getAllRoutes()];

	// Pages de service — cœur de l'offre, priorité haute.
	for (const service of SERVICES) {
		routes.push({
			path: `/services/${service.slug}`,
			lastmod: today,
			changefreq: 'monthly',
			priority: 0.8,
			images: [service.image],
		});
	}

	// Galeries de collections — très visuelles, on déclare leurs images.
	for (const collection of COLLECTIONS) {
		routes.push({
			path: `/collections/${collection.slug}`,
			lastmod: today,
			changefreq: 'monthly',
			priority: 0.7,
			// Google n'indexe qu'une image par URL dans la pratique :
			// on déclare la vignette principale + quelques variantes.
			images: collection.images.slice(0, 4),
		});
	}

	// Articles de blog — `lastmod` = date de publication réelle.
	for (const post of BLOG_POSTS) {
		routes.push({
			path: `/blog/${post.slug}`,
			lastmod: frenchDateToIso(post.date) ?? today,
			changefreq: 'yearly',
			priority: 0.6,
			images: [post.image],
		});
	}

	const escape = (value: string) =>
		value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

	// Dédoublonnage : la dernière déclaration d'un chemin l'emporte, ce qui
	// permet à une page de surcharger une entrée du registre statique.
	const unique = new Map<string, SiteRoute>();
	for (const route of routes) {
		if (route.exclude) continue;
		unique.set(route.path, route);
	}

	const urls = [...unique.values()].map((route) => {
		const images = (route.images ?? [])
			.map(
				(src) => `    <image:image>
      <image:loc>${escape(absoluteUrl(src))}</image:loc>
    </image:image>`,
			)
			.join('\n');

		return `  <url>
    <loc>${escape(canonicalUrl(route.path))}</loc>${route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : ''}${
			route.changefreq ? `\n    <changefreq>${route.changefreq}</changefreq>` : ''
		}${route.priority !== undefined ? `\n    <priority>${route.priority.toFixed(1)}</priority>` : ''}
${images ? `${images}\n` : ''}  </url>`;
	});

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			// Le sitemap ne change qu'au déploiement.
			'Cache-Control': 'public, max-age=3600, s-maxage=86400',
		},
	});
};

// Généré au build : le fichier est servi statiquement depuis dist/.
export const prerender = true;
