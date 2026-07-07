import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://confectionunivers.com',
    output: 'server',
    adapter: vercel({
        functionPerRoute: false,
        entrypoint: './entry.mjs'
    }),
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: true
        }
    }
});
