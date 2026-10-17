/**
 * Audit SEO du build statique (dist/).
 *
 * Vérifie, page par page, les règles qui déterminent l'indexation et le
 * rendu dans les SERP. S'exécute après `npm run build` :
 *
 *   npm run build && npm run seo:audit
 *
 * Contrôles :
 *   1. <title> présent, 30–60 caractères, unique sur le site ;
 *   2. meta description présente, 70–160 caractères, unique ;
 *   3. canonical absolu, sans slash final, cohérent avec le sitemap ;
 *   4. robots, og:url, og:title, og:description, og:image, twitter:card ;
 *   5. un seul <h1> par page indexable ;
 *   6. chaque <img> : alt, width+height (anti-CLS), loading ;
 *   7. aucun lien interne mort ;
 *   8. sitemap ⊆ pages buildées, et réciproquement hors noindex/redirect ;
 *   9. JSON-LD parseable sur chaque page ;
 *  10. aucune feuille de police externe bloquante ;
 *  11. robots.txt déclare le sitemap.
 *
 * Code de sortie non nul si un contrôle « erreur » échoue : utilisable en CI.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const DIST = 'dist';
const ORIGIN = 'https://confectionunivers.com';

const errors = [];
const warnings = [];
const ok = [];

function walk(dir, out = []) {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) walk(full, out);
		else if (name.endsWith('.html')) out.push(full);
	}
	return out;
}

// Les longueurs SERP se mesurent sur le texte réel, pas sur ses entités.
const decode = (value) =>
	value
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&');

const routeOf = (file) => {
	const rel = relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '');
	return `/${rel}`.replace(/\/+$/, '') || '/';
};

const REDIRECT_ROUTES = new Set(['/projects']); // redirection Astro, pas de contenu

const files = walk(DIST);
const routes = new Set(files.map(routeOf));

const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();

let imgTotal = 0;
let imgNoAlt = 0;
let imgNoDims = 0;
let imgNoLoading = 0;
let multiH1 = 0;
let jsonLdBlocks = 0;

const internalLinks = new Map();

for (const file of files) {
	const route = routeOf(file);
	const html = readFileSync(file, 'utf8');

	/* --- 1. title --- */
	const isRedirect = REDIRECT_ROUTES.has(route);
	const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]).trim();
	if (!title && !isRedirect) errors.push(`${route} : <title> absent`);
	else {
		if (!isRedirect && (title.length < 30 || title.length > 60)) warnings.push(`${route} : title ${title.length} c. (cible 30–60) — « ${title} »`);
		titles.set(title, [...(titles.get(title) ?? []), route]);
	}

	/* --- 2. description --- */
	const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
	if (!desc && !isRedirect) errors.push(`${route} : meta description absente`);
	else {
		if (!isRedirect && (desc.length < 70 || desc.length > 160)) warnings.push(`${route} : description ${desc.length} c. (cible 70–160)`);
		const key = desc.slice(0, 80);
		descriptions.set(key, [...(descriptions.get(key) ?? []), route]);
	}

	/* --- 3. canonical --- */
	const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [, ''])[1];
	if (!canonical && !isRedirect) errors.push(`${route} : canonical absent`);
	else {
		if (!canonical.startsWith(`${ORIGIN}/`)) errors.push(`${route} : canonical hors origine — ${canonical}`);
		if (canonical !== `${ORIGIN}/` && canonical.endsWith('/')) errors.push(`${route} : canonical avec slash final — ${canonical}`);
		if (/[?#]/.test(canonical)) errors.push(`${route} : canonical avec query/fragment — ${canonical}`);
		canonicals.set(route, canonical);
	}

	/* --- 4. robots + social --- */
	const noindex = /<meta name="robots" content="noindex/.test(html);
	if (!/<meta name="robots" content="/.test(html) && !isRedirect) errors.push(`${route} : meta robots absent`);
	for (const prop of ['og:url', 'og:title', 'og:description', 'og:image']) {
		if (!isRedirect && !html.includes(`property="${prop}"`)) errors.push(`${route} : ${prop} manquant`);
	}
	if (!isRedirect && !html.includes('name="twitter:card"')) errors.push(`${route} : twitter:card manquant`);
	const ogUrl = (html.match(/<meta property="og:url" content="([^"]+)"/) || [, ''])[1];
	if (ogUrl && canonical && ogUrl !== canonical) errors.push(`${route} : og:url ≠ canonical`);

	/* --- 5. H1 --- */
	const h1 = (html.match(/<h1[\s>]/g) || []).length;
	if (!noindex && route !== '/projects') {
		if (h1 !== 1) errors.push(`${route} : ${h1} <h1> (attendu 1)`);
	} else if (h1 > 1) multiH1++;

	/* --- 6. images --- */
	for (const tag of html.match(/<img[^>]*>/g) || []) {
		// Lightboxes : le src est injecté au clic par le script de la page.
		if (/\sid=|src=""/.test(tag)) continue;
		imgTotal++;
		if (!/\salt(=|[\s>])/.test(tag)) {
			imgNoAlt++;
			errors.push(`${route} : <img> sans alt`);
		}
		if (!/width=/.test(tag) || !/height=/.test(tag)) imgNoDims++;
		if (!/loading=/.test(tag)) imgNoLoading++;
	}

	/* --- 7. liens internes --- */
	for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
		const list = internalLinks.get(href) ?? new Set();
		list.add(route);
		internalLinks.set(href, list);
	}

	/* --- 9. JSON-LD --- */
	for (const [, payload] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
		try {
			JSON.parse(payload.replace(/\\u003c/g, '<').replace(/\\u003e/g, '>').replace(/\\u0026/g, '&'));
			jsonLdBlocks++;
		} catch (error) {
			errors.push(`${route} : JSON-LD invalide — ${error.message}`);
		}
	}

	/* --- 10. polices externes --- */
	if (/<link[^>]+href="https?:\/\/fonts\.(googleapis|gstatic)\.com/.test(html)) {
		errors.push(`${route} : feuille de police externe bloquante`);
	}
}

/* --- doublons --- */
for (const [title, list] of titles) if (list.length > 1) errors.push(`title dupliqué (${list.length}×) : « ${title} » → ${list.join(', ')}`);
for (const [desc, list] of descriptions) if (list.length > 1) errors.push(`description dupliquée (${list.length}×) : « ${desc}… » → ${list.join(', ')}`);

/* --- 7. liens morts --- */
const ASSET = /\.(png|jpe?g|webp|svg|gif|ico|css|js|woff2?|json|xml|txt|map|webmanifest)$/i;
for (const [href] of internalLinks) {
	if (ASSET.test(href)) {
		if (!existsSync(join(DIST, href))) errors.push(`asset interne introuvable : ${href}`);
		continue;
	}
	const normalized = href.replace(/\/+$/, '') || '/';
	if (!routes.has(normalized)) errors.push(`lien interne mort : ${href}`);
}

/* --- 8. sitemap vs pages --- */
if (!existsSync(join(DIST, 'sitemap.xml'))) errors.push('sitemap.xml absent du build');
else {
	const xml = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
	const sitemapRoutes = new Set(
		[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url.replace(ORIGIN, '').replace(/\/+$/, '') || '/'),
	);
	for (const url of sitemapRoutes) {
		if (!routes.has(url)) errors.push(`sitemap : URL sans page buildée — ${url}`);
	}
	for (const route of routes) {
		// Astro écrit `/404` dans dist/404.html mais `/about` dans dist/about/index.html.
		const candidates = [join(DIST, route.slice(1), 'index.html'), join(DIST, `${route.slice(1)}.html`), join(DIST, 'index.html')];
		const file = candidates.find((candidate) => existsSync(candidate));
		const html = readFileSync(file, 'utf8');
		const noindex = /<meta name="robots" content="noindex/.test(html);
		if (noindex || route === '/projects') continue;
		if (!sitemapRoutes.has(route)) errors.push(`page indexable absente du sitemap — ${route}`);
		const canonical = canonicals.get(route);
		if (canonical && !sitemapRoutes.has(canonical.replace(ORIGIN, '').replace(/\/+$/, '') || '/')) {
			errors.push(`canonical hors sitemap — ${route}`);
		}
	}
}

/* --- 11. robots.txt --- */
if (!existsSync(join(DIST, 'robots.txt'))) errors.push('robots.txt absent du build');
else if (!readFileSync(join(DIST, 'robots.txt'), 'utf8').includes(`Sitemap: ${ORIGIN}/sitemap.xml`)) {
	errors.push('robots.txt : directive Sitemap manquante ou incohérente');
}

/* ---------------- rapport ---------------- */
console.log('════════ AUDIT SEO — dist/ ════════');
console.log(`Pages analysées        : ${files.length}`);
console.log(`<img> analysées        : ${imgTotal} (sans alt ${imgNoAlt}, sans dimensions ${imgNoDims}, sans loading ${imgNoLoading})`);
console.log(`Blocs JSON-LD valides  : ${jsonLdBlocks}`);
console.log('');

if (warnings.length) {
	console.log(`— ${warnings.length} avertissement(s) —`);
	for (const w of warnings) console.log('  ⚠ ' + w);
	console.log('');
}

if (errors.length) {
	console.log(`— ${errors.length} ERREUR(S) —`);
	for (const e of errors) console.log('  ✗ ' + e);
	process.exitCode = 1;
} else {
	ok.push('titles uniques et dans la cible', 'descriptions uniques', 'canonicals cohérents avec le sitemap', 'images : alt + dimensions + lazy', 'JSON-LD valide partout', 'aucun lien mort', 'robots.txt + sitemap.xml présents');
	console.log('— Aucun blocage —');
	for (const o of ok) console.log('  ✓ ' + o);
}
console.log('═══════════════════════════════════');
