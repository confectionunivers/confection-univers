/**
 * Moteur d'animations — effets de scroll type Noryx.
 *
 * Piloté par attributs, donc utilisable depuis n'importe quel composant Astro :
 *
 *   data-motion="up|fade|scale|left|right"    apparition au scroll
 *   data-motion-delay="0.15"                  retard (s)
 *   data-motion-group                         apparition en cascade des enfants
 *   data-motion-mask                          révélation masquée (enfants .nx-mask)
 *   data-motion-spaced                        écartement des lettres au scroll
 *   data-motion-parallax data-speed="0.15"    parallaxe verticale
 *   data-motion-counter data-to="1500"        compteur qui s'incrémente
 *   data-motion-clip                          révélation par masque sur les images
 *   data-motion-tilt                          inclinaison à la souris
 *
 * Tout est désactivé si l'utilisateur demande un mouvement réduit.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const html = document.documentElement;

/* ============================================================
   1. Défilement fluide (Lenis) relié à ScrollTrigger
   ============================================================ */
if (!reduced) {
	try {
		const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });

		lenis.on('scroll', ScrollTrigger.update);
		gsap.ticker.add((time) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);

		// Les ancres internes passent par Lenis pour rester fluides.
		document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
			link.addEventListener('click', (event) => {
				const id = link.getAttribute('href');
				if (!id || id === '#') return;
				const target = document.querySelector(id);
				if (!target) return;
				event.preventDefault();
				lenis.scrollTo(target as HTMLElement, { offset: -90, duration: 1.1 });
			});
		});
	} catch {
		/* Si Lenis échoue, le scroll natif reste en place. */
	}
}

/* ============================================================
   2. Aides
   ============================================================ */
const $ = <T extends Element = HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

/** Amène l'élément à son état final (visible). */
function show(el: Element, delay = 0) {
	gsap.to(el, { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 0.85, delay, ease: 'power3.out' });
}

/* ============================================================
   3. Apparitions simples
   ============================================================ */
if (!reduced) {
	$('[data-motion]').forEach((el) => {
		const kind = el.getAttribute('data-motion');
		const delay = parseFloat(el.getAttribute('data-motion-delay') ?? '0');
		const vars: gsap.TweenVars = { autoAlpha: 1, duration: 0.85, delay, ease: 'power3.out' };

		if (kind === 'up') vars.y = 0;
		if (kind === 'left') vars.x = 0;
		if (kind === 'right') vars.x = 0;
		if (kind === 'scale') {
			vars.scale = 1;
			vars.y = 0;
		}

		gsap.to(el, {
			...vars,
			scrollTrigger: { trigger: el, start: 'top 88%', once: true },
		});
	});

	/* Apparition en cascade des enfants directs. */
	$('[data-motion-group]').forEach((group) => {
		const children = Array.from(group.children);
		if (!children.length) return;
		gsap.to(children, {
			autoAlpha: 1,
			y: 0,
			scale: 1,
			duration: 0.75,
			stagger: parseFloat(group.getAttribute('data-motion-stagger') ?? '0.09'),
			ease: 'power3.out',
			scrollTrigger: { trigger: group, start: 'top 84%', once: true },
		});
	});

	/* Révélation masquée : chaque ligne sort de derrière son cache. */
	$('[data-motion-mask]').forEach((block) => {
		const lines = Array.from(block.querySelectorAll('.nx-mask > *'));
		if (!lines.length) return;
		gsap.to(lines, {
			y: 0,
			duration: 1,
			stagger: 0.09,
			ease: 'power4.out',
			scrollTrigger: { trigger: block, start: 'top 85%', once: true },
		});
	});

	/* Écartement des lettres : le titre se resserre quand on descend. */
	$('[data-motion-spaced]').forEach((el) => {
		gsap.fromTo(
			el,
			{ letterSpacing: '0.16em', autoAlpha: 0.35 },
			{
				letterSpacing: '-0.015em',
				autoAlpha: 1,
				ease: 'none',
				scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 38%', scrub: 0.6 },
			}
		);
	});

	/* Parallaxe verticale. */
	$('[data-motion-parallax]').forEach((el) => {
		const speed = parseFloat(el.getAttribute('data-speed') ?? '0.12');
		gsap.fromTo(
			el,
			{ yPercent: speed * -60 },
			{
				yPercent: speed * 60,
				ease: 'none',
				scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
			}
		);
	});

	/* Révélation par masque (images, cartes). */
	$('[data-motion-clip]').forEach((el) => {
		gsap.fromTo(
			el,
			{ clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
			{
				clipPath: 'inset(0 0 0% 0)',
				scale: 1,
				duration: 1.15,
				ease: 'power4.out',
				scrollTrigger: { trigger: el, start: 'top 88%', once: true },
			}
		);
	});

	/* Compteurs. */
	$('[data-motion-counter]').forEach((el) => {
		const to = parseFloat(el.getAttribute('data-to') ?? '0');
		const decimals = parseInt(el.getAttribute('data-decimals') ?? '0', 10);
		const suffix = el.getAttribute('data-suffix') ?? '';
		const prefix = el.getAttribute('data-prefix') ?? '';
		const obj = { v: 0 };

		gsap.to(obj, {
			v: to,
			duration: 1.8,
			ease: 'power2.out',
			scrollTrigger: { trigger: el, start: 'top 90%', once: true },
			onUpdate: () => {
				el.textContent = `${prefix}${obj.v.toFixed(decimals)}${suffix}`;
			},
		});
	});

	/* Inclinaison à la souris. */
	$('[data-motion-tilt]').forEach((el) => {
		const strength = parseFloat(el.getAttribute('data-tilt-strength') ?? '7');
		const onMove = (event: PointerEvent) => {
			const box = el.getBoundingClientRect();
			const px = (event.clientX - box.left) / box.width - 0.5;
			const py = (event.clientY - box.top) / box.height - 0.5;
			gsap.to(el, {
				rotateY: px * strength,
				rotateX: -py * strength,
				transformPerspective: 900,
				duration: 0.5,
				ease: 'power2.out',
			});
		};
		const reset = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' });
		el.addEventListener('pointermove', onMove);
		el.addEventListener('pointerleave', reset);
	});
} else {
	/* Mouvement réduit : tout est visible immédiatement. */
	$('[data-motion], [data-motion-group] > *, .nx-mask > *').forEach((el) => show(el));
}

/* ============================================================
   4. Accordéons numérotés
   ============================================================ */
$('[data-accordion]').forEach((accordion) => {
	const items = Array.from(accordion.querySelectorAll<HTMLElement>('.nx-acc__item'));

	items.forEach((item, index) => {
		const trigger = item.querySelector<HTMLButtonElement>('.nx-acc__trigger');
		if (!trigger) return;

		trigger.setAttribute('aria-expanded', String(item.dataset.open === 'true'));
		const body = item.querySelector<HTMLElement>('.nx-acc__body');
		if (body) body.setAttribute('aria-hidden', String(item.dataset.open !== 'true'));

		trigger.addEventListener('click', () => {
			const isOpen = item.dataset.open === 'true';
			// Un seul panneau ouvert à la fois, comme sur Noryx.
			items.forEach((other) => {
				other.dataset.open = 'false';
				other.querySelector('.nx-acc__trigger')?.setAttribute('aria-expanded', 'false');
				other.querySelector('.nx-acc__body')?.setAttribute('aria-hidden', 'true');
			});
			if (!isOpen) {
				item.dataset.open = 'true';
				trigger.setAttribute('aria-expanded', 'true');
				body?.setAttribute('aria-hidden', 'false');
			}
			ScrollTrigger.refresh();
		});
	});
});

/* ============================================================
   5. Rafraîchissement après chargement complet
   ============================================================ */
window.addEventListener('load', () => ScrollTrigger.refresh());
html.classList.add('motion-ready');
