import { c as createComponent } from './astro-component_EBDb5fyd.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_BnexLs-S.mjs';
import 'clsx';

const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
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
