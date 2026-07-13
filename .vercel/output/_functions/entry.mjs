import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CbyBh9-1.mjs';
import { manifest } from './manifest_TCUX8Zpi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/about.data.astro.mjs');
const _page3 = () => import('./pages/api/send-devis.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/collections/_category_.astro.mjs');
const _page7 = () => import('./pages/components/cta.astro.mjs');
const _page8 = () => import('./pages/components/logowall.astro.mjs');
const _page9 = () => import('./pages/components/section.astro.mjs');
const _page10 = () => import('./pages/components/sectionseparator.astro.mjs');
const _page11 = () => import('./pages/components/statcard.astro.mjs');
const _page12 = () => import('./pages/components/teamcard.astro.mjs');
const _page13 = () => import('./pages/components/testimonial.astro.mjs');
const _page14 = () => import('./pages/components/timeline.astro.mjs');
const _page15 = () => import('./pages/components/valuecard.astro.mjs');
const _page16 = () => import('./pages/contact.astro.mjs');
const _page17 = () => import('./pages/products.astro.mjs');
const _page18 = () => import('./pages/projects.astro.mjs');
const _page19 = () => import('./pages/services/_slug_.astro.mjs');
const _page20 = () => import('./pages/services.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/about.data.ts", _page2],
    ["src/pages/api/send-devis.js", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/collections/[category].astro", _page6],
    ["src/pages/components/CTA.astro", _page7],
    ["src/pages/components/LogoWall.astro", _page8],
    ["src/pages/components/Section.astro", _page9],
    ["src/pages/components/SectionSeparator.astro", _page10],
    ["src/pages/components/StatCard.astro", _page11],
    ["src/pages/components/TeamCard.astro", _page12],
    ["src/pages/components/Testimonial.astro", _page13],
    ["src/pages/components/Timeline.astro", _page14],
    ["src/pages/components/ValueCard.astro", _page15],
    ["src/pages/contact.astro", _page16],
    ["src/pages/products.astro", _page17],
    ["src/pages/projects.astro", _page18],
    ["src/pages/services/[slug]/index.astro", _page19],
    ["src/pages/services.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c7234ccc-b8e3-4eae-9318-3d9c8c39101e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
