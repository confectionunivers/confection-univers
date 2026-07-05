import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
//#region src/pages/components/CTA.astro
var CTA_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CTA,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$CTA = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CTA;
	const { title, description, button } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden bg-primary py-24 text-background"><div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary opacity-50" aria-hidden="true"></div><div class="relative mx-auto max-w-4xl px-6 text-center"><h2 class="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">${title}</h2><p class="mb-10 text-lg leading-relaxed text-background/90 md:text-xl">${description}</p><a${addAttribute(button.href, "href")} class="inline-flex items-center gap-3 rounded-full border-2 border-background/30 bg-background/10 px-10 py-4 text-[11px] font-black uppercase tracking-widest text-background transition-all duration-300 hover:bg-background hover:text-primary hover:border-background">${button.text}<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div></section>`;
}, "C:/GitHub/confection univers/src/pages/components/CTA.astro", void 0);
var $$file = "C:/GitHub/confection univers/src/pages/components/CTA.astro";
var $$url = "/components/CTA";
//#endregion
//#region \0virtual:astro:page:src/pages/components/CTA@_@astro
var page = () => CTA_exports;
//#endregion
export { page };
