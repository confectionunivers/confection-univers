/**
 * Configuration Swiper pour le carrousel Coverflow vertical
 * Compatible Astro + React
 */

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

/**
 * Configuration Swiper pour l'effet Coverflow vertical
 * Utilisé dans la Hero section pour afficher les images produits
 */
export const heroSwiperConfig = {
	// Modules requis
	modules: [EffectCoverflow, Pagination, Autoplay],
	
	// Direction verticale
	direction: 'vertical' as const,
	
	// Effet Coverflow
	effect: 'coverflow' as const,
	coverflowEffect: {
		rotate: 15, // Rotation des slides
		stretch: 0, // Étirement entre slides
		depth: 200, // Profondeur de la perspective
		modifier: 1, // Modificateur de l'effet
		slideShadows: true, // Ombres sur les slides
	},
	
	// Autoplay
	autoplay: true,
	autoplayDelay: 3000, // 3 secondes entre chaque slide
	
	// Loop infini
	loop: true,
	
	// Slides centrés
	centeredSlides: true,
	
	// Nombre de slides visibles
	slidesPerView: 1, // 1 slide actif centré
	spaceBetween: 30,
	
	// Pagination verticale
	pagination: {
		clickable: true,
		dynamicBullets: true,
		// Style personnalisé géré par CSS
	},
	
	// Responsive
	breakpoints: {
		// Mobile
		0: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// Tablet
		768: {
			slidesPerView: 1.5,
			spaceBetween: 30,
		},
		// Desktop
		1024: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	},
	
	// Performance
	speed: 600,
	grabCursor: true,
	watchSlidesProgress: true,
	preventInteractionOnTransition: false,
	
	// Accessibilité
	a11y: {
		enabled: true,
		paginationBulletMessage: 'Aller à la slide {{index}}',
	},
	
	// Lazy loading
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 2,
	},
	
	// Désactiver sur mobile si nécessaire
	// Géré par CSS media queries
};

/**
 * Configuration alternative pour un Swiper horizontal (si besoin)
 */
export const horizontalSwiperConfig = {
	modules: [EffectCoverflow, Pagination, Autoplay],
	direction: 'horizontal' as const,
	effect: 'coverflow' as const,
	coverflowEffect: {
		rotate: 15,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows: true,
	},
	autoplay: true,
	autoplayDelay: 3000,
	loop: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 30,
	pagination: {
		clickable: true,
	},
	speed: 600,
	grabCursor: true,
};

/**
 * Styles CSS personnalisés pour la pagination verticale
 * À inclure dans le fichier de styles du composant
 */
export const swiperPaginationStyles = `
	/* Pagination verticale à droite */
	.swiper-pagination {
		right: 20px !important;
		left: auto !important;
		top: 50% !important;
		bottom: auto !important;
		transform: translateY(-50%) !important;
		width: auto !important;
		height: auto !important;
	}

	/* Dots de pagination */
	.swiper-pagination-bullet {
		width: 10px !important;
		height: 10px !important;
		background: rgba(250, 204, 107, 0.3) !important;
		opacity: 1 !important;
		margin: 8px 0 !important;
		transition: all 0.3s ease !important;
	}

	/* Dot actif en jaune */
	.swiper-pagination-bullet-active {
		background: #FACC6B !important;
		width: 12px !important;
		height: 12px !important;
		box-shadow: 0 0 10px rgba(250, 204, 107, 0.5) !important;
	}

	/* Pagination horizontale (fallback) */
	@media (max-width: 768px) {
		.swiper-pagination {
			right: auto !important;
			left: 50% !important;
			top: auto !important;
			bottom: 20px !important;
			transform: translateX(-50%) !important;
			flex-direction: row !important;
		}

		.swiper-pagination-bullet {
			margin: 0 6px !important;
		}
	}
`;
