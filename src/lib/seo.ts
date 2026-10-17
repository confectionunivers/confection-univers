/**
 * Noyau SEO du site : identité NAP, helpers d'URL, contrôle des balises
 * `<title>` / meta description, et fabriques de données structurées
 * schema.org (JSON-LD).
 *
 * Toute valeur « métier » (nom, adresse, téléphone, réseaux sociaux) est
 * déclarée UNE seule fois ici et réutilisée par le layout, le sitemap,
 * robots.txt et les schémas. C'est le fichier à modifier en premier.
 */

import { BLOG_POSTS, type BlogPost } from './blog-data';
import { COLLECTIONS, SERVICES, type Collection, type Service } from './site-data';

/* ------------------------------------------------------------------ */
/*  Identité du site                                                    */
/* ------------------------------------------------------------------ */

export const SITE = {
	name: 'Confection Univers',
	/** Nom tel qu'affiché dans `og:site_name` et les schémas. */
	brand: 'Confection Univers',
	domain: 'confectionunivers.com',
	origin: 'https://confectionunivers.com',
	lang: 'fr',
	/** `og:locale` au format langue_TERRITOIRE (ISO 639-1 / ISO 3166-1). */
	locale: 'fr_SN',
	/** Fuseau utilisé pour horodater le sitemap. */
	timezone: 'Africa/Dakar',

	tagline: 'Confection industrielle de vêtements professionnels au Sénégal',

	/**
	 * Suffixe ajouté aux `<title>` des pages internes. Gardé court : la
	 * marque tient dans les 60 caractères affichés par Google.
	 */
	titleSuffix: 'Confection Univers',
	titleSeparator: '|',

	/**
	 * Description par défaut (accueil + repli). 155 caractères maximum
	 * pour éviter la troncature dans les SERP.
	 */
	defaultDescription:
		'Confection Univers, atelier de confection industrielle à Thiès : uniformes scolaires, toges de graduation, blouses médicales, tenues de travail et de sport.',

	/**
	 * Description longue utilisée pour le schéma Organization uniquement
	 * (les schémas ne sont pas tronqués comme les SERP).
	 */
	longDescription:
		"Confection Univers est une entreprise sénégalaise de confection industrielle basée à Thiès. Depuis environ cinq ans, son atelier produit en série des uniformes scolaires, des toges de graduation et tenues académiques, des blouses médicales, des tenues de travail, des tenues de sport et des costumes africains sur mesure pour les institutions, écoles, hôpitaux, clubs et entreprises du Sénégal.",

	keywords: [
		'confection industrielle Sénégal',
		'uniforme scolaire Sénégal',
		'toge de graduation',
		'blouse médicale Thiès',
		'tenue de travail entreprise',
		'costume africain sur mesure',
		'maillot d’équipe personnalisé',
		'atelier de confection Thiès',
	],

	/* --- NAP : Name, Address, Phone (cohérence = SEO local) --- */
	address: {
		street: 'Keur Massamba Geuye 2, Lot 129 Bis',
		city: 'Thiès',
		region: 'Thiès',
		postalCode: '',
		country: 'SN',
		countryLabel: 'Sénégal',
	},
	/**
	 * Coordonnées de l'atelier.
	 * ⚠️ Valeurs approchées au centre de Thiès : à remplacer par les
	 * coordonnées GPS exactes relevées sur Google Maps (clic droit sur
	 * l'épingle → copier) pour que le schéma LocalBusiness soit juste.
	 */
	geo: { latitude: 14.7919, longitude: -16.9253 },
	phone: '+221772960776',
	phoneDisplay: '+221 77 296 07 76',
	whatsapp: 'https://wa.me/221772960776',
	email: 'confectionunivers@gmail.com',

	/**
	 * Horaires d'ouverture.
	 * ⚠️ Laisser `null` tant que l'information n'est pas confirmée :
	 * Google pénalise les horaires inexacts dans les schémas LocalBusiness.
	 * Renseigner par ex. :
	 *   [{ days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
	 *    { days: ['Saturday'], opens: '09:00', closes: '15:00' }]
	 */
	openingHours: null as null | { days: string[]; opens: string; closes: string }[],

	/** « Sur devis » : le site n'affiche pas de tarif public. */
	priceRange: 'Sur devis',

	/**
	 * Profils sociaux. ⚠️ À vérifier : ces URL sont déduites du pseudo et
	 * renvoient peut-être une 404. Un `sameAs` pointant vers une page morte
	 * fait perdre le bénéfice du graphe de connaissance.
	 */
	social: {
		facebook: 'https://facebook.com/confectionunivers',
		instagram: 'https://instagram.com/confectionunivers',
		linkedin: 'https://linkedin.com/company/confectionunivers',
		// Chaîne confirmée par l'entreprise le 2026-10-17.
		youtube: 'https://www.youtube.com/@ConfectionUnivers',
	},

	/** Zones desservies — alimente `areaServed` du schéma LocalBusiness. */
	areaServed: ['Sénégal', 'Dakar', 'Thiès', 'Saint-Louis', 'Touba', 'Mbour', 'Ziguinchor'],

	/** Année de création approximative (le site indique « environ cinq ans »). */
	foundingDate: '2020',

	images: {
		logo: '/images/logo.png',
		/** Carte de partage par défaut, 1200×630 (ratio exigé par OG/Twitter). */
		ogDefault: '/images/og/default.jpg',
		ogDefaultAlt:
			'Confection Univers — atelier de confection industrielle de vêtements professionnels à Thiès, Sénégal',
		favicon: '/favicon.png',
		building: '/images/about-facility.jpg',
	},
} as const;

/* ------------------------------------------------------------------ */
/*  Helpers d'URL                                                       */
/* ------------------------------------------------------------------ */

/** Retire le slash final (sauf pour la racine). */
export function stripTrailingSlash(path: string): string {
	if (path.length <= 1) return '/';
	return path.endsWith('/') ? path.slice(0, -1) : path;
}

/**
 * Construit une URL absolue à partir d'un chemin relatif.
 * `absoluteUrl('/images/logo.png')` → `https://confectionunivers.com/images/logo.png`
 */
export function absoluteUrl(path: string | undefined | null): string {
	if (!path) return SITE.origin + '/';
	if (/^https?:\/\//i.test(path)) return path;
	const clean = path.startsWith('/') ? path : `/${path}`;
	return `${SITE.origin}${clean === '/' ? '/' : stripTrailingSlash(clean)}`;
}

/**
 * URL canonique d'une page : absolue, sans slash final, sans query string
 * ni fragment. C'est cette forme qui est reprise dans le sitemap pour que
 * canonique et sitemap concordent exactement.
 */
export function canonicalUrl(path: string): string {
	const [withoutHash] = path.split('#');
	const [withoutQuery] = withoutHash.split('?');
	return absoluteUrl(stripTrailingSlash(withoutQuery) || '/');
}

/* ------------------------------------------------------------------ */
/*  Balises <title> et meta description                                 */
/* ------------------------------------------------------------------ */

/**
 * `<title>` optimisé SERP :
 * - marque ajoutée si absente,
 * - longueur ramenée sous 60 caractères en supprimant d'abord la marque
 *   (jamais le sujet), pour éviter la troncature « … » dans Google.
 */
export function buildTitle(raw: string, { withBrand = true } = {}): string {
	const base = raw.trim().replace(/\s+/g, ' ');
	let title = withBrand && !base.includes(SITE.brand) ? `${base} ${SITE.titleSeparator} ${SITE.brand}` : base;

	const MAX = 60;
	if (title.length <= MAX) return title;

	// 1. On retire le suffixe de marque (« | Marque » ou « - Marque ») :
	//    le sujet passe avant la marque dans un onglet de résultats.
	const suffix = ` ${SITE.titleSeparator} ${SITE.brand}`;
	const dashSuffix = ` - ${SITE.brand}`;
	for (const mark of [suffix, dashSuffix]) {
		if (title.endsWith(mark) && title.length - mark.length >= 20) {
			title = title.slice(0, -mark.length).trim();
		}
	}
	// La marque reprend sa place si le sujet tient encore avec elle.
	if (!title.includes(SITE.brand) && title.length + suffix.length <= MAX) {
		title = `${title}${suffix}`;
	}
	if (title.length <= MAX) return title;

	// 2. Toujours trop long : on coupe sur un séparateur naturel.
	const head = title.slice(0, MAX);
	const cut = Math.max(head.lastIndexOf(' — '), head.lastIndexOf(' : '), head.lastIndexOf(', '), head.lastIndexOf(' '));
	if (cut > 24) return head.slice(0, cut).trim().replace(/[,:;—-]+$/, '');

	return `${head.trim()}…`;
}

/**
 * Meta description normalisée : espaces aplatis, entités défaites,
 * coupée proprement sous 155 caractères. Une description vide retombe
 * sur la description par défaut — Google écrirait sinon son propre
 * extrait, souvent moins pertinent.
 */
export function buildDescription(raw?: string | null): string {
	const fallback = SITE.defaultDescription;
	if (!raw) return fallback;

	let text = raw
		.replace(/<[^>]*>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/\s+/g, ' ')
		.trim();

	if (text.length < 50) return fallback;

	const MAX = 155;
	if (text.length <= MAX) return text;

	const head = text.slice(0, MAX);
	const cut = Math.max(head.lastIndexOf('. '), head.lastIndexOf('; '), head.lastIndexOf(', '), head.lastIndexOf(' '));
	return (cut > 60 ? head.slice(0, cut) : head).trim().replace(/[,;:]$/, '') + '.';
}

/* ------------------------------------------------------------------ */
/*  Dates                                                               */
/* ------------------------------------------------------------------ */

/** Mois en français, avec et sans accents (les données du blog varient). */
const FRENCH_MONTHS: Record<string, number> = {
	janvier: 1,
	fevrier: 2,
	février: 2,
	mars: 3,
	avril: 4,
	mai: 5,
	juin: 6,
	juillet: 7,
	aout: 8,
	août: 8,
	septembre: 9,
	octobre: 10,
	novembre: 11,
	decembre: 12,
	décembre: 12,
};

/**
 * Convertit une date rédigée en français (« 15 Janvier 2025 ») en date ISO
 * (`2025-01-15`). Nécessaire pour `datePublished` (schema.org Article) et
 * `lastmod` (sitemap) : les deux exigent un format machine.
 */
export function frenchDateToIso(input?: string | null): string | undefined {
	if (!input) return undefined;
	// Déjà ISO ?
	if (/^\d{4}-\d{2}-\d{2}/.test(input)) return input.slice(0, 10);

	const match = input.trim().match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})$/);
	if (!match) return undefined;

	const [, day, monthName, year] = match;
	const month = FRENCH_MONTHS[monthName.toLowerCase()];
	if (!month) return undefined;

	return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/** Date ISO du jour (fuseau du Sénégal), pour les `lastmod` du sitemap. */
export function todayIso(): string {
	return new Date().toISOString().slice(0, 10);
}

/* ------------------------------------------------------------------ */
/*  Données structurées (JSON-LD)                                       */
/* ------------------------------------------------------------------ */

export type JsonLd = Record<string, unknown>;

const postalAddress = (): JsonLd => ({
	'@type': 'PostalAddress',
	streetAddress: SITE.address.street,
	addressLocality: SITE.address.city,
	addressRegion: SITE.address.region,
	addressCountry: SITE.address.country,
});

/**
 * `Organization` + `LocalBusiness` fusionnés : c'est le schéma qui porte
 * le NAP, la zone desservie et les profils sociaux. Émis sur toutes les
 * pages — Google construit le graphe de connaissance à partir de là.
 */
export function localBusinessSchema(): JsonLd {
	const sameAs = Object.values(SITE.social).filter(Boolean);

	const schema: JsonLd = {
		'@type': ['Organization', 'LocalBusiness'],
		'@id': `${SITE.origin}/#organization`,
		name: SITE.name,
		alternateName: 'Confection Univers Thiès',
		description: SITE.longDescription,
		url: SITE.origin + '/',
		logo: {
			'@type': 'ImageObject',
			url: absoluteUrl(SITE.images.logo),
			width: 2000,
			height: 419,
		},
		image: [absoluteUrl(SITE.images.ogDefault), absoluteUrl(SITE.images.building)],
		address: postalAddress(),
		geo: {
			'@type': 'GeoCoordinates',
			latitude: SITE.geo.latitude,
			longitude: SITE.geo.longitude,
		},
		telephone: SITE.phone,
		email: SITE.email,
		priceRange: SITE.priceRange,
		foundingDate: SITE.foundingDate,
		areaServed: SITE.areaServed.map((area) => ({ '@type': 'Place', name: area })),
		knowsAbout: [
			'confection industrielle',
			'uniformes scolaires',
			'toges de graduation',
			'blouses médicales',
			'tenues de travail',
			'costumes africains',
			'maillots d’équipe',
		],
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: SITE.phone,
				email: SITE.email,
				contactType: 'sales',
				areaServed: 'SN',
				availableLanguage: ['fr', 'wo'],
			},
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Prestations de confection',
			itemListElement: SERVICES.map((service) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: service.title,
					serviceType: service.serviceType,
					url: canonicalUrl(`/services/${service.slug}`),
				},
			})),
		},
	};

	if (SITE.openingHours?.length) {
		schema.openingHoursSpecification = SITE.openingHours.map((slot) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: slot.days,
			opens: slot.opens,
			closes: slot.closes,
		}));
	}

	if (sameAs.length) schema.sameAs = sameAs;

	// Aucune note/avis n'est publié sur le site : on n'émet volontairement
	// PAS de `aggregateRating`. Une note inventée est une violation directe
	// des consignes Google sur les données structurées (action manuelle).
	return schema;
}

/** `WebSite` — déclare le site et son éditeur. */
export function websiteSchema(): JsonLd {
	return {
		'@type': 'WebSite',
		'@id': `${SITE.origin}/#website`,
		url: SITE.origin + '/',
		name: SITE.name,
		description: SITE.defaultDescription,
		inLanguage: SITE.lang,
		publisher: { '@id': `${SITE.origin}/#organization` },
	};
}

/**
 * `BreadcrumbList` — fil d'Ariane machine. Alimente le breadcrumb affiché
 * dans les SERP (la position 0 est toujours la racine).
 */
export function breadcrumbSchema(trail: { name: string; path: string }[]): JsonLd {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: trail.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: canonicalUrl(crumb.path),
		})),
	};
}

/** `FAQPage` — n'est émis que si les questions sont visibles sur la page. */
export function faqSchema(items: { question: string; answer: string }[]): JsonLd {
	return {
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: { '@type': 'Answer', text: item.answer },
		})),
	};
}

/** `Service` — une page `/services/:slug`. */
export function serviceSchema(service: Service): JsonLd {
	return {
		'@type': 'Service',
		'@id': `${canonicalUrl(`/services/${service.slug}`)}#service`,
		name: service.title,
		serviceType: service.serviceType,
		description: buildDescription(service.description),
		url: canonicalUrl(`/services/${service.slug}`),
		image: absoluteUrl(service.image),
		provider: { '@id': `${SITE.origin}/#organization` },
		areaServed: { '@type': 'Country', name: 'Sénégal' },
		availableChannel: {
			'@type': 'ServiceChannel',
			serviceUrl: canonicalUrl('/contact'),
			servicePhone: { '@type': 'ContactPoint', telephone: SITE.phone, contactType: 'sales' },
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: `${service.title} — prestations`,
			itemListElement: [
				{
					'@type': 'Offer',
					priceSpecification: {
						'@type': 'PriceSpecification',
						priceCurrency: 'XOF',
						// Le site ne publie pas de tarif : on déclare l'absence
						// de prix plutôt qu'une valeur inventée.
						description: 'Tarif sur devis, selon volume et personnalisation',
					},
				},
			],
		},
	};
}

/** `CollectionPage` + `ImageObject` — une galerie `/collections/:category`. */
export function collectionSchema(collection: Collection): JsonLd {
	return {
		'@type': 'CollectionPage',
		'@id': `${canonicalUrl(`/collections/${collection.slug}`)}#collection`,
		name: collection.name,
		description: buildDescription(collection.description),
		url: canonicalUrl(`/collections/${collection.slug}`),
		isPartOf: { '@id': `${SITE.origin}/#website` },
		about: { '@id': `${SITE.origin}/#organization` },
		primaryImageOfPage: absoluteUrl(collection.images[0]),
		image: collection.images.slice(0, 8).map((src) => absoluteUrl(src)),
	};
}

/**
 * `BlogPosting` — un article. `datePublished`/`dateModified` et `author`
 * sont les champs qui débloquent les résultats enrichis « Article ».
 */
export function articleSchema(post: BlogPost): JsonLd {
	const published = frenchDateToIso(post.date);
	const url = canonicalUrl(`/blog/${post.slug}`);

	return {
		'@type': 'BlogPosting',
		'@id': `${url}#article`,
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		headline: buildTitle(post.title, { withBrand: false }).slice(0, 110),
		name: post.title,
		description: buildDescription(post.excerpt),
		image: [absoluteUrl(post.image)],
		inLanguage: SITE.lang,
		articleSection: post.category,
		keywords: [post.category, SITE.name, 'confection Sénégal'].filter(Boolean).join(', '),
		...(published ? { datePublished: published, dateModified: published } : {}),
		author: { '@type': 'Person', name: post.author },
		publisher: { '@id': `${SITE.origin}/#organization` },
		isPartOf: { '@id': `${SITE.origin}/#website` },
	};
}

/** `Blog` + `ItemList` — la page d'index `/blog`. */
export function blogIndexSchema(posts: BlogPost[]): JsonLd {
	return {
		'@type': 'Blog',
		'@id': `${canonicalUrl('/blog')}#blog`,
		name: `Blog ${SITE.name}`,
		description: buildDescription(
			'Conseils et actualités sur la confection industrielle au Sénégal : bien choisir ses uniformes scolaires, entretenir ses tenues de travail, organiser une cérémonie de graduation.',
		),
		url: canonicalUrl('/blog'),
		inLanguage: SITE.lang,
		publisher: { '@id': `${SITE.origin}/#organization` },
		blogPost: posts.map((post, index) => ({
			'@type': 'BlogPosting',
			position: index + 1,
			headline: post.title,
			url: canonicalUrl(`/blog/${post.slug}`),
			image: absoluteUrl(post.image),
			author: { '@type': 'Person', name: post.author },
			...(frenchDateToIso(post.date) ? { datePublished: frenchDateToIso(post.date) } : {}),
		})),
	};
}

/** `ItemList` générique — grille de produits, galerie, liste de services. */
export function itemListSchema(name: string, items: { name: string; url?: string; image?: string }[]): JsonLd {
	return {
		'@type': 'ItemList',
		name,
		numberOfItems: items.length,
		itemListOrder: 'https://schema.org/ItemListUnordered',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			...(item.url ? { url: absoluteUrl(item.url) } : {}),
			...(item.image ? { image: absoluteUrl(item.image) } : {}),
		})),
	};
}

/** `AboutPage` — page À propos. */
export function aboutPageSchema(): JsonLd {
	return {
		'@type': 'AboutPage',
		'@id': `${canonicalUrl('/about')}#aboutpage`,
		name: `À propos de ${SITE.name}`,
		url: canonicalUrl('/about'),
		inLanguage: SITE.lang,
		about: { '@id': `${SITE.origin}/#organization` },
		isPartOf: { '@id': `${SITE.origin}/#website` },
	};
}

/** `ContactPage` — page Contact. */
export function contactPageSchema(): JsonLd {
	return {
		'@type': 'ContactPage',
		'@id': `${canonicalUrl('/contact')}#contactpage`,
		name: `Contacter ${SITE.name}`,
		description: buildDescription(
			'Demandez un devis à Confection Univers : uniformes scolaires, toges de graduation, blouses médicales, tenues de travail et vêtements professionnels au Sénégal.',
		),
		url: canonicalUrl('/contact'),
		inLanguage: SITE.lang,
		mainEntity: { '@id': `${SITE.origin}/#organization` },
	};
}

/**
 * Sérialisation sûre pour `<script type="application/ld+json">`.
 * `<`, `>` et `&` sont échappés en séquences Unicode : une description
 * contenant `</script>` ne pourrait alors jamais casser le document.
 */
export function serializeJsonLd(schema: JsonLd | JsonLd[]): string {
	return JSON.stringify(schema)
		.replace(/</g, '\\u003c')
		.replace(/>/g, '\\u003e')
		.replace(/&/g, '\\u0026')
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');
}

/* ------------------------------------------------------------------ */
/*  Données dérivées (sitemap, maillage)                                */
/* ------------------------------------------------------------------ */

/** Articles triés du plus récent au plus ancien. */
export function sortedPosts(): BlogPost[] {
	return [...BLOG_POSTS].sort((a, b) => (frenchDateToIso(b.date) ?? '').localeCompare(frenchDateToIso(a.date) ?? ''));
}

/** Articles partageant la même catégorie, pour le bloc « à lire aussi ». */
export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
	const sameCategory = sortedPosts().filter((p) => p.slug !== post.slug && p.category === post.category);
	const others = sortedPosts().filter((p) => p.slug !== post.slug && p.category !== post.category);
	return [...sameCategory, ...others].slice(0, limit);
}

/** Services voisins, pour le bloc « autres prestations » en bas de page service. */
export function relatedServices(service: Service, limit = 3): Service[] {
	return SERVICES.filter((s) => s.slug !== service.slug).slice(0, limit);
}

export { BLOG_POSTS, COLLECTIONS, SERVICES };
export type { BlogPost, Collection, Service };
