import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from '../../chunks/astro/server_8J0kuGxV.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://confectionunivers.com");
const $$SectionSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionSeparator;
  const { direction = "down" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative h-16 w-full overflow-hidden ${direction === "down" ? "-mt-16" : "-mb-16"}`, "class")} aria-hidden="true"> <svg${addAttribute(`absolute ${direction === "down" ? "bottom-0" : "top-0"} h-16 w-full`, "class")} viewBox="0 0 1200 120" preserveAspectRatio="none"> <path${addAttribute(
    direction === "down" ? "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" : "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
    "d"
  )} fill="currentColor" class="fill-background"></path> </svg> </div>`;
}, "C:/GitHub/confection univers/src/pages/components/SectionSeparator.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/SectionSeparator.astro";
const $$url = "/components/SectionSeparator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SectionSeparator,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
