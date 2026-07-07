import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true },
        imagesConfig: { sizes: [320, 640, 1280, 1920] },
        // Forcer le déploiement en Serverless Function standard
        functionPerRoute: false 
    }),
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
});