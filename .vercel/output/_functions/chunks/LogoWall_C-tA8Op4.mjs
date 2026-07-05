import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
//#region src/pages/components/LogoWall.astro
var LogoWall_exports = /* @__PURE__ */ __exportAll({
	default: () => $$LogoWall,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$LogoWall = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LogoWall;
	const { logos } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">${logos.map((logo) => renderTemplate`<div class="flex items-center justify-center rounded-xl border border-primary/10 bg-surface/20 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-surface/30"><img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} class="h-12 w-auto object-contain opacity-60 transition-all duration-300 hover:opacity-100 grayscale hover:grayscale-0" loading="lazy" decoding="async"></div>`)}</div>`;
}, "C:/GitHub/confection univers/src/pages/components/LogoWall.astro", void 0);
var $$file = "C:/GitHub/confection univers/src/pages/components/LogoWall.astro";
var $$url = "/components/LogoWall";
//#endregion
//#region \0virtual:astro:page:src/pages/components/LogoWall@_@astro
var page = () => LogoWall_exports;
//#endregion
export { page };
