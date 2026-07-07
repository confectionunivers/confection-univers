import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from '../../chunks/astro/server_Dq_uziaj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://confectionunivers.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className = "", background = "", children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative py-24 md:py-32 ${background} ${className}`, "class")}> ${children} </section>`;
}, "C:/GitHub/confection univers/src/pages/components/Section.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/Section.astro";
const $$url = "/components/Section";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Section,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
