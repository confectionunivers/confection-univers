/**
 * Source de vérité unique pour les données « métier » du site.
 *
 * Auparavant ces tableaux étaient recopiés à l'intérieur de chaque page
 * (`services/[slug]`, `collections/[category]`, `products.astro`…), ce qui
 * faisait dériver le sitemap, les fils d'Ariane et les données structurées
 * dès qu'un service était ajouté. Tout est maintenant centralisé ici :
 * les pages, le sitemap et le JSON-LD lisent la même liste.
 *
 * Règle : ajouter une entrée ici suffit à créer la page, l'URL du sitemap,
 * le fil d'Ariane et le schema.org associé.
 */

/* ------------------------------------------------------------------ */
/*  Services (pages /services/:slug)                                   */
/* ------------------------------------------------------------------ */

export interface Service {
	slug: string;
	/** Libellé affiché à l'écran (H1, cartes, fils d'Ariane). */
	title: string;
	/**
	 * `<title>` SERP. Doit rester sous ~60 caractères pour ne pas être
	 * tronqué par Google. Différent de `title` pour éviter la cannibalisation
	 * de mots-clés avec /collections/:slug et /blog/:slug.
	 */
	seoTitle: string;
	/** Meta description SERP — 120 à 155 caractères, unique par page. */
	description: string;
	image: string;
	/** Type schema.org le plus précis pour cette activité. */
	serviceType: string;
	/** Mots-clés secondaires, utilisés pour le maillage et les schémas. */
	keywords?: string[];
}

export const SERVICES: Service[] = [
	{
		slug: 'toges-graduation',
		title: 'Toges de graduation',
		seoTitle: 'Toges de graduation sur mesure, Sénégal',
		description:
			'Confection de toges de graduation et tenues académiques personnalisées pour universités et grandes écoles de Dakar et Thiès. Devis sous 48 h.',
		image: '/images/toge-graduation.jpg',
		serviceType: 'Confection de toges de graduation et tenues académiques',
		keywords: ['toge de graduation', 'toge universitaire', 'tenue de cérémonie', 'remise de diplômes'],
	},
	{
		slug: 'uniformes-scolaires',
		title: 'Uniformes scolaires',
		seoTitle: 'Uniformes scolaires sur mesure, Sénégal',
		description:
			'Programmes complets d’uniformes scolaires pour écoles primaires, collèges et lycées du Sénégal : chemises, pantalons, jupes et ensembles sur mesure.',
		image: '/images/uniforme-scolaire.jpg',
		serviceType: 'Confection d’uniformes scolaires',
		keywords: ['uniforme scolaire', 'tenue d’école', 'uniforme primaire', 'uniforme lycée'],
	},
	{
		slug: 'tenue-travail',
		title: 'Tenue de Travail',
		seoTitle: 'Tenues de travail pour entreprises',
		description:
			'Tenues de travail professionnelles pour entreprises et industries sénégalaises : confort, durabilité et image de marque, produites en série.',
		image: '/images/tenue-travail.jpg',
		serviceType: 'Confection de tenues de travail et vêtements professionnels',
		keywords: ['tenue de travail', 'vêtement professionnel', 'uniforme entreprise', 'EPI textile'],
	},
	{
		slug: 'kimonos',
		title: 'Kimonos',
		seoTitle: 'Kimonos et tenues de cérémonie',
		description:
			'Kimonos traditionnels et modernes confectionnés dans des tissus de qualité, pour cérémonies culturelles, mariages et événements au Sénégal.',
		image: '/images/kimono.jpg',
		serviceType: 'Confection de kimonos et tenues de cérémonie',
		keywords: ['kimono', 'tenue de cérémonie', 'kimono sur mesure'],
	},
	{
		slug: 'blouses-medicales',
		title: 'Blouses médicales',
		seoTitle: 'Blouses médicales et tenues de soin',
		description:
			'Blouses médicales confortables pour hôpitaux et cliniques de Dakar et Thiès : poches pratiques, tissus résistants aux lavages à haute température.',
		image: '/images/blouse-medicale.jpg',
		serviceType: 'Confection de blouses et tenues médicales',
		keywords: ['blouse médicale', 'tenue hospitalière', 'blouse de docteur', 'tenue infirmier'],
	},
	{
		slug: 'toges-avocat',
		title: "Toges d'avocat",
		seoTitle: 'Toges d’avocat et tenues juridiques',
		description:
			'Toges d’avocat et tenues juridiques conformes aux standards du barreau sénégalais, confectionnées avec précision pour les professionnels du droit.',
		image: '/images/toge-avocat.jpg',
		serviceType: 'Confection de toges d’avocat et tenues juridiques',
		keywords: ['toge d’avocat', 'robe d’audience', 'toge de magistrat', 'barreau sénégalais'],
	},
	{
		slug: 'costumes-africains',
		title: 'Costumes africains',
		seoTitle: 'Costumes africains en bazin et wax',
		description:
			'Costumes africains traditionnels et contemporains inspirés du patrimoine sénégalais, réalisés en bazin, wax et tissus locaux. Création sur mesure.',
		image: '/images/costume-africain.jpg',
		serviceType: 'Confection de costumes africains sur mesure',
		keywords: ['costume africain', 'bazin', 'wax', 'tenue traditionnelle sénégalaise'],
	},
	{
		slug: 'tenues-sport',
		title: 'Tenues de sport',
		seoTitle: 'Tenues de sport personnalisées',
		description:
			'Tenues de sport et maillots d’équipe pour clubs, écoles et associations du Sénégal : sublimation, marquage et coupes pensées pour la performance.',
		image: '/images/tenue-sport.jpg',
		serviceType: 'Confection de tenues de sport et maillots d’équipe',
		keywords: ['maillot d’équipe', 'tenue de sport', 'maillot football', 'tenue EPS'],
	},
];

export const getService = (slug: string): Service | undefined => SERVICES.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/*  Collections (pages /collections/:category — galeries photos)        */
/* ------------------------------------------------------------------ */

export interface Collection {
	slug: string;
	name: string;
	/** `<title>` SERP, différencié de la page service homonyme. */
	seoTitle: string;
	/** Meta description unique — 120 à 155 caractères. */
	description: string;
	images: string[];
	/** Service associé, pour le maillage interne croisé. */
	serviceSlug?: string;
}

export const COLLECTIONS: Collection[] = [
	{
		slug: 'toges-graduation',
		name: 'Toges de graduation',
		seoTitle: 'Toges de graduation : modèles et photos',
		description:
			'Galerie de toges de graduation confectionnées par Confection Univers : modèles académiques, coupes, couleurs et finitions pour cérémonies de diplômes.',
		serviceSlug: 'toges-graduation',
		images: [
			'/images/toge-graduation-1.jpg',
			'/images/toge-graduation-2.jpg',
			'/images/toge-graduation-3.jpg',
			'/images/toge-graduation-4.jpg',
			'/images/toge-graduation-5.jpg',
			'/images/toge-graduation-6.jpg',
			'/images/toge-graduation-7.jpg',
			'/images/toge-graduation-8.jpg',
		],
	},
	{
		slug: 'uniformes-scolaires',
		name: 'Uniformes scolaires',
		seoTitle: 'Uniformes scolaires : modèles et photos',
		description:
			'Galerie d’uniformes scolaires réalisés au Sénégal : chemises, pantalons, costumes, gilets et blousons aux couleurs de votre établissement.',
		serviceSlug: 'uniformes-scolaires',
		images: [
			'/images/uniforme-scolaire-1.jpg',
			'/images/uniforme-scolaire-2.jpg',
			'/images/uniforme-scolaire-3.jpg',
			'/images/uniforme-scolaire-4.jpg',
			'/images/uniforme-scolaire-5.jpg',
			'/images/uniforme-scolaire-6.jpg',
			'/images/uniforme-scolaire-7.jpg',
			'/images/uniforme-scolaire-8.jpg',
		],
	},
	{
		slug: 'tenues-medicales',
		name: 'Tenues médicales',
		seoTitle: 'Tenues médicales : modèles et photos',
		description:
			'Galerie de blouses et tenues médicales confectionnées pour hôpitaux et cliniques : coupes, poches et tissus résistants aux lavages répétés.',
		serviceSlug: 'blouses-medicales',
		images: [
			'/images/blouse-medicale-1.jpg',
			'/images/blouse-medicale-2.jpg',
			'/images/blouse-medicale-3.jpg',
			'/images/blouse-medicale-4.jpg',
			'/images/blouse-medicale-5.jpg',
			'/images/blouse-medicale.jpg',
			'/images/blouse-medicale-7.jpg',
			'/images/blouse-medicale-8.jpg',
		],
	},
	{
		slug: 'tenue-travail',
		name: 'Tenue de Travail',
		seoTitle: 'Tenues de travail : modèles et photos',
		description:
			'Galerie de tenues de travail professionnelles : sécurité, mécanique, menuiserie, hôtellerie. Vêtements fonctionnels personnalisables à votre marque.',
		serviceSlug: 'tenue-travail',
		images: [
			'/images/tenue-travail-1.jpg',
			'/images/tenue-travail-2.jpg',
			'/images/tenue-travail-3.jpg',
			'/images/tenue-travail-4.jpg',
			'/images/tenue-travail-5.jpg',
			'/images/tenue-travail-6.jpg',
			'/images/tenue-travail-7.jpg',
			'/images/tenue-travail-8.jpg',
		],
	},
	{
		slug: 'costumes-africains',
		name: 'Costumes africains',
		seoTitle: 'Costumes africains : modèles et photos',
		description:
			'Galerie de costumes africains sur mesure en bazin et wax : créations modernes et élégantes pour cérémonies, mariages et événements au Sénégal.',
		serviceSlug: 'costumes-africains',
		images: ['/images/costume-africain.jpg'],
	},
	{
		slug: 'tenues-sport',
		name: 'Tenues de sport',
		seoTitle: 'Tenues de sport : modèles et photos',
		description:
			'Galerie de tenues de sport et maillots d’équipe personnalisés : football, basketball, arts martiaux et ensembles EPS pour clubs et écoles.',
		serviceSlug: 'tenues-sport',
		images: [
			'/images/tenue-sport-1.jpg',
			'/images/tenue-sport-2.jpg',
			'/images/tenue-sport-3.jpg',
			'/images/tenue-sport-4.jpg',
			'/images/tenue-sport-5.jpg',
			'/images/tenue-sport-6.jpg',
			'/images/tenue-sport-7.jpg',
			'/images/tenue-sport-8.jpg',
		],
	},
];

export const getCollection = (slug: string): Collection | undefined => COLLECTIONS.find((c) => c.slug === slug);

/* ------------------------------------------------------------------ */
/*  Catégories produits (page /products)                                */
/* ------------------------------------------------------------------ */

export interface ProductCategory {
	slug: string;
	name: string;
	description: string;
	image: string;
	count: number;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
	{
		name: 'Toges de graduation',
		description: 'Tenues académiques prestigieuses pour les cérémonies de remise des diplômes',
		image: '/images/toge-graduation.jpg',
		count: 12,
		slug: 'toges-graduation',
	},
	{
		name: 'Uniformes scolaires',
		description: 'Uniformes complets pour écoles primaires, collèges et lycées',
		image: '/images/uniforme-scolaire.jpg',
		count: 25,
		slug: 'uniformes-scolaires',
	},
	{
		name: 'Tenues médicales',
		description: 'Blouses, tuniques et tenues pour professionnels de santé',
		image: '/images/blouse-medicale.jpg',
		count: 18,
		slug: 'tenues-medicales',
	},
	{
		name: 'Tenue de Travail',
		description: 'Vêtements professionnels pour entreprises et industries',
		image: '/images/tenue-travail.jpg',
		count: 15,
		slug: 'tenue-travail',
	},
	{
		name: 'Costumes africains',
		description: 'Tenues traditionnelles en bazin, wax et tissus locaux',
		image: '/images/costume-africain.jpg',
		count: 30,
		slug: 'costumes-africains',
	},
	{
		name: 'Tenues de sport',
		description: 'Maillots et équipements pour clubs et associations sportives',
		image: '/images/tenue-sport.jpg',
		count: 20,
		slug: 'tenues-sport',
	},
];

/* ------------------------------------------------------------------ */
/*  Registre des routes statiques — alimente le sitemap XML             */
/* ------------------------------------------------------------------ */

export type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface SiteRoute {
	/** Chemin relatif, sans slash final (ex. `/about`). `/` pour l'accueil. */
	path: string;
	/** Date de dernière modification au format ISO (AAAA-MM-JJ). */
	lastmod?: string;
	changefreq?: ChangeFreq;
	/** 0.0 → 1.0. Pondération relative, pas un signal Google direct. */
	priority?: number;
	/** Images déclarées dans le sitemap (extension `image:image`). */
	images?: string[];
	/** Exclure du sitemap (page en noindex, redirection…). */
	exclude?: boolean;
}

/**
 * Routes « en dur ». Les routes dynamiques (services, collections, articles)
 * sont ajoutées par `getAllRoutes()` ci-dessous.
 */
const STATIC_ROUTES: SiteRoute[] = [
	{ path: '/', lastmod: '2026-10-17', changefreq: 'weekly', priority: 1.0, images: ['/images/hero-bg.jpg'] },
	{ path: '/services', lastmod: '2026-10-17', changefreq: 'monthly', priority: 0.9 },
	{ path: '/catalogue', lastmod: '2026-10-17', changefreq: 'monthly', priority: 0.9, images: ['/images/gallery1.jpg'] },
	{ path: '/products', lastmod: '2026-10-17', changefreq: 'monthly', priority: 0.7 },
	{ path: '/about', lastmod: '2026-10-17', changefreq: 'yearly', priority: 0.7, images: ['/images/about-facility.jpg'] },
	{ path: '/contact', lastmod: '2026-10-17', changefreq: 'yearly', priority: 0.8 },
	{ path: '/blog', lastmod: '2026-10-17', changefreq: 'weekly', priority: 0.8 },
	// Redirection Astro → jamais dans le sitemap.
	{ path: '/projects', exclude: true },
];

/** Toutes les routes indexables du site, dans l'ordre de priorité. */
export function getAllRoutes(): SiteRoute[] {
	return STATIC_ROUTES;
}
