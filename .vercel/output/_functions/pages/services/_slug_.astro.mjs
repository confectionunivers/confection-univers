import { d as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_8J0kuGxV.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Footer_CcSogXq-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://confectionunivers.com");
async function getStaticPaths() {
  const services = [
    {
      slug: "toges-graduation",
      title: "Toges de graduation",
      description: "Toges de graduation et tenues acad\xE9miques personnalis\xE9es pour les universit\xE9s et grandes \xE9coles de Dakar et Thi\xE8s, confectionn\xE9es avec des tissus de qualit\xE9 premium.",
      image: "/images/toge-graduation.jpg"
    },
    {
      slug: "uniformes-scolaires",
      title: "Uniformes scolaires",
      description: "Programmes complets d'uniformes scolaires pour les \xE9tablissements primaires et secondaires du S\xE9n\xE9gal, incluant chemises, pantalons et jupes sur mesure.",
      image: "/images/uniforme-scolaire.jpg"
    },
    {
      slug: "tenues-entreprise",
      title: "Tenues d'entreprise",
      description: "Tenues de travail professionnelles pour les entreprises et industries s\xE9n\xE9galaises, alliant confort, durabilit\xE9 et image de marque.",
      image: "/images/tenue-travail.jpg"
    },
    {
      slug: "kimonos",
      title: "Kimonos",
      description: "Kimonos traditionnels et modernes confectionn\xE9s avec des tissus de qualit\xE9, parfaits pour les c\xE9r\xE9monies culturelles et \xE9v\xE9nements sp\xE9ciaux au S\xE9n\xE9gal.",
      image: "/images/kimono.jpg"
    },
    {
      slug: "blouses-medicales",
      title: "Blouses m\xE9dicales",
      description: "Blouses m\xE9dicales confortables et fonctionnelles pour le personnel des h\xF4pitaux et cliniques de Dakar et Thi\xE8s, avec poches pratiques et tissus faciles d'entretien.",
      image: "/images/blouse-medicale.jpg"
    },
    {
      slug: "toges-avocat",
      title: "Toges d'avocat",
      description: "Toges d'avocat et tenues juridiques conformes aux standards du barreau s\xE9n\xE9galais, confectionn\xE9es avec pr\xE9cision pour les professionnels du droit.",
      image: "/images/toge-avocat.jpg"
    },
    {
      slug: "costumes-africains",
      title: "Costumes africains",
      description: "Costumes africains traditionnels et contemporains inspir\xE9s du patrimoine s\xE9n\xE9galais, utilisant des tissus locaux comme le bazin et le wax.",
      image: "/images/costume-africain.jpg"
    },
    {
      slug: "tenues-sport",
      title: "Tenues de sport",
      description: "Tenues de sport et maillots d'\xE9quipe pour les clubs, \xE9coles et associations sportives du S\xE9n\xE9gal, con\xE7us pour la performance et le confort.",
      image: "/images/tenue-sport.jpg"
    }
  ];
  return services.map((service) => ({
    params: { slug: service.slug },
    props: { service }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { service } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${service.title} - Confection Univers`, "description": service.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<section class="relative z-10 py-24 md:py-32"> <!-- Background Glow --> <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div class="absolute left-[10%] top-[20%] w-[500px] h-[500px] rounded-full" style="background: radial-gradient(ellipse, rgba(250, 204, 107, 0.15) 0%, transparent 70%); filter: blur(100px);"></div> <div class="absolute right-[10%] bottom-[20%] w-[400px] h-[400px] rounded-full" style="background: radial-gradient(ellipse, rgba(250, 204, 107, 0.1) 0%, transparent 70%); filter: blur(80px);"></div> </div> <div class="mx-auto max-w-7xl px-6"> <a href="/services" class="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FACC6B] hover:gap-3 transition-all"> <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Retour aux services
</a> <div class="grid gap-12 lg:grid-cols-2"> <div class="relative aspect-[4/3] overflow-hidden rounded-[2rem]"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="h-full w-full object-cover" width="800" height="600"> </div> <div class="flex flex-col justify-center space-y-8"> <div> <h1 class="font-display text-4xl font-bold uppercase leading-tight text-[#F9FAFB] md:text-5xl lg:text-6xl"> ${service.title} </h1> </div> <div> <p class="text-lg leading-[1.8] text-foreground/80"> ${service.description} </p> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-[#FACC6B]">Caractéristiques</h3> <ul class="space-y-2 text-foreground/80"> <li class="flex items-start gap-3"> <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FACC6B]"></span> <span>Tissus de qualité premium</span> </li> <li class="flex items-start gap-3"> <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FACC6B]"></span> <span>Confection sur mesure</span> </li> <li class="flex items-start gap-3"> <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FACC6B]"></span> <span>Respect des standards professionnels</span> </li> <li class="flex items-start gap-3"> <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FACC6B]"></span> <span>Livraison dans les délais</span> </li> </ul> </div> <a href="/contact" class="inline-flex items-center gap-3 rounded-full bg-[#FACC6B] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#00002a] transition-all hover:scale-105 hover:shadow-lg"> <span>Demander un devis</span> <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/GitHub/confection univers/src/pages/services/[slug]/index.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/services/[slug]/index.astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
