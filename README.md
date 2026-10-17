# Confection Univers — site vitrine (Astro)

Site de Confection Univers, atelier de confection industrielle à Thiès (Sénégal) :
uniformes scolaires, toges de graduation, blouses médicales, tenues de travail,
tenues de sport et costumes africains sur mesure.

Stack : [Astro](https://astro.build) (sortie statique) + Tailwind CSS v4 + React
(interactions) + Lenis/GSAP (animations), déployé sur Vercel.

---

## Commandes

| Commande                 | Action                                                                     |
| :----------------------- | :------------------------------------------------------------------------- |
| `npm install`            | Installe les dépendances                                                    |
| `npm run dev`            | Serveur de dev (`localhost:4321`). Régénère d'abord les images optimisées    |
| `npm run build`          | Build statique dans `dist/` (régénère favicones, OG image et images WebP)    |
| `npm run preview`        | Sert le build localement                                                    |
| `npm run seo:audit`      | **Audit SEO du build** : titles, descriptions, canonicals, sitemap, images…  |
| `npm run images:optimize`| Régénère les variantes WebP responsives (`public/images/gen/`)               |
| `npm run brand:generate` | Régénère favicones, `apple-touch-icon`, carte OG 1200×630 et manifest        |

Le pipeline d'assets tourne automatiquement via les hooks npm `predev` /
`prebuild` : il n'y a rien à lancer à la main après un changement d'image.

---

## Référencement : architecture

Tout le SEO est centralisé, vérifiable et régénéré au build. Point d'entrée
unique : **`src/lib/seo.ts`** (identité NAP, helpers, fabriques schema.org).

### 1. Métadonnées de chaque page — `src/layouts/Layout.astro`

Chaque page passe `title`, `description`, `path`, `image`, `breadcrumbs` et
`schema` au layout, qui dérive :

- `<title>` normalisé ≤ 60 caractères (`buildTitle`) ;
- meta description ≤ 155 caractères, **unique par page** (`buildDescription`) ;
- `<link rel="canonical">` absolu, sans slash final, sans query string ;
- `meta robots` (`index, follow, max-image-preview:large…`, ou `noindex`) ;
- Open Graph complet **propre à chaque page** (`og:url`, `og:image` + dimensions
  réelles lues dans le manifeste d'images, `og:locale=fr_SN`…) ;
- cartes Twitter/X `summary_large_image` ;
- favicones multi-formats + `site.webmanifest` + `theme-color` ;
- preload des deux polices critiques.

### 2. Données structurées (JSON-LD) — `src/components/JsonLd.astro`

Émis sur toutes les pages : `Organization` + `LocalBusiness` (NAP, geo,
`areaServed`, `hasOfferCatalog`), `WebSite`, `BreadcrumbList`.
Selon la page : `FAQPage` (accueil), `AboutPage`, `ContactPage`, `Service`,
`CollectionPage`, `Blog` / `BlogPosting`, `ItemList`.

> **Règle** : aucune donnée inventée. Pas de `aggregateRating` ni d'avis
> fabriqués, pas d'horaires d'ouverture tant qu'ils ne sont pas confirmés
> (`SITE.openingHours` dans `src/lib/seo.ts`), coordonnées GPS à affiner
> (`SITE.geo`). Un schéma mensonger expose à une action manuelle Google.

### 3. Sitemap & robots — `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`

Générés au build depuis `src/lib/site-data.ts` (source de vérité des services,
collections et catégories). Le sitemap porte `<lastmod>`, `<priority>` et
l'extension `image:image` (92 visuels déclarés). Les redirections et pages
`noindex` en sont exclues ; `robots.txt` pointe vers le sitemap.

### 4. Images & Core Web Vitals

- `scripts/optimize-images.mjs` : variantes WebP en 480/768/1024/1600 px dans
  `public/images/gen/` (non versionné), manifeste dans `.image-cache/`, cache
  par empreinte de contenu. ~30 Mo de sources → ~6 Mo de variantes servies.
- `src/components/Picture.astro` : `<picture>` + `srcset`/`sizes` +
  `width`/`height` (zéro CLS) + `loading`/`fetchpriority` adaptés. Repli
  automatique sur l'image d'origine si le manifeste est absent.
- Polices **auto-hébergées** en woff2 (`public/fonts/`, déclarées dans
  `src/styles/global.css`) : plus aucune feuille de style bloquante vers
  `fonts.googleapis.com`, cache `immutable` sur notre domaine, RGPD-safe.
- Favicon passé de 4162×2565 px / 160 Ko à un SVG vectoriel + PNG 32/64/180 px.
- En-têtes Vercel (`vercel.json`) : `Cache-Control: immutable` sur
  `/images`, `/fonts`, `/_astro` + en-têtes de sécurité.

### 5. Maillage interne

- Pied de page : liens vers les 8 services et les 6 collections depuis
  **toutes** les pages ;
- fil d'Ariane visible (`Breadcrumbs.astro`) + schéma assorti ;
- pages service : bloc « Autres prestations » ;
- pages collection : collections sœurs + prestation associée ;
- articles : bloc « À lire aussi » par proximité de catégorie.

### 6. Ajouter / modifier du contenu

| Ajout                     | Où                                                                |
| :------------------------ | :---------------------------------------------------------------- |
| un service                | `SERVICES` dans `src/lib/site-data.ts` → page, sitemap, schémas OK |
| une collection            | `COLLECTIONS` dans `src/lib/site-data.ts`                          |
| un article                | `BLOG_POSTS` dans `src/lib/blog-data.ts` (penser au `seoTitle`)    |
| une question FAQ          | `FAQ_ITEMS` dans `src/lib/faq-data.ts` (accordéon + schéma)        |
| une image                 | `public/images/…` puis `npm run images:optimize`                   |

Vérifier ensuite : `npm run build && npm run seo:audit` (sortie non nulle si
une règle casse — utilisable tel quel en CI).

---

## Mesure & Search Console

Le site embarque un dispositif de mesure **désactivé par défaut** : tant que
les valeurs sont vides, aucune balise ni requête tierce n'est émise.
Tout se configure dans `src/lib/seo.ts`, bloc `SITE.measurement` :

```ts
measurement: {
    googleSiteVerification: '',            // code de vérification Search Console
    analyticsProvider: '' as '' | 'ga4' | 'plausible',
    analyticsId: '',                       // G-XXXXXXX (GA4) ou domaine (Plausible)
},
```

### 1. Google Search Console (indispensable pour suivre vos positions)
1. <https://search.google.com/search-console> → « Ajouter une propriété » →
   « Préfixe de l'URL » → `https://confectionunivers.com` ;
2. choisir la méthode « Balise » : Google donne un code du type
   `Xx1Yy2Zz3...` ;
3. le coller dans `googleSiteVerification`, commiter/déployer ;
4. revenir dans Search Console → « Vérifier ». Le sitemap
   (`/sitemap.xml`) est ensuite déclaré dans « Sitemaps ».

### 2. Analytics, au choix
- **GA4** : <https://analytics.google.com> → créer la propriété → flux Web →
   récupérer l'identifiant de mesure `G-XXXXXXX` ; renseigner
   `analyticsProvider: 'ga4'` + `analyticsId`.
- **Plausible** (recommandé : sans cookies, ~1 Ko, conforme RGPD/loi 2008-12) :
   <https://plausible.io> → ajouter le site `confectionunivers.com` ;
   renseigner `analyticsProvider: 'plausible'` + `analyticsId`.

Le head du `Layout` émet alors automatiquement le script correspondant
(une seule balise, `defer`/`async`, aucune autre modification nécessaire).

## À confirmer par l'entreprise

Ces valeurs sont déclarées dans `src/lib/seo.ts` et conditionnent le SEO local :

1. ~~Coordonnées GPS exactes~~ — **confirmé** : 14.7763152, -16.9404293
   (fiche Google Maps de l'atelier, lot 129 bis, Keur Massamba Gueye, Thiès 30000) ;
2. ~~Horaires d'ouverture~~ — **confirmé** : atelier disponible 24h/24 du lundi
   au lundi (`SITE.openingHours` actif, émis dans le JSON-LD) ;
3. **URL des profils sociaux** (`SITE.social`) : Facebook, YouTube, TikTok et
   LinkedIn confirmés ; ~~Instagram~~ — **pas de compte**, lien retiré du site
   et de `sameAs` le 2026-10-17 ;
4. ~~année de création~~ — **confirmé** : immatriculation RCCM du 08/07/2026
   (`SITE.foundingDate = '2026-07-08'`, avis d'immatriculation ANSD du 15/07/2026) ;
5. ~~numéro RCCM / NINEA~~ — **confirmé** : RCCM `SN THS 2026 B 4293`,
   NINEA `013229382` (`SITE.legal`, affichés dans `/mentions-legales`).

---

## Structure du projet

```text
/
├── api/                  # endpoints Vercel (devis, commentaires, newsletter)
├── public/
│   ├── fonts/            # polices woff2 auto-hébergées
│   ├── images/           # sources ; gen/ = variantes WebP (non versionné)
│   └── site.webmanifest
├── scripts/
│   ├── optimize-hero-images.mjs   # WebP des silhouettes du hero
│   ├── optimize-images.mjs        # WebP responsive de tout public/images
│   ├── generate-brand-assets.mjs  # favicones + carte OG 1200×630
│   └── seo-audit.mjs              # contrôle qualité SEO du build
└── src/
    ├── components/       # UI + Picture, Breadcrumbs, JsonLd…
    ├── layouts/Layout.astro      # <head> SEO complet
    ├── lib/
    │   ├── seo.ts        # identité, helpers, fabriques schema.org
    │   ├── site-data.ts  # services / collections / registre de routes
    │   ├── blog-data.ts  # articles
    │   ├── faq-data.ts   # questions fréquentes
    │   └── image-meta.ts # lecture du manifeste d'images
    └── pages/            # 36 routes + sitemap.xml + robots.txt + 404
```
