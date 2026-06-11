import { c as createComponent } from './astro-component_EBDb5fyd.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_BnexLs-S.mjs';
import 'clsx';

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Testimonial;
  const { quote, author, role, company, photo, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-2xl border border-primary/15 bg-surface/30 p-8"> <svg class="mb-4 h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path> </svg> <p class="mb-6 text-lg leading-relaxed text-foreground/80">"${quote}"</p> <div class="flex items-center gap-4"> ${photo && renderTemplate`<img${addAttribute(photo, "src")}${addAttribute(alt || author, "alt")} class="h-14 w-14 rounded-full object-cover border-2 border-primary/20" loading="lazy" decoding="async">`} <div> <div class="font-semibold text-foreground">${author}</div> <div class="text-sm text-foreground/60">${role}, ${company}</div> </div> </div> </div>`;
}, "C:/GitHub/confection univers/src/pages/components/Testimonial.astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/components/Testimonial.astro";
const $$url = "/components/Testimonial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Testimonial,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
