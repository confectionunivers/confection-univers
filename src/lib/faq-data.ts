/**
 * Questions fréquentes affichées sur la page d'accueil.
 *
 * Extraites de FAQ.astro pour pouvoir émettre un schéma `FAQPage` dont le
 * contenu correspond EXACTEMENT au texte visible : c'est la condition posée
 * par Google pour les résultats enrichis FAQ (un schéma sans équivalent
 * visible est une violation des consignes).
 */
export interface FaqItem {
	question: string;
	answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
	{
		question: 'Existe-t-il une quantité minimale de commande (MOQ) ?',
		answer:
			'Nous collaborons principalement avec les institutions et entreprises pour des productions en série. Contactez-nous via le formulaire pour étudier la faisabilité selon vos besoins spécifiques.',
	},
	{
		question: 'Quels sont vos délais moyens de confection et de livraison ?',
		answer:
			'Nos délais dépendent du volume de la commande. En moyenne, après validation du prototype, la livraison est effectuée sous 2 à 4 semaines partout au Sénégal.',
	},
	{
		question: 'Proposez-vous la personnalisation complète avec nos logos ?',
		answer:
			"Absolument. Notre atelier maîtrise les techniques de broderie haute définition, de sérigraphie et de marquage pour apposer fidèlement l'identité de votre institution sur chaque vêtement.",
	},
	{
		question: 'Livrez-vous en dehors de Dakar et Thiès ?',
		answer:
			'Oui, Confection Univers assure une expédition sécurisée et clé en main de vos commandes dans toutes les régions du Sénégal.',
	},
];
