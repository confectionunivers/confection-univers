import { c as createComponent, m as maybeRenderHead, b as renderTemplate, d as createAstro, r as renderComponent, e as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_8J0kuGxV.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Footer_CcSogXq-.mjs';
import { g as getPostBySlug, $ as $$BlogSidebar } from '../../chunks/BlogSidebar_BO6hGJPl.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$CommentForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="rounded-2xl p-6 shadow-2xl" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);"> <h3 class="mb-6 font-display text-xl font-bold uppercase tracking-tight text-white">Laisser un commentaire</h3> <form class="space-y-6"> <div class="grid gap-6 md:grid-cols-2"> <div> <label for="name" class="mb-2 block text-sm font-semibold uppercase tracking-wider" style="color: #A0ACC6;">
Nom
</label> <input type="text" id="name" name="name" required class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:border-[#F5B544] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F5B544]/20" placeholder="Votre nom"> </div> <div> <label for="email" class="mb-2 block text-sm font-semibold uppercase tracking-wider" style="color: #A0ACC6;">
Email
</label> <input type="email" id="email" name="email" required class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:border-[#F5B544] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F5B544]/20" placeholder="votre@email.com"> </div> </div> <div> <label for="comment" class="mb-2 block text-sm font-semibold uppercase tracking-wider" style="color: #A0ACC6;">
Commentaire
</label> <textarea id="comment" name="comment" rows="5" required class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:border-[#F5B544] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F5B544]/20 resize-none" placeholder="Partagez vos thoughts..."></textarea> </div> <button type="submit" class="btn-hero-primary w-full justify-center"> <span>Envoyer le commentaire</span> </button> </form> </section>`;
}, "C:/GitHub/confection univers/src/components/CommentForm.astro", void 0);

const $$Astro = createAstro("https://confectionunivers.com");
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const post = getPostBySlug(slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - Confection Univers`, "data-astro-cid-4sn4zg3r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-4sn4zg3r": true })} <!-- Article Hero --> <section class="relative overflow-hidden py-16 md:py-24" style="background: linear-gradient(135deg, #00001C 0%, #00002a 100%);" data-astro-cid-4sn4zg3r> <!-- Background Glow --> <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" data-astro-cid-4sn4zg3r> <div class="absolute left-[10%] top-[20%] w-[500px] h-[500px] rounded-full" style="background: radial-gradient(ellipse, rgba(245, 181, 68, 0.08) 0%, transparent 70%); filter: blur(120px);" data-astro-cid-4sn4zg3r></div> </div> <div class="mx-auto max-w-7xl px-6 md:px-10" data-astro-cid-4sn4zg3r> <!-- Category --> <div class="mb-4 inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider" style="background: rgba(245, 181, 68, 0.9); color: #00001C;" data-astro-cid-4sn4zg3r> ${post.category} </div> <!-- Title --> <h1 class="hero-title font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl" data-astro-cid-4sn4zg3r> ${post.title} </h1> <!-- Meta --> <div class="mt-6 flex flex-wrap items-center gap-6 text-sm font-semibold uppercase tracking-wider" style="color: #A0ACC6;" data-astro-cid-4sn4zg3r> <div class="flex items-center gap-2" data-astro-cid-4sn4zg3r> <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-4sn4zg3r></path> </svg> <span data-astro-cid-4sn4zg3r>${post.date}</span> </div> <div class="flex items-center gap-2" data-astro-cid-4sn4zg3r> <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-4sn4zg3r></path> </svg> <span data-astro-cid-4sn4zg3r>${post.author}</span> </div> </div> </div> </section> <!-- Main Content --> <section class="py-16 md:py-24" style="background: #00001C;" data-astro-cid-4sn4zg3r> <div class="mx-auto max-w-7xl px-6 md:px-10" data-astro-cid-4sn4zg3r> <div class="grid gap-10 lg:grid-cols-12" data-astro-cid-4sn4zg3r> <!-- Main Content (70%) --> <div class="lg:col-span-8" data-astro-cid-4sn4zg3r> <!-- Featured Image --> <div class="mb-8 overflow-hidden rounded-2xl shadow-2xl" style="border: 1px solid rgba(255, 255, 255, 0.1);" data-astro-cid-4sn4zg3r> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="h-full w-full object-cover" data-astro-cid-4sn4zg3r> </div> <!-- Article Content --> <article class="prose prose-invert max-w-none" data-astro-cid-4sn4zg3r> <div class="rounded-2xl p-8 md:p-12" style="background: #00002a; border: 1px solid rgba(255, 255, 255, 0.1);" data-astro-cid-4sn4zg3r> <div class="article-content" data-astro-cid-4sn4zg3r>${unescapeHTML(post.content)}</div> </div> </article> <!-- CTA Block --> <div class="mt-12 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#F5B544]/20" style="background: linear-gradient(135deg, #00002a 0%, #0E172A 100%); border: 2px solid rgba(245, 181, 68, 0.3);" data-astro-cid-4sn4zg3r> <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style="background: rgba(245, 181, 68, 0.1);" data-astro-cid-4sn4zg3r> <svg class="h-6 w-6" style="color: #F5B544;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-4sn4zg3r></path> </svg> </div> <h3 class="mb-3 font-display text-xl font-bold uppercase tracking-tight text-white" data-astro-cid-4sn4zg3r>Un projet de confection pour votre institution ?</h3> <p class="mb-6 text-sm leading-relaxed" style="color: #A0ACC6;" data-astro-cid-4sn4zg3r>
Cet article vous a intéressé ? Contactez Confection Univers pour discuter de votre projet de tenues professionnelles.
</p> <a href="/contact" class="btn-hero-primary inline-flex justify-center" data-astro-cid-4sn4zg3r> <span data-astro-cid-4sn4zg3r>Demander un devis</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-4sn4zg3r></path> </svg> </a> </div> <!-- Comment Form --> <div class="mt-12" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "CommentForm", $$CommentForm, { "data-astro-cid-4sn4zg3r": true })} </div> </div> <!-- Sidebar (30%) --> <div class="lg:col-span-4" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "BlogSidebar", $$BlogSidebar, { "data-astro-cid-4sn4zg3r": true })} </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-4sn4zg3r": true })} </main> ` })} `;
}, "C:/GitHub/confection univers/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/GitHub/confection univers/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
