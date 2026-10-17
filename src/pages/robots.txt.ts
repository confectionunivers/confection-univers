/**
 * robots.txt — généré au build pour rester aligné sur le domaine réel.
 *
 * Trois règles seulement, toutes utiles :
 *   1. `Allow: /`  — rien n'est masqué : le site est 100 % public et chaque
 *      page est une page d'atterrissage potentielle (services, collections,
 *      articles). Bloquer des ressources CSS/JS ici serait contre-productif :
 *      Google doit pouvoir les récupérer pour juger le rendu mobile.
 *   2. `Disallow: /api/` — les endpoints de formulaire ne renvoient pas de
 *      contenu ; les faire crawler gaspillerait du budget de crawl.
 *   3. `Sitemap:` — c'est la ligne qui compte vraiment : elle indique à
 *      Google et Bing où trouver les 36 URL, y compris les pages profondes
 *      mal reliées.
 */
import type { APIRoute } from 'astro';
import { SITE } from '../lib/seo';

export const GET: APIRoute = async () => {
	const body = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/

# Les robots « IA » sont autorisés : aucune politique de blocage n'est
# définie pour l'instant. Décommenter pour restreindre.
# User-agent: GPTBot
# Disallow: /

Sitemap: ${SITE.origin}/sitemap.xml
Host: ${SITE.domain}
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=86400',
		},
	});
};

export const prerender = true;
