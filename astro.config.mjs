import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://confectionunivers.com',
    output: 'static',
    /**
     * URLs canoniques SANS slash final (`/about`, pas `/about/`) : c'est la
     * forme utilisée par tous les liens internes, le canonical et le sitemap.
     * Un seul format = aucun contenu dupliqué ni saut de redirection au crawl.
     */
    trailingSlash: 'never',
    build: {
        /**
         * Les petites feuilles de style sont inlinées dans le HTML : une
         * requête bloquante en moins avant le premier rendu (LCP).
         */
        inlineStylesheets: 'auto',
    },
    redirects: {
        '/projects': '/services',
        /** Article rafraîchi en 2026 : l'ancienne URL reste servie. */
        '/blog/tendances-2025-tenues-travail': '/blog/tendances-2026-tenues-travail',
    },
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: ['.e2b.app'],
            cors: { origin: /^https:\/\/[^/]+\.e2b\.app$/ }
        }
    }
});
