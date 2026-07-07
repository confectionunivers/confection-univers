import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from '../../chunks/astro/server_Dq_uziaj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://confectionunivers.com");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { name, role, bio, photo, alt, linkedin } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group rounded-2xl border border-primary/15 bg-surface/30 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg"> <div class="aspect-[3/4] overflow-hidden"> <img${addAttribute(photo, "src")}${addAttribute(alt, "alt")} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async"> </div> <div class="p-6"> <h3 class="mb-1 text-xl font-semibold font-display text-foreground">${name}</h3> <p class="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary">${role}</p> <p class="mb-4 text-sm leading-relaxed text-foreground/70">${bio}</p> <a${addAttribute(linkedin, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors duration-300 hover:text-primary"${addAttribute(`Profil LinkedIn de ${name}`, "aria-label")}> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg>
LinkedIn
</a> </div> </div>`;
}, "C:/GitHub/confection univers/src/pages/components/TeamCard.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/TeamCard.astro";
const $$url = "/components/TeamCard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TeamCard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
