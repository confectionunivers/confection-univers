/**
 * Fonctions GSAP réutilisables pour les animations du site
 * Compatible Astro + React
 */

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Enregistrement des plugins GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Vérifie si l'utilisateur préfère le mouvement réduit
 */
export const prefersReducedMotion = (): boolean => {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Vérifie si l'appareil est mobile
 */
export const isMobile = (): boolean => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
	       ('ontouchstart' in window) ||
	       (navigator.maxTouchPoints > 0);
};

/**
 * Animation d'entrée de la navbar
 */
export const animateNavbarEntry = (navbarSelector: string): void => {
	if (prefersReducedMotion()) return;

	gsap.from(navbarSelector, {
		y: -50,
		opacity: 0,
		duration: 0.8,
		ease: 'power3.out'
	});
};

/**
 * Animation d'entrée du sous-titre
 */
export const animateSubtitleEntry = (subtitleSelector: string): void => {
	if (prefersReducedMotion()) return;

	gsap.from(subtitleSelector, {
		y: 30,
		opacity: 0,
		duration: 0.6,
		ease: 'power3.out'
	});
};

/**
 * Animation d'entrée du titre principal avec stagger sur les mots
 */
export const animateTitleEntry = (titleSelector: string): void => {
	if (prefersReducedMotion()) return;

	const titleElement = document.querySelector(titleSelector);
	if (!titleElement) return;

	const splitTitle = new SplitType(titleElement, { types: 'words' });

	gsap.from(splitTitle.words, {
		y: 100,
		opacity: 0,
		duration: 0.8,
		ease: 'back.out(1.2)',
		stagger: 0.15
	});
};

/**
 * Animation d'entrée de la description
 */
export const animateDescriptionEntry = (descriptionSelector: string): void => {
	if (prefersReducedMotion()) return;

	gsap.from(descriptionSelector, {
		y: 20,
		opacity: 0,
		duration: 0.6,
		ease: 'power3.out'
	});
};

/**
 * Animation d'entrée des boutons CTA avec stagger
 */
export const animateButtonsEntry = (buttonsSelector: string): void => {
	if (prefersReducedMotion()) return;

	const buttons = document.querySelectorAll(buttonsSelector);
	if (buttons.length === 0) return;

	gsap.from(buttons, {
		y: 20,
		opacity: 0,
		duration: 0.5,
		ease: 'power3.out',
		stagger: 0.1
	});
};

/**
 * Animation d'entrée des images produits avec zoom
 */
export const animateImagesEntry = (imagesSelector: string): void => {
	if (prefersReducedMotion()) return;

	const images = document.querySelectorAll(imagesSelector);
	if (images.length === 0) return;

	gsap.from(images, {
		scale: 0.8,
		opacity: 0,
		duration: 0.8,
		ease: 'back.out(1.4)',
		stagger: 0.2
	});
};

/**
 * Animation des éléments décoratifs "+"
 */
export const animateDecorativeElements = (elementsSelector: string): void => {
	if (prefersReducedMotion()) return;

	const elements = document.querySelectorAll(elementsSelector);
	if (elements.length === 0) return;

	gsap.from(elements, {
		rotation: -360,
		scale: 0,
		opacity: 0,
		duration: 0.6,
		ease: 'back.out(1.5)',
		stagger: 0.1
	});
};

/**
 * Timeline complète d'entrée de la Hero section
 */
export const createHeroEntryTimeline = (selectors: {
	navbar?: string;
	subtitle: string;
	title: string;
	description: string;
	buttons: string;
	images: string;
	decorative?: string;
}): gsap.core.Timeline => {
	const tl = gsap.timeline();

	// Animation de la navbar (optionnelle)
	if (selectors.navbar) {
		tl.from(selectors.navbar, {
			y: -50,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		});
	}

	// Animation du sous-titre
	tl.from(selectors.subtitle, {
		y: 30,
		opacity: 0,
		duration: 0.6,
		ease: 'power3.out'
	}, '-=0.4');

	// Animation du titre avec stagger sur les mots
	const titleElement = document.querySelector(selectors.title);
	if (titleElement) {
		const splitTitle = new SplitType(titleElement, { types: 'words' });
		tl.from(splitTitle.words, {
			y: 100,
			opacity: 0,
			duration: 0.8,
			ease: 'back.out(1.2)',
			stagger: 0.15
		}, '-=0.3');
	}

	// Animation de la description
	tl.from(selectors.description, {
		y: 20,
		opacity: 0,
		duration: 0.6,
		ease: 'power3.out'
	}, '-=0.4');

	// Animation des boutons
	const buttons = document.querySelectorAll(selectors.buttons);
	if (buttons.length > 0) {
		tl.from(buttons, {
			y: 20,
			opacity: 0,
			duration: 0.5,
			ease: 'power3.out',
			stagger: 0.1
		}, '-=0.3');
	}

	// Animation des images
	const images = document.querySelectorAll(selectors.images);
	if (images.length > 0) {
		tl.from(images, {
			scale: 0.8,
			opacity: 0,
			duration: 0.8,
			ease: 'back.out(1.4)',
			stagger: 0.2
		}, '-=0.3');
	} else {
		// Si le sélecteur ne trouve pas les images, essayer avec un sélecteur plus spécifique
		const heroImages = document.querySelectorAll('.hero-figure-3d');
		if (heroImages.length > 0) {
			tl.from(heroImages, {
				scale: 0.8,
				opacity: 0,
				duration: 0.8,
				ease: 'back.out(1.4)',
				stagger: 0.2
			}, '-=0.3');
		}
	}

	// Animation des éléments décoratifs (optionnels)
	if (selectors.decorative) {
		const decorative = document.querySelectorAll(selectors.decorative);
		if (decorative.length > 0) {
			tl.from(decorative, {
				rotation: -360,
				scale: 0,
				opacity: 0,
				duration: 0.6,
				ease: 'back.out(1.5)',
				stagger: 0.1
			}, '-=0.2');
		}
	}

	return tl;
};

/**
 * Effet parallax au mouvement de la souris
 * @param container - Le conteneur qui écoute les événements souris
 * @param elements - Tableau d'éléments avec leurs facteurs de mouvement { selector, xFactor, yFactor }
 */
export const createMouseParallax = (
	container: HTMLElement,
	elements: Array<{ selector: string; xFactor: number; yFactor: number }>
): (() => void) => {
	if (prefersReducedMotion() || isMobile()) {
		return () => {};
	}

	const handleMouseMove = (e: MouseEvent) => {
		const mouseX = (e.clientX / window.innerWidth) - 0.5;
		const mouseY = (e.clientY / window.innerHeight) - 0.5;

		elements.forEach(({ selector, xFactor, yFactor }) => {
			const element = document.querySelector(selector);
			if (element) {
				gsap.to(element, {
					x: mouseX * xFactor * 50,
					y: mouseY * yFactor * 50,
					duration: 1,
					ease: 'power2.out'
				});
			}
		});
	};

	container.addEventListener('mousemove', handleMouseMove);

	// Fonction de cleanup
	return () => {
		container.removeEventListener('mousemove', handleMouseMove);
	};
};

/**
 * Animation hover du bouton principal (scale + shadow + flèche)
 */
export const animatePrimaryButtonHover = (buttonSelector: string): void => {
	if (prefersReducedMotion()) return;

	const button = document.querySelector(buttonSelector);
	if (!button) return;

	button.addEventListener('mouseenter', () => {
		gsap.to(button, {
			scale: 1.05,
			duration: 0.3,
			ease: 'power2.out'
		});

		const arrow = button.querySelector('svg, .arrow');
		if (arrow) {
			gsap.to(arrow, {
				x: 5,
				duration: 0.3,
				ease: 'power2.out'
			});
		}
	});

	button.addEventListener('mouseleave', () => {
		gsap.to(button, {
			scale: 1,
			duration: 0.3,
			ease: 'power2.out'
		});

		const arrow = button.querySelector('svg, .arrow');
		if (arrow) {
			gsap.to(arrow, {
				x: 0,
				duration: 0.3,
				ease: 'power2.out'
			});
		}
	});
};

/**
 * Animation hover du bouton secondaire (remplissage de gauche à droite)
 * Cette fonction utilise CSS plutôt que GSAP pour l'effet de remplissage
 */
export const setupSecondaryButtonHover = (buttonSelector: string): void => {
	if (prefersReducedMotion()) return;

	const button = document.querySelector(buttonSelector);
	if (!button) return;

	// L'effet de remplissage est géré par CSS (::before pseudo-element)
	// Cette fonction peut être étendue pour des effets GSAP supplémentaires
};

/**
 * Animation du ticker (marquee infini)
 */
export const animateMarquee = (marqueeSelector: string, duration: number = 30): void => {
	if (prefersReducedMotion()) return;

	const marquee = document.querySelector(marqueeSelector);
	if (!marquee) return;

	gsap.to(marquee, {
		xPercent: -50,
		ease: 'none',
		duration: duration,
		repeat: -1
	});

	// Pause au hover
	marquee.addEventListener('mouseenter', () => {
		gsap.pause(marquee);
	});

	marquee.addEventListener('mouseleave', () => {
		gsap.resume(marquee);
	});
};

/**
 * Animation de pulse pour le bouton WhatsApp
 */
export const animateWhatsAppPulse = (buttonSelector: string): void => {
	if (prefersReducedMotion()) return;

	const button = document.querySelector(buttonSelector);
	if (!button) return;

	// Créer un élément ring pour l'effet pulse
	const ring = document.createElement('div');
	ring.className = 'whatsapp-pulse-ring';
	ring.style.cssText = `
		position: absolute;
		inset: -8px;
		border-radius: 50%;
		border: 2px solid #25D366;
		opacity: 0;
		pointer-events: none;
	`;
	const buttonEl = button as HTMLElement;
	buttonEl.style.position = 'relative';
	buttonEl.appendChild(ring);

	// Animation du ring
	gsap.to(ring, {
		scale: 1.5,
		opacity: 0,
		duration: 1.5,
		repeat: -1,
		ease: 'power1.out'
	});
};

/**
 * Cleanup des animations GSAP
 */
export const cleanupAnimations = (): void => {
	gsap.killTweensOf('*');
	ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
