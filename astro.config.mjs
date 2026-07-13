import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://confectionunivers.com',
    output: 'server',
    adapter: vercel({
        edge: false,
    }),
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()]
    }
});