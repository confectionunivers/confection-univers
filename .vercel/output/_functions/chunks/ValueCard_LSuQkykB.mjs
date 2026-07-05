import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, d as renderTemplate, h as maybeRenderHead } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
//#region src/pages/components/ValueCard.astro
var ValueCard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ValueCard,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$ValueCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ValueCard;
	const { title, description } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="group rounded-2xl border border-primary/15 bg-surface/30 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"><div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 transition-all duration-300 group-hover:bg-primary/30"><svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="mb-3 text-xl font-semibold font-display text-foreground">${title}</h3><p class="text-base leading-relaxed text-foreground/70">${description}</p></div>`;
}, "C:/GitHub/confection univers/src/pages/components/ValueCard.astro", void 0);
var $$file = "C:/GitHub/confection univers/src/pages/components/ValueCard.astro";
var $$url = "/components/ValueCard";
//#endregion
//#region \0virtual:astro:page:src/pages/components/ValueCard@_@astro
var page = () => ValueCard_exports;
//#endregion
export { page };
