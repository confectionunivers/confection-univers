import { c as createComponent } from './astro-component_EBDb5fyd.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_BnexLs-S.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from './Footer_C0Mc26HX.mjs';

const $$Products = createComponent(($$result, $$props, $$slots) => {
  const productCategories = [
    {
      name: "Toges de graduation",
      description: "Tenues académiques prestigieuses pour les cérémonies de remise des diplômes",
      image: "/images/toge-graduation.jpg",
      count: 12,
      slug: "toges-graduation"
    },
    {
      name: "Uniformes scolaires",
      description: "Uniformes complets pour écoles primaires, collèges et lycées",
      image: "/images/uniforme-scolaire.jpg",
      count: 25,
      slug: "uniformes-scolaires"
    },
    {
      name: "Tenues médicales",
      description: "Blouses, tuniques et tenues pour professionnels de santé",
      image: "/images/blouse-medicale.jpg",
      count: 18,
      slug: "tenues-medicales"
    },
    {
      name: "Tenue de Travail",
      description: "Vêtements professionnels pour entreprises et industries",
      image: "/images/tenue-travail.jpg",
      count: 15,
      slug: "tenue-travail"
    },
    {
      name: "Costumes africains",
      description: "Tenues traditionnelles en bazin, wax et tissus locaux",
      image: "/images/costume-africain.jpg",
      count: 30,
      slug: "costumes-africains"
    },
    {
      name: "Tenues de sport",
      description: "Maillots et équipements pour clubs et associations sportives",
      image: "/images/tenue-sport.jpg",
      count: 20,
      slug: "tenues-sport"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Produits | Confection Univers" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <!-- Hero Section --> <section class="relative flex min-h-[60vh] flex-col justify-center overflow-hidden pb-20 pt-32 md:pt-40"> <div class="pointer-events-none absolute inset-0 -z-20 bg-background"></div> <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_60%_at_100%_0%,rgba(198,161,95,0.14),transparent_55%),radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(0,0,42,0.08),transparent_50%)]"></div> <div class="mx-auto max-w-7xl px-6"> <p class="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-primary md:text-xs">
Nos produits
</p> <h1 class="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-foreground md:leading-[1.02]"> <span class="block text-foreground">Catalogue de</span> <span class="mt-1 block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
Produits
</span> </h1> <p class="mt-8 max-w-2xl text-base font-normal leading-relaxed text-foreground/72 md:text-lg md:leading-relaxed">
Découvrez notre gamme complète de vêtements professionnels confectionnés avec soin et précision pour répondre à tous vos besoins institutionnels.
</p> </div> </section> <!-- Product Categories Section --> <section class="relative z-10 -mt-10 scroll-mt-24 rounded-[3rem] border border-ink/5 bg-paper py-24 text-ink shadow-[0_24px_80px_-28px_rgba(5,10,20,0.14)] md:rounded-[4rem] md:py-32"> <div class="mx-auto max-w-7xl px-6"> <div class="mx-auto mb-16 max-w-3xl text-center md:mb-20"> <p class="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary md:text-xs">Nos catégories</p> <h2 class="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
Gamme de produits professionnels
</h2> <p class="mt-6 text-base leading-relaxed text-ink/65 md:text-lg">
Explorez nos différentes catégories de vêtements confectionnés avec les meilleurs matériaux et selon les standards les plus élevés de l'industrie.
</p> </div> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> ${productCategories.map((category, i) => renderTemplate`<article class="group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-[0_8px_32px_-12px_rgba(5,10,20,0.12)] transition duration-500 ease-out will-change-transform hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_-16px_rgba(5,10,20,0.2)]"> <div class="relative aspect-[16/10] overflow-hidden bg-surface/40"> <img${addAttribute(category.image, "src")}${addAttribute(category.name, "alt")} class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" width="800" height="500"${addAttribute(i < 3 ? "eager" : "lazy", "loading")} decoding="async"> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent opacity-80"></div> <div class="absolute bottom-6 left-6 right-6"> <span class="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-paper backdrop-blur-sm"> ${category.count} produits
</span> </div> </div> <div class="p-8"> <h3 class="font-display text-2xl font-semibold leading-tight tracking-tight text-ink transition duration-300 group-hover:text-primary"> ${category.name} </h3> <p class="mt-4 text-base leading-relaxed text-ink/65"> ${category.description} </p> <a${addAttribute(`/collections/${category.slug}`, "href")} class="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-primary opacity-90 transition duration-300 group-hover:gap-3">
Voir la collection
<svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"></path> </svg> </a> </div> </article>`)} </div> <div class="mt-16 flex flex-col items-center justify-center gap-4 border-t border-primary/10 pt-12 text-center md:mt-20 md:flex-row md:gap-8"> <p class="max-w-md text-sm text-ink/55 md:text-base">Vous ne trouvez pas ce que vous cherchez ? Contactez-nous pour une solution personnalisée.</p> <a href="/contact" class="inline-flex shrink-0 items-center justify-center rounded-full border border-primary/40 bg-ink px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-paper transition duration-400 hover:bg-primary hover:text-background">
Demander un devis
</a> </div> </div> </section> <!-- Features Section --> <section class="relative z-10 -mt-10 rounded-[4rem] bg-background py-32 text-foreground"> <div class="mx-auto max-w-7xl px-6"> <div class="mx-auto mb-16 max-w-3xl text-center md:mb-20"> <p class="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary md:text-xs">Qualité garantie</p> <h2 class="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
Pourquoi choisir nos produits ?
</h2> </div> <div class="grid gap-12 md:grid-cols-3"> <div class="space-y-6 rounded-3xl border border-primary/15 bg-surface/30 p-8"> <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"> <svg class="w-8 h-8 text-[#00002a]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="font-display text-2xl font-semibold text-foreground">Qualité premium</h3> <p class="text-base leading-relaxed text-foreground/65">
Tissus sélectionnés avec soin, coutures renforcées et finitions impeccables pour une durabilité exceptionnelle.
</p> </div> <div class="space-y-6 rounded-3xl border border-primary/15 bg-surface/30 p-8"> <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"> <svg class="w-8 h-8 text-[#00002a]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"></path> </svg> </div> <h3 class="font-display text-2xl font-semibold text-foreground">Personnalisation</h3> <p class="text-base leading-relaxed text-foreground/65">
Couleurs, logos et designs personnalisés selon l'identité visuelle de votre institution ou entreprise.
</p> </div> <div class="space-y-6 rounded-3xl border border-primary/15 bg-surface/30 p-8"> <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"> <svg class="w-8 h-8 text-[#00002a]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path> </svg> </div> <h3 class="font-display text-2xl font-semibold text-foreground">Livraison rapide</h3> <p class="text-base leading-relaxed text-foreground/65">
Production efficace et livraison ponctuelle dans tout le Sénégal pour respecter vos échéances.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "C:/GitHub/confection univers/src/pages/products.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Products,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
