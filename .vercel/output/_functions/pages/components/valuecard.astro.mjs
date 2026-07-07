import { d as createAstro, c as createComponent, m as maybeRenderHead, b as renderTemplate } from '../../chunks/astro/server_Dq_uziaj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://confectionunivers.com");
const $$ValueCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ValueCard;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group rounded-2xl border border-primary/15 bg-surface/30 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"> <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 transition-all duration-300 group-hover:bg-primary/30"> <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="mb-3 text-xl font-semibold font-display text-foreground">${title}</h3> <p class="text-base leading-relaxed text-foreground/70">${description}</p> </div>`;
}, "C:/GitHub/confection univers/src/pages/components/ValueCard.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/ValueCard.astro";
const $$url = "/components/ValueCard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ValueCard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
