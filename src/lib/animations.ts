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

	const navbar = document.querySelector(navbarSelector) as HTMLElement;
	if (navbar) {
		navbar.style.willChange = 'transform, opacity';
	}

	// Optimisation mobile : durée réduite et mouvement moins prononcé
	const duration = isMobile() ? 0.5 : 0.8;
	const yValue = isMobile() ? -30 : -50;

	gsap.from(navbarSelector, {
		y: yValue,
		opacity: 0,
		duration: duration,
		ease: 'power3.out',
		onComplete: () => {
			if (navbar) navbar.style.willChange = 'auto';
		}
	});
};

/**
 * Animation d'entrée du sous-titre
 */
export const animateSubtitleEntry = (subtitleSelector: string): void => {
	if (prefersReducedMotion()) return;

	const subtitle = document.querySelector(subtitleSelector) as HTMLElement;
	if (subtitle) {
		subtitle.style.willChange = 'transform, opacity';
	}

	gsap.from(subtitleSelector, {
		y: 30,
		opacity: 0,
		duration: 0.6,
		ease: 'power3.out',
		onComplete: () => {
			if (subtitle) subtitle.style.willChange = 'auto';
		}
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
	if (selectors.buttons && selectors.buttons !== '') {
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
	}

	// Animation des images
	if (selectors.images && selectors.images !== '') {
		const images = document.querySelectorAll(selectors.images);
		if (images.length > 0) {
			tl.from(images, {
				scale: 0.8,
				opacity: 0,
				duration: 0.8,
				ease: 'back.out(1.4)',
				stagger: 0.2
			}, '-=0.3');
		}
	}

	// Animation des éléments décoratifs (optionnels)
	if (selectors.decorative && selectors.decorative !== '') {
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
 * Animation hover du bouton principal (scale + shadow + flèche avec effet 3D prononcé)
 */
export const animatePrimaryButtonHover = (buttonSelector: string): void => {
	if (prefersReducedMotion()) return;

	const button = document.querySelector(buttonSelector) as HTMLElement;
	if (!button) return;

	button.style.willChange = 'transform, box-shadow';

	button.addEventListener('mouseenter', () => {
		// Mobile : animation simplifiée sans rotation 3D
		if (isMobile()) {
			gsap.to(button, {
				scale: 1.05,
				duration: 0.3,
				ease: 'power2.out'
			});
		} else {
			gsap.to(button, {
				scale: 1.08,
				rotateX: 5,
				rotateY: -5,
				duration: 0.4,
				ease: 'power2.out'
			});
		}

		const arrow = button.querySelector('svg, .arrow');
		if (arrow) {
			gsap.to(arrow, {
				x: isMobile() ? 5 : 8,
				rotate: isMobile() ? 10 : 15,
				duration: isMobile() ? 0.3 : 0.4,
				ease: 'power2.out'
			});
		}
	});

	button.addEventListener('mouseleave', () => {
		gsap.to(button, {
			scale: 1,
			rotateX: 0,
			rotateY: 0,
			duration: 0.4,
			ease: 'power2.out'
		});

		const arrow = button.querySelector('svg, .arrow');
		if (arrow) {
			gsap.to(arrow, {
				x: 0,
				rotate: 0,
				duration: 0.4,
				ease: 'power2.out'
			});
		}
	});
};

/**
 * Animation hover du bouton secondaire (remplissage de gauche à droite avec effet 3D)
 * Cette fonction utilise CSS plutôt que GSAP pour l'effet de remplissage
 */
export const setupSecondaryButtonHover = (buttonSelector: string): void => {
	if (prefersReducedMotion()) return;

	const button = document.querySelector(buttonSelector) as HTMLElement;
	if (!button) return;

	button.style.willChange = 'transform, box-shadow';

	button.addEventListener('mouseenter', () => {
		// Mobile : animation simplifiée sans rotation 3D
		if (isMobile()) {
			gsap.to(button, {
				scale: 1.03,
				duration: 0.25,
				ease: 'power2.out'
			});
		} else {
			gsap.to(button, {
				scale: 1.05,
				rotateX: 3,
				rotateY: -3,
				duration: 0.3,
				ease: 'power2.out'
			});
		}
	});

	button.addEventListener('mouseleave', () => {
		gsap.to(button, {
			scale: 1,
			rotateX: 0,
			rotateY: 0,
			duration: 0.3,
			ease: 'power2.out'
		});
	});
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

/**
 * Animation d'entrée des sections avec stagger
 */
export const animateSectionEntry = (sectionSelector: string, staggerDelay: number = 0.15): void => {
	if (prefersReducedMotion()) return;

	const section = document.querySelector(sectionSelector);
	if (!section) return;

	const children = Array.from(section.children) as HTMLElement[];
	if (children.length === 0) return;

	children.forEach(child => {
		child.style.willChange = 'transform, opacity';
	});

	gsap.from(children, {
		y: 50,
		opacity: 0,
		duration: 0.8,
		ease: 'power3.out',
		stagger: staggerDelay,
		onComplete: () => {
			children.forEach(child => {
				child.style.willChange = 'auto';
			});
		}
	});
};

/**
 * Animation de scroll avec parallax pour les cartes
 */
export const animateCardsScroll = (cardsSelector: string): void => {
	if (prefersReducedMotion() || isMobile()) return;

	const cards = document.querySelectorAll(cardsSelector);
	if (cards.length === 0) return;

	cards.forEach((card, index) => {
		const cardElement = card as HTMLElement;
		cardElement.style.willChange = 'transform';

		gsap.to(cardElement, {
			y: -30 * (index + 1) * 0.5,
			scrollTrigger: {
				trigger: cardElement,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1
			},
			onComplete: () => {
				cardElement.style.willChange = 'auto';
			}
		});
	});
};

/**
 * Animation de révélation progressive du texte
 */
export const animateTextReveal = (textSelector: string): void => {
	if (prefersReducedMotion()) return;

	const textElement = document.querySelector(textSelector) as HTMLElement;
	if (!textElement) return;

	textElement.style.willChange = 'transform, opacity';

	gsap.from(textElement, {
		y: 40,
		opacity: 0,
		duration: 1,
		ease: 'power3.out',
		onComplete: () => {
			textElement.style.willChange = 'auto';
		}
	});
};

/**
 * Animation de transition fluide entre sections
 */
export const animateSectionTransition = (sectionsSelector: string): void => {
	if (prefersReducedMotion()) return;

	const sections = document.querySelectorAll(sectionsSelector);
	if (sections.length === 0) return;

	sections.forEach((section, index) => {
		const sectionElement = section as HTMLElement;
		sectionElement.style.willChange = 'transform, opacity';

		gsap.from(sectionElement, {
			y: 60,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: sectionElement,
				start: 'top 80%',
				end: 'top 20%',
				toggleActions: 'play none none reverse'
			},
			onComplete: () => {
				sectionElement.style.willChange = 'auto';
			}
		});
	});
};

/**
 * Animation de fade-in avec scale pour les éléments
 */
export const animateFadeInScale = (elementSelector: string): void => {
	if (prefersReducedMotion()) return;

	const element = document.querySelector(elementSelector) as HTMLElement;
	if (!element) return;

	element.style.willChange = 'transform, opacity';

	gsap.from(element, {
		scale: 0.9,
		opacity: 0,
		duration: 0.6,
		ease: 'back.out(1.2)',
		onComplete: () => {
			element.style.willChange = 'auto';
		}
	});
};
