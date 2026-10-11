/**
 * Animations du hero : entrée du titre, parallaxe des visuels au scroll,
 * attraction magnétique des boutons. Les 4 visuels du défilement restent
 * gérés par le script du composant HeroCreative.
 * Désactivé si l'utilisateur préfère moins de mouvement.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroFx(root: HTMLElement) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel);

	// 1. Entrée : chaque ligne du titre se découvre de haut en bas
	const lines = root.querySelectorAll<HTMLElement>('.hero-h1 .block');
	if (lines.length) {
		gsap.from(lines, {
			clipPath: 'inset(0 0 100% 0)',
			y: 36,
			duration: 1.2,
			ease: 'expo.out',
			stagger: 0.14,
			delay: 0.1,
			clearProps: 'clipPath,transform',
		});
	}

	const sub = q('.hero-sub');
	if (sub) {
		gsap.from(sub, { opacity: 0, y: 14, duration: 1, ease: 'power2.out', delay: 0.6 });
	}

	// 2. Parallaxe au scroll (liée au défilement, sur la hauteur du hero)
	const heroScroll = { trigger: root, start: 'top top', end: 'bottom top', scrub: 0.6 };

	const photos = q('.hero-photos');
	if (photos) {
		gsap.to(photos, { yPercent: 10, ease: 'none', scrollTrigger: heroScroll });
	}

	// Le titre et le sous-titre s'estompent et remontent légèrement
	const fadeOut = [q('.hero-h1'), sub].filter(Boolean) as HTMLElement[];
	if (fadeOut.length) {
		gsap.to(fadeOut, { yPercent: -28, opacity: 0.2, ease: 'none', scrollTrigger: heroScroll });
	}

	const lead = q('.hero-lead');
	if (lead) {
		gsap.to(lead, { yPercent: -14, ease: 'none', scrollTrigger: heroScroll });
	}

	// 3. Visuels secondaires : image qui glisse à l'intérieur de son cadre
	const drift = (img: HTMLElement | null) => {
		if (!img || !img.parentElement) return;
		gsap.set(img, { scale: 1.14 });
		gsap.fromTo(
			img,
			{ yPercent: -7 },
			{
				yPercent: 7,
				ease: 'none',
				scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
			},
		);
	};
	drift(q<HTMLElement>('.secondary-img img'));
	drift(q<HTMLElement>('.card-img img'));

	// 4. Boutons magnétiques (suivent légèrement le curseur)
	const magnetic = root.querySelectorAll<HTMLElement>('.hero-btn, .circle-cta');
	magnetic.forEach((el) => {
		const x = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
		const y = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
		el.addEventListener('mousemove', (e) => {
			const r = el.getBoundingClientRect();
			x((e.clientX - (r.left + r.width / 2)) * 0.2);
			y((e.clientY - (r.top + r.height / 2)) * 0.2);
		});
		el.addEventListener('mouseleave', () => {
			x(0);
			y(0);
		});
	});
}
