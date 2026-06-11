import { c as createComponent } from './astro-component_EBDb5fyd.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_BnexLs-S.mjs';
import { r as renderScript } from './script_DBuKsR9P.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from './Footer_C0Mc26HX.mjs';

const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const collectionsData = {
    "toges-graduation": {
      name: "Toges de graduation",
      images: [
        "/images/toge-graduation-1.jpg",
        "/images/toge-graduation-2.jpg",
        "/images/toge-graduation-3.jpg",
        "/images/toge-graduation-4.jpg",
        "/images/toge-graduation-5.jpg",
        "/images/toge-graduation-6.jpg",
        "/images/toge-graduation-7.jpg",
        "/images/toge-graduation-8.jpg"
      ]
    },
    "uniformes-scolaires": {
      name: "Uniformes scolaires",
      images: [
        "/images/uniforme-scolaire-1.jpg",
        "/images/uniforme-scolaire-2.jpg",
        "/images/uniforme-scolaire-3.jpg",
        "/images/uniforme-scolaire-4.jpg",
        "/images/uniforme-scolaire-5.jpg",
        "/images/uniforme-scolaire-6.jpg",
        "/images/uniforme-scolaire-7.jpg",
        "/images/uniforme-scolaire-8.jpg"
      ]
    },
    "tenues-medicales": {
      name: "Tenues médicales",
      images: [
        "/images/blouse-medicale-1.jpg",
        "/images/blouse-medicale-2.jpg",
        "/images/blouse-medicale-3.jpg",
        "/images/blouse-medicale-4.jpg",
        "/images/blouse-medicale-5.jpg",
        "/images/blouse-medicale-6.jpg",
        "/images/blouse-medicale-7.jpg",
        "/images/blouse-medicale-8.jpg"
      ]
    },
    "tenue-travail": {
      name: "Tenue de Travail",
      images: [
        "/images/tenue-travail-1.jpg",
        "/images/tenue-travail-2.jpg",
        "/images/tenue-travail-3.jpg",
        "/images/tenue-travail-4.jpg",
        "/images/tenue-travail-5.jpg",
        "/images/tenue-travail-6.jpg",
        "/images/tenue-travail-7.jpg",
        "/images/tenue-travail-8.jpg"
      ]
    },
    "costumes-africains": {
      name: "Costumes africains",
      images: [
        "/images/costume-africain-1.jpg",
        "/images/costume-africain-2.jpg",
        "/images/costume-africain-3.jpg",
        "/images/costume-africain-4.jpg",
        "/images/costume-africain-5.jpg",
        "/images/costume-africain-6.jpg",
        "/images/costume-africain-7.jpg",
        "/images/costume-africain-8.jpg"
      ]
    },
    "tenues-sport": {
      name: "Tenues de sport",
      images: [
        "/images/tenue-sport-1.jpg",
        "/images/tenue-sport-2.jpg",
        "/images/tenue-sport-3.jpg",
        "/images/tenue-sport-4.jpg",
        "/images/tenue-sport-5.jpg",
        "/images/tenue-sport-6.jpg",
        "/images/tenue-sport-7.jpg",
        "/images/tenue-sport-8.jpg"
      ]
    }
  };
  const collection = collectionsData[category];
  if (!collection) {
    return Astro2.redirect("/products");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${collection.name} | Confection Univers` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <!-- Hero Section --> <section class="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pb-16 pt-32 md:pt-40" style="background: linear-gradient(135deg, #00001C 0%, #00002a 60%, #020617 100%);"> <div class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_60%_at_100%_0%,rgba(212,175,55,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(212,175,55,0.08),transparent_50%)]"></div> <div class="mx-auto max-w-7xl px-6"> <p class="mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#D4AF37] md:text-xs">
Collection
</p> <h1 class="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-white md:leading-[1.02]"> <span class="mt-1 block bg-gradient-to-r from-[#D4AF37] via-[#FFFDF2] to-[#D4AF37] bg-clip-text text-transparent"> ${collection.name} </span> </h1> <a href="/products" class="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 transition-all duration-300 hover:text-[#D4AF37] hover:gap-3"> <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"></path> </svg>
Retour aux collections
</a> </div> </section> <!-- Photo Lookbook Gallery --> <section class="relative z-10 py-20" style="background: linear-gradient(180deg, #00002a 0%, #00001C 100%);"> <div class="mx-auto max-w-7xl px-6"> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> ${collection.images.map((image, i) => renderTemplate`<div class="photo-frame group relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_-12px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out will-change-transform hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] cursor-pointer"${addAttribute(image, "data-image")}> <div class="relative aspect-[3/4] overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(`${collection.name} - Photo ${i + 1}`, "alt")} class="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105" width="600" height="800"${addAttribute(i < 4 ? "eager" : "lazy", "loading")} decoding="async"> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00001C]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div> <!-- Zoom Icon Overlay --> <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100"> <div class="rounded-full bg-[#D4AF37]/20 backdrop-blur-md p-4 border border-[#D4AF37]/30"> <svg class="h-6 w-6 text-[#D4AF37]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"></path> </svg> </div> </div> </div> </div>`)} </div> </div> </section> <!-- CTA Section --> <section class="relative z-10 py-20" style="background: linear-gradient(180deg, #00001C 0%, #00002a 100%);"> <div class="mx-auto max-w-4xl px-6 text-center"> <div class="relative overflow-hidden rounded-[3rem] border border-[#D4AF37]/20 bg-white/5 backdrop-blur-sm p-12 md:p-16"> <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_0%,rgba(212,175,55,0.1),transparent_55%)]"></div> <div class="relative z-10"> <h2 class="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
Intéressé par cette collection ?
</h2> <p class="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
Contactez-nous pour personnaliser votre commande selon vos besoins.
</p> <a href="/contact" class="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#00001C] transition-all duration-300 hover:bg-[#FFFDF2] hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)] hover:scale-105">
Demander un devis
<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"></path> </svg> </a> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} <!-- Lightbox Modal --> <div id="lightbox" class="lightbox fixed inset-0 z-[100] hidden items-center justify-center bg-[#00001C]/95 backdrop-blur-xl"> <button id="lightbox-close" class="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#00001C]"> <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <button id="lightbox-prev" class="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#00001C]"> <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="lightbox-next" class="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#00001C]"> <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </button> <div class="relative max-h-[90vh] max-w-[90vw]"> <img id="lightbox-image" src="" alt="" class="max-h-[90vh] max-w-[90vw] object-contain"> </div> </div> </main> ${renderScript($$result2, "C:/GitHub/confection univers/src/pages/collections/[category].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/GitHub/confection univers/src/pages/collections/[category].astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/collections/[category].astro";
const $$url = "/collections/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$category,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
