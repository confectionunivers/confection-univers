/**
 * Animations de scroll pour le reste du site : titres de section qui montent,
 * cartes qui apparaissent en cascade. Le hero a ses propres effets (hero-fx.ts).
 * Les éléments déjà animés par RevealOnScroll sont ignorés pour éviter les doublons.
 * Désactivé si l'utilisateur préfère moins de mouvement.
 */
import { isLightMode } from './perf';

const SCOPE = 'section:not(#hero-cu)';

export async function initSiteFx() {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	/* Mobile / connexion lente : ni téléchargement de gsap, ni calculs. */
	if (isLightMode()) return;

	const { default: gsap } = await import('gsap');
	const { ScrollTrigger } = await import('gsap/ScrollTrigger');
	gsap.registerPlugin(ScrollTrigger);

	// Titres de section : montée douce à l'entrée dans l'écran
	gsap.utils.toArray<HTMLElement>(`${SCOPE} h2`).forEach((el) => {
		if (el.closest('.reveal-on-scroll, [data-no-fx]')) return;
		gsap.from(el, {
			y: 40,
			opacity: 0,
			duration: 0.9,
			ease: 'power3.out',
			clearProps: 'transform,opacity',
			scrollTrigger: { trigger: el, start: 'top 88%', once: true },
		});
	});

	// Grilles de cartes : apparition en cascade
	gsap.utils.toArray<HTMLElement>(`${SCOPE} .grid`).forEach((grid) => {
		const items = Array.from(grid.children).filter(
			(c): c is HTMLElement =>
				c instanceof HTMLElement && !c.closest('.reveal-on-scroll') && !c.hasAttribute('data-no-fx'),
		);
		if (!items.length) return;
		gsap.from(items, {
			y: 48,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
			stagger: 0.09,
			clearProps: 'transform,opacity',
			scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
		});
	});

	ScrollTrigger.refresh();
}
