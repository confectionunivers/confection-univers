import { c as createComponent } from './astro-component_EBDb5fyd.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_BnexLs-S.mjs';
import 'clsx';

const $$LogoWall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LogoWall;
  const { logos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"> ${logos.map((logo) => renderTemplate`<div class="flex items-center justify-center rounded-xl border border-primary/10 bg-surface/20 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-surface/30"> <img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} class="h-12 w-auto object-contain opacity-60 transition-all duration-300 hover:opacity-100 grayscale hover:grayscale-0" loading="lazy" decoding="async"> </div>`)} </div>`;
}, "C:/GitHub/confection univers/src/pages/components/LogoWall.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/LogoWall.astro";
const $$url = "/components/LogoWall";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LogoWall,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
