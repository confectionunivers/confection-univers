import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
//#region src/pages/components/Timeline.astro
var Timeline_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Timeline,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Timeline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Timeline;
	const { milestones } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="relative" data-astro-cid-dvkptspd><!-- Vertical Line --><div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" aria-hidden="true" data-astro-cid-dvkptspd></div>${milestones.map((milestone, index) => renderTemplate`<div${addAttribute(`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`, "class")} style="animation-delay: \`\${index * 100}ms\`" data-astro-cid-dvkptspd><!-- Dot --><div${addAttribute(`absolute left-8 top-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2 ${index % 2 === 0 ? "md:-translate-x-1/2" : "md:translate-x-1/2"}`, "class")} aria-hidden="true" data-astro-cid-dvkptspd><div class="h-2 w-2 rounded-full bg-primary" data-astro-cid-dvkptspd></div></div><!-- Content --><div${addAttribute(`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`, "class")} data-astro-cid-dvkptspd><div class="mb-2 text-3xl font-bold font-display text-primary" data-astro-cid-dvkptspd>${milestone.year}</div><h3 class="mb-2 text-xl font-semibold font-display text-foreground" data-astro-cid-dvkptspd>${milestone.title}</h3><p class="text-base leading-relaxed text-foreground/70" data-astro-cid-dvkptspd>${milestone.description}</p></div></div>`)}</div>`;
}, "C:/GitHub/confection univers/src/pages/components/Timeline.astro", void 0);
var $$file = "C:/GitHub/confection univers/src/pages/components/Timeline.astro";
var $$url = "/components/Timeline";
//#endregion
//#region \0virtual:astro:page:src/pages/components/Timeline@_@astro
var page = () => Timeline_exports;
//#endregion
export { page };
