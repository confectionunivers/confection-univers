import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
    site: 'https://confectionunivers.com',
    output: 'static',
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()]
    }
});