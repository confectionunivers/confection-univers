import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
	const dotRef = useRef<HTMLDivElement>(null);
	const circleRef = useRef<HTMLDivElement>(null);
	const [cursorText, setCursorText] = useState('');
	const [isHovered, setIsHovered] = useState(false);
	const [isTextMode, setIsTextMode] = useState(false);

	useEffect(() => {
		// Disable on touch devices
		if ('ontouchstart' in window) {
			return;
		}

		// Respect prefers-reduced-motion
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		const dot = dotRef.current;
		const circle = circleRef.current;

		if (!dot || !circle) return;

		// GSAP quickTo for high performance
		const xTo = gsap.quickTo(circle, 'x', { duration: 0.6, ease: 'power3.out' });
		const yTo = gsap.quickTo(circle, 'y', { duration: 0.6, ease: 'power3.out' });
		const xDotTo = gsap.quickTo(dot, 'x', { duration: 0.1 });
		const yDotTo = gsap.quickTo(dot, 'y', { duration: 0.1 });

		// Mouse move handler
		const handleMouseMove = (e: MouseEvent) => {
			xTo(e.clientX - 20); // -20 to center (half of 40px)
			yTo(e.clientY - 20);
			xDotTo(e.clientX - 4); // -4 to center (half of 8px)
			yDotTo(e.clientY - 4);
		};

		// Hover effect handler
		const handleMouseEnter = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			
			// Check for cursor text
			const cursorText = target.getAttribute('data-cursor-text');
			if (cursorText) {
				setCursorText(cursorText);
				setIsTextMode(true);
				gsap.to(circle, {
					scale: 3,
					background: '#f5a623',
					borderColor: '#f5a623',
					duration: 0.3,
					ease: 'power2.out'
				});
				gsap.to(dot, {
					scale: 0,
					opacity: 0,
					duration: 0.3,
					ease: 'power2.out'
				});
				return;
			}

			// Check for hover elements
			if (
				target.tagName === 'A' ||
				target.tagName === 'BUTTON' ||
				target.classList.contains('cta') ||
				target.classList.contains('cta-button-primary') ||
				target.classList.contains('cta-button-secondary') ||
				target.hasAttribute('data-cursor-hover')
			) {
				setIsHovered(true);
				gsap.to(circle, {
					scale: 2.5,
					duration: 0.3,
					ease: 'power2.out'
				});
				gsap.to(dot, {
					scale: 0,
					opacity: 0,
					duration: 0.3,
					ease: 'power2.out'
				});
			}
		};

		const handleMouseLeave = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			
			// Reset from text mode
			if (target.getAttribute('data-cursor-text')) {
				setCursorText('');
				setIsTextMode(false);
				gsap.to(circle, {
					scale: 1,
					background: 'transparent',
					borderColor: '#f5a623',
					duration: 0.3,
					ease: 'power2.out'
				});
				gsap.to(dot, {
					scale: 1,
					opacity: 1,
					duration: 0.3,
					ease: 'power2.out'
				});
				return;
			}

			// Reset from hover
			if (
				target.tagName === 'A' ||
				target.tagName === 'BUTTON' ||
				target.classList.contains('cta') ||
				target.classList.contains('cta-button-primary') ||
				target.classList.contains('cta-button-secondary') ||
				target.hasAttribute('data-cursor-hover')
			) {
				setIsHovered(false);
				gsap.to(circle, {
					scale: 1,
					duration: 0.3,
					ease: 'power2.out'
				});
				gsap.to(dot, {
					scale: 1,
					opacity: 1,
					duration: 0.3,
					ease: 'power2.out'
				});
			}
		};

		// Magnetic effect for CTA buttons
		const handleMagneticHover = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			
			if (
				target.classList.contains('cta-button-primary') ||
				target.classList.contains('cta-button-secondary') ||
				target.hasAttribute('data-magnetic')
			) {
				const rect = target.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				
				const mouseX = e.clientX;
				const mouseY = e.clientY;
				
				const distanceX = mouseX - centerX;
				const distanceY = mouseY - centerY;
				
				// 30% attraction force
				const moveX = distanceX * 0.3;
				const moveY = distanceY * 0.3;
				
				gsap.to(target, {
					x: moveX,
					y: moveY,
					duration: 0.4,
					ease: 'power3.out'
				});
			}
		};

		const handleMagneticLeave = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			
			if (
				target.classList.contains('cta-button-primary') ||
				target.classList.contains('cta-button-secondary') ||
				target.hasAttribute('data-magnetic')
			) {
				gsap.to(target, {
					x: 0,
					y: 0,
					duration: 0.4,
					ease: 'power3.out'
				});
			}
		};

		// Click effect
		const handleMouseDown = () => {
			gsap.to(circle, {
				scale: 0.8,
				duration: 0.1,
				ease: 'power2.out'
			});
		};

		const handleMouseUp = () => {
			gsap.to(circle, {
				scale: isTextMode ? 3 : (isHovered ? 2.5 : 1),
				duration: 0.3,
				ease: 'power2.out'
			});
		};

		// Window enter/leave
		const handleWindowLeave = () => {
			gsap.to([dot, circle], {
				opacity: 0,
				duration: 0.3,
				ease: 'power2.out'
			});
		};

		const handleWindowEnter = () => {
			gsap.to([dot, circle], {
				opacity: 1,
				duration: 0.3,
				ease: 'power2.out'
			});
		};

		// Add event listeners
		window.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseover', handleMouseEnter);
		document.addEventListener('mouseout', handleMouseLeave);
		document.addEventListener('mouseover', handleMagneticHover);
		document.addEventListener('mouseout', handleMagneticLeave);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mouseleave', handleWindowLeave);
		document.addEventListener('mouseenter', handleWindowEnter);

		// Cleanup
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseover', handleMouseEnter);
			document.removeEventListener('mouseout', handleMouseLeave);
			document.removeEventListener('mouseover', handleMagneticHover);
			document.removeEventListener('mouseout', handleMagneticLeave);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mouseleave', handleWindowLeave);
			document.removeEventListener('mouseenter', handleWindowEnter);
		};
	}, [isHovered, isTextMode]);

	// Don't render on touch devices
	if ('ontouchstart' in window) {
		return null;
	}

	return (
		<>
			<div ref={dotRef} className="cursor-dot" />
			<div ref={circleRef} className="cursor-circle">
				{cursorText && <span className="cursor-text">{cursorText}</span>}
			</div>
		</>
	);
}
