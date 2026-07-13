import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_8J0kuGxV.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_CcSogXq-.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Toges de graduation",
      description: "Toges de graduation et tenues acad\xE9miques personnalis\xE9es pour les universit\xE9s et grandes \xE9coles de Dakar et Thi\xE8s, confectionn\xE9es avec des tissus de qualit\xE9 premium.",
      image: "/images/toge-graduation.jpg",
      slug: "toges-graduation"
    },
    {
      title: "Uniformes scolaires",
      description: "Programmes complets d'uniformes scolaires pour les \xE9tablissements primaires et secondaires du S\xE9n\xE9gal, incluant chemises, pantalons et jupes sur mesure.",
      image: "/images/uniforme-scolaire.jpg",
      slug: "uniformes-scolaires"
    },
    {
      title: "Tenue de Travail",
      description: "Tenues de travail professionnelles pour les entreprises et industries s\xE9n\xE9galaises, alliant confort, durabilit\xE9 et image de marque.",
      image: "/images/tenue-travail.jpg",
      slug: "tenues-entreprise"
    },
    {
      title: "Kimonos",
      description: "Kimonos traditionnels et modernes confectionn\xE9s avec des tissus de qualit\xE9, parfaits pour les c\xE9r\xE9monies culturelles et \xE9v\xE9nements sp\xE9ciaux au S\xE9n\xE9gal.",
      image: "/images/kimono.jpg",
      slug: "kimonos"
    },
    {
      title: "Blouses m\xE9dicales",
      description: "Blouses m\xE9dicales confortables et fonctionnelles pour le personnel des h\xF4pitaux et cliniques de Dakar et Thi\xE8s, avec poches pratiques et tissus faciles d'entretien.",
      image: "/images/blouse-medicale.jpg",
      slug: "blouses-medicales"
    },
    {
      title: "Toges d'avocat",
      description: "Toges d'avocat et tenues juridiques conformes aux standards du barreau s\xE9n\xE9galais, confectionn\xE9es avec pr\xE9cision pour les professionnels du droit.",
      image: "/images/toge-avocat.jpg",
      slug: "toges-avocat"
    },
    {
      title: "Costumes africains",
      description: "Costumes africains traditionnels et contemporains inspir\xE9s du patrimoine s\xE9n\xE9galais, utilisant des tissus locaux comme le bazin et le wax.",
      image: "/images/costume-africain.jpg",
      slug: "costumes-africains"
    },
    {
      title: "Tenues de sport",
      description: "Tenues de sport et maillots d'\xE9quipe pour les clubs, \xE9coles et associations sportives du S\xE9n\xE9gal, con\xE7us pour la performance et le confort.",
      image: "/images/tenue-sport.jpg",
      slug: "tenues-sport"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services | Confection Univers", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-ucd2ps2b": true })} <!-- Hero Section --> <section class="relative flex min-h-[60vh] flex-col justify-center overflow-hidden pb-20 pt-32 md:pt-40" data-astro-cid-ucd2ps2b> <div class="pointer-events-none absolute inset-0 -z-20 bg-background" data-astro-cid-ucd2ps2b></div> <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_60%_at_100%_0%,rgba(198,161,95,0.14),transparent_55%),radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(0,0,42,0.08),transparent_50%)]" data-astro-cid-ucd2ps2b></div> <div class="mx-auto max-w-7xl px-6" data-astro-cid-ucd2ps2b> <p class="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-primary md:text-xs" data-astro-cid-ucd2ps2b>
Nos services
</p> <h1 class="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-foreground md:leading-[1.02]" data-astro-cid-ucd2ps2b> <span class="block text-foreground" data-astro-cid-ucd2ps2b>Services de</span> <span class="mt-1 block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent" data-astro-cid-ucd2ps2b>
Confection
</span> </h1> <p class="mt-8 max-w-2xl text-base font-normal leading-relaxed text-foreground/72 md:text-lg md:leading-relaxed" data-astro-cid-ucd2ps2b>
Des cérémonies de remise des diplômes aux établissements de santé, nous fabriquons des vêtements qui allient précision, confort et qualité professionnelle.
</p> </div> </section> <!-- Services Grid Section --> <section class="relative z-10 -mt-10 scroll-mt-24 rounded-[3rem] border border-ink/5 bg-paper py-24 text-ink shadow-[0_24px_80px_-28px_rgba(5,10,20,0.14)] md:rounded-[4rem] md:py-32" data-astro-cid-ucd2ps2b> <div class="mx-auto max-w-7xl px-6" data-astro-cid-ucd2ps2b> <div class="mx-auto mb-16 max-w-3xl text-center md:mb-20" data-astro-cid-ucd2ps2b> <p class="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary md:text-xs" data-astro-cid-ucd2ps2b>Notre expertise</p> <h2 class="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl" data-astro-cid-ucd2ps2b>
Services de confection de vêtements professionnels
</h2> <p class="mt-6 text-base leading-relaxed text-ink/65 md:text-lg" data-astro-cid-ucd2ps2b>
Chaque service est conçu pour répondre aux besoins spécifiques des institutions sénégalaises, avec un souci constant de qualité et de satisfaction client.
</p> </div> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-astro-cid-ucd2ps2b> ${services.map((s, i) => renderTemplate`<article class="service-card group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-[0_4px_24px_-8px_rgba(5,10,20,0.08)] transition duration-500 ease-out will-change-transform hover:-translate-y-2 hover:border-primary/35 hover:shadow-[0_28px_56px_-16px_rgba(5,10,20,0.18)]" data-astro-cid-ucd2ps2b> <div class="relative aspect-[4/3] overflow-hidden bg-surface/40" data-astro-cid-ucd2ps2b> <img${addAttribute(s.image, "src")}${addAttribute(s.title, "alt")} class="service-card-img h-full w-full object-cover transition duration-700 ease-out" width="640" height="480"${addAttribute(i < 4 ? "eager" : "lazy", "loading")} decoding="async" data-astro-cid-ucd2ps2b> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true" data-astro-cid-ucd2ps2b></div> <span class="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background/85 font-display text-xs font-semibold text-primary backdrop-blur-sm transition duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-background" aria-hidden="true" data-astro-cid-ucd2ps2b> ${String(i + 1).padStart(2, "0")} </span> </div> <div class="flex flex-1 flex-col p-6 md:p-7" data-astro-cid-ucd2ps2b> <h3 class="font-display text-xl font-semibold leading-snug tracking-tight text-ink transition duration-300 group-hover:text-primary md:text-[1.35rem]" data-astro-cid-ucd2ps2b> ${s.title} </h3> <p class="mt-3 flex-1 text-sm leading-relaxed text-ink/65 md:text-[0.9375rem]" data-astro-cid-ucd2ps2b>${s.description}</p> <a${addAttribute(`/services/${s.slug}`, "href")} class="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary opacity-90 transition duration-300 group-hover:gap-3" data-astro-cid-ucd2ps2b>
En savoir plus
<svg class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6" data-astro-cid-ucd2ps2b></path> </svg> </a> </div> </article>`)} </div> <div class="mt-16 flex flex-col items-center justify-center gap-4 border-t border-primary/10 pt-12 text-center md:mt-20 md:flex-row md:gap-8" data-astro-cid-ucd2ps2b> <p class="max-w-md text-sm text-ink/55 md:text-base" data-astro-cid-ucd2ps2b>Un projet spécifique ? Nous personnalisons la coupe, les tissus et les finitions pour votre institution.</p> <a href="/contact" class="inline-flex shrink-0 items-center justify-center rounded-full border border-primary/40 bg-ink px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-paper transition duration-400 hover:bg-primary hover:text-background" data-astro-cid-ucd2ps2b>
Demander un devis
</a> </div> </div> </section> <!-- Process Section --> <section class="relative z-10 -mt-10 rounded-[4rem] bg-background py-32 text-foreground" data-astro-cid-ucd2ps2b> <div class="mx-auto max-w-7xl px-6" data-astro-cid-ucd2ps2b> <div class="mx-auto mb-16 max-w-3xl text-center md:mb-20" data-astro-cid-ucd2ps2b> <p class="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary md:text-xs" data-astro-cid-ucd2ps2b>Notre processus</p> <h2 class="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl" data-astro-cid-ucd2ps2b>
De la conception à la livraison
</h2> </div> <div class="grid gap-12 md:grid-cols-4" data-astro-cid-ucd2ps2b> <div class="space-y-6 text-center" data-astro-cid-ucd2ps2b> <div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-4xl" data-astro-cid-ucd2ps2b>
1
<div class="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-primary/30 md:block" data-astro-cid-ucd2ps2b></div> </div> <h3 class="font-display text-xl font-semibold text-foreground" data-astro-cid-ucd2ps2b>Consultation</h3> <p class="text-sm leading-relaxed text-foreground/65" data-astro-cid-ucd2ps2b>
Nous discutons de vos besoins, préférences et budget pour créer une solution sur mesure.
</p> </div> <div class="space-y-6 text-center" data-astro-cid-ucd2ps2b> <div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-4xl" data-astro-cid-ucd2ps2b>
2
<div class="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-primary/30 md:block" data-astro-cid-ucd2ps2b></div> </div> <h3 class="font-display text-xl font-semibold text-foreground" data-astro-cid-ucd2ps2b>Conception</h3> <p class="text-sm leading-relaxed text-foreground/65" data-astro-cid-ucd2ps2b>
Nos créateurs développent des prototypes et échantillons selon vos spécifications.
</p> </div> <div class="space-y-6 text-center" data-astro-cid-ucd2ps2b> <div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-4xl" data-astro-cid-ucd2ps2b>
3
<div class="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-primary/30 md:block" data-astro-cid-ucd2ps2b></div> </div> <h3 class="font-display text-xl font-semibold text-foreground" data-astro-cid-ucd2ps2b>Production</h3> <p class="text-sm leading-relaxed text-foreground/65" data-astro-cid-ucd2ps2b>
Fabrication en série dans notre atelier avec contrôle qualité à chaque étape.
</p> </div> <div class="space-y-6 text-center" data-astro-cid-ucd2ps2b> <div class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-4xl" data-astro-cid-ucd2ps2b>
4
</div> <h3 class="font-display text-xl font-semibold text-foreground" data-astro-cid-ucd2ps2b>Livraison</h3> <p class="text-sm leading-relaxed text-foreground/65" data-astro-cid-ucd2ps2b>
Livraison ponctuelle dans tout le Sénégal avec suivi et support client.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ucd2ps2b": true })} </main> ` })} `;
}, "C:/GitHub/confection univers/src/pages/services.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
