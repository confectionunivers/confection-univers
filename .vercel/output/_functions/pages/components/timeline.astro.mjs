import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from '../../chunks/astro/server_8J0kuGxV.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://confectionunivers.com");
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { milestones } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-62lv7g3y> <!-- Vertical Line --> <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" aria-hidden="true" data-astro-cid-62lv7g3y></div> ${milestones.map((milestone, index) => renderTemplate`<div${addAttribute(`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`, "class")} style="animation-delay: \`\${index * 100}ms\`" data-astro-cid-62lv7g3y> <!-- Dot --> <div${addAttribute(`absolute left-8 top-0 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2 ${index % 2 === 0 ? "md:-translate-x-1/2" : "md:translate-x-1/2"}`, "class")} aria-hidden="true" data-astro-cid-62lv7g3y> <div class="h-2 w-2 rounded-full bg-primary" data-astro-cid-62lv7g3y></div> </div> <!-- Content --> <div${addAttribute(`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`, "class")} data-astro-cid-62lv7g3y> <div class="mb-2 text-3xl font-bold font-display text-primary" data-astro-cid-62lv7g3y>${milestone.year}</div> <h3 class="mb-2 text-xl font-semibold font-display text-foreground" data-astro-cid-62lv7g3y>${milestone.title}</h3> <p class="text-base leading-relaxed text-foreground/70" data-astro-cid-62lv7g3y>${milestone.description}</p> </div> </div>`)} </div> `;
}, "C:/GitHub/confection univers/src/pages/components/Timeline.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/Timeline.astro";
const $$url = "/components/Timeline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Timeline,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
