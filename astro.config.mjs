import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: vercel({
		functions: {
			api: {
				include: ['src/pages/api/**'],
			},
		},
	}),
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});
