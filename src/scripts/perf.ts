/**
 * « Mode léger » : petits écrans ou connexion contrainte (Save-Data, 2G).
 * Sur ces appareils, on coupe les effets coûteux (smooth-scroll, preloader,
 * parallaxe, animations d'apparition) pour préserver la vitesse réelle —
 * le contenu, le carrousel du hero et le formulaire restent intacts.
 * Les animations utilisant `gsap.from()`, les éléments restent visibles
 * même quand l'animation ne joue pas : aucun contenu masqué en repli.
 */
export function isLightMode(): boolean {
	if (typeof window === 'undefined') return false;
	const conn = (
		navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
	).connection;
	if (conn?.saveData === true) return true;
	if (/2g/.test(conn?.effectiveType ?? '')) return true;
	return window.matchMedia('(max-width: 767px)').matches;
}
