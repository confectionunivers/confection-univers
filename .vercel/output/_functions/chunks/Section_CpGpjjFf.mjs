import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
//#region src/pages/components/Section.astro
var Section_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Section,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Section = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Section;
	const { class: className = "", background = "", children } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(`relative py-24 md:py-32 ${background} ${className}`, "class")}>${children}</section>`;
}, "C:/GitHub/confection univers/src/pages/components/Section.astro", void 0);
var $$file = "C:/GitHub/confection univers/src/pages/components/Section.astro";
var $$url = "/components/Section";
//#endregion
//#region \0virtual:astro:page:src/pages/components/Section@_@astro
var page = () => Section_exports;
//#endregion
export { page };
