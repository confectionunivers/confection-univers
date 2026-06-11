import { c as createComponent } from './astro-component_EBDb5fyd.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_BnexLs-S.mjs';
import 'clsx';
import { r as renderScript } from './script_DBuKsR9P.mjs';

const $$StatCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StatCard;
  const { label, value, suffix = "" } = Astro2.props;
  const statId = `stat-${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <div class="mb-3 text-5xl font-bold font-display text-foreground md:text-6xl lg:text-7xl"> <span${addAttribute(statId, "id")} class="stat-counter"${addAttribute(value, "data-value")}>0</span> <span class="text-primary">${suffix}</span> </div> <p class="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60 md:text-base"> ${label} </p> </div> ${renderScript($$result, "C:/GitHub/confection univers/src/pages/components/StatCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/GitHub/confection univers/src/pages/components/StatCard.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/StatCard.astro";
const $$url = "/components/StatCard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$StatCard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
