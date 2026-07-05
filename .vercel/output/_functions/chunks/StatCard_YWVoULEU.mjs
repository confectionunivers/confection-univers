import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, n as renderScript } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
//#region src/pages/components/StatCard.astro
var StatCard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$StatCard,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$StatCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StatCard;
	const { label, value, suffix = "" } = Astro.props;
	const statId = `stat-${Math.random().toString(36).substr(2, 9)}`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="text-center"><div class="mb-3 text-5xl font-bold font-display text-foreground md:text-6xl lg:text-7xl"><span${addAttribute(statId, "id")} class="stat-counter"${addAttribute(value, "data-value")}>0</span><span class="text-primary">${suffix}</span></div><p class="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60 md:text-base">${label}</p></div>${renderScript($$result, "C:/GitHub/confection univers/src/pages/components/StatCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/GitHub/confection univers/src/pages/components/StatCard.astro", void 0);
var $$file = "C:/GitHub/confection univers/src/pages/components/StatCard.astro";
var $$url = "/components/StatCard";
//#endregion
//#region \0virtual:astro:page:src/pages/components/StatCard@_@astro
var page = () => StatCard_exports;
//#endregion
export { page };
