import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, a as renderComponent, d as renderTemplate, h as maybeRenderHead } from "./server_eIjUU75i.mjs";
import "./compiler_Ca1DtYCd.mjs";
import { n as $$Navbar, r as $$Layout, t as $$Footer } from "./Footer_NRdivuD6.mjs";
import { n as BLOG_POSTS, t as $$BlogSidebar } from "./BlogSidebar_CGOYJU8j.mjs";
//#region src/components/BlogHero.astro
var $$BlogHero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="max-w-7xl mx-auto px-4 mt-6"><div class="relative w-full h-[250px] rounded-[24px] overflow-hidden flex items-center bg-[#00002a] border border-white/5"><!-- Background Image --><img src="/images/blog-hero-bg.jpg" alt="Blog Background" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-[#00001C]/80"></div><!-- Content --><div class="relative z-10 pl-12 pr-6"><div class="mb-2 text-xs font-black uppercase tracking-[0.25em]" style="color: #F5B544;">${"{ 06 }"} # BLOG</div><h1 class="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">Actualités & Conseils</h1></div></div></div>`;
}, "C:/GitHub/confection univers/src/components/BlogHero.astro", void 0);
//#endregion
//#region src/components/BlogCard.astro
createAstro("https://astro.build");
var $$BlogCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogCard;
	const { title, excerpt, image, category, date, author, slug } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="bg-[#00002a] rounded-[24px] border border-white/5 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2"><!-- Image Pleine Largeur (Full-Bleed) --><div class="w-full h-[380px] relative bg-[#00001C]"><img${addAttribute(image, "src")} class="w-full h-full object-cover"${addAttribute(title, "alt")}></div><!-- Contenu sous l'image avec padding --><div class="p-8"><div class="text-xs uppercase tracking-widest text-gray-400 mb-3">${date} • Par ${author}</div><h2 class="text-2xl font-extrabold text-white tracking-tight mb-4 hover:text-orange-500 transition-colors">${title}</h2><p class="text-gray-400 leading-relaxed mb-6 line-clamp-3">${excerpt}</p><a${addAttribute(`/blog/${slug}`, "href")} class="inline-flex items-center text-sm font-bold text-orange-500 hover:underline">LIRE L'ARTICLE →</a></div></div>`;
}, "C:/GitHub/confection univers/src/components/BlogCard.astro", void 0);
//#endregion
//#region src/components/BlogPagination.astro
createAstro("https://astro.build");
var $$BlogPagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPagination;
	const { currentPage, totalPages } = Astro.props;
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	return renderTemplate`${maybeRenderHead($$result)}<nav class="flex items-center justify-center gap-3"><!-- Previous Button -->${currentPage > 1 && renderTemplate`<a${addAttribute(`?page=${currentPage - 1}`, "href")} class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#F5B544] hover:bg-[#F5B544]/10 hover:text-[#F5B544]" aria-label="Page précédente"><svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg></a>`}<!-- Page Numbers (Bullets) -->${pages.map((page) => renderTemplate`<a${addAttribute(`?page=${page}`, "href")}${addAttribute(`flex h-3 w-3 items-center justify-center rounded-full transition-all duration-300 ${page === currentPage ? "h-4 w-4 bg-[#F5B544] shadow-[0_0_12px_rgba(245,181,68,0.5)]" : "bg-white/20 hover:h-4 hover:w-4 hover:bg-white/40"}`, "class")}${addAttribute(`Page ${page}`, "aria-label")}${addAttribute(page === currentPage ? "page" : void 0, "aria-current")}><span class="sr-only">${page}</span></a>`)}<!-- Next Button -->${currentPage < totalPages && renderTemplate`<a${addAttribute(`?page=${currentPage + 1}`, "href")} class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#F5B544] hover:bg-[#F5B544]/10 hover:text-[#F5B544]" aria-label="Page suivante"><svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></a>`}</nav>`;
}, "C:/GitHub/confection univers/src/components/BlogPagination.astro", void 0);
//#endregion
//#region src/pages/blog.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Blog,
	file: () => $$file,
	url: () => $$url
});
var $$Blog = createComponent(($$result, $$props, $$slots) => {
	const POSTS_PER_PAGE = 6;
	const currentPage = 1;
	const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const displayedPosts = BLOG_POSTS.slice(startIndex, 6);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Confection Univers" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="relative">${renderComponent($$result, "Navbar", $$Navbar, {})}<!-- Hero Header -->${renderComponent($$result, "BlogHero", $$BlogHero, {})}<!-- Main Content --><section style="background: #00001C;"><div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8"><!-- Colonne Articles (Gauche - 70%) --><div class="lg:col-span-8 space-y-8">${displayedPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogCard", $$BlogCard, {
		"title": post.title,
		"excerpt": post.excerpt,
		"image": post.image,
		"category": post.category,
		"date": post.date,
		"author": post.author,
		"slug": post.slug
	})}`)}<!-- Pagination --><div class="mt-12 flex justify-center">${renderComponent($$result, "BlogPagination", $$BlogPagination, {
		"currentPage": currentPage,
		"totalPages": totalPages
	})}</div></div><!-- Colonne Sidebar (Droite - 30%) --><div class="lg:col-span-4 space-y-6">${renderComponent($$result, "BlogSidebar", $$BlogSidebar, {})}</div></div></section>${renderComponent($$result, "Footer", $$Footer, {})}</main>` })}`;
}, "C:/GitHub/confection univers/src/pages/blog.astro", void 0);
var $$file = "C:/GitHub/confection univers/src/pages/blog.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog@_@astro
var page = () => blog_exports;
//#endregion
export { page };
