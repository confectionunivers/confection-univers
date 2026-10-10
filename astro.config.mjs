import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://confectionunivers.com',
    output: 'static',
    redirects: {
        '/projects': '/services',
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