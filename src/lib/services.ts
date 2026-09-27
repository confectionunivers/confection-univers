export interface Service {
	title: string;
	description: string;
	image: string;
	slug: string;
	catalogueItems: string[];
}

/** Source unique des services et de leurs URL pour le site. */
export const SERVICES: Service[] = [
	{
		title: 'Toges de graduation',
		description:
			'Toges de graduation et tenues académiques personnalisées pour les universités et grandes écoles de Dakar et Thiès.',
		image: '/images/toge-graduation.jpg',
		slug: 'toges-graduation',
		catalogueItems: ['Toges de graduation', 'Tenues académiques personnalisées'],
	},
	{
		title: 'Uniformes scolaires',
		description:
			'Uniformes pour les établissements primaires, secondaires et coraniques : chemises, pantalons, jupes et autres pièces adaptées à votre établissement.',
		image: '/images/uniforme-scolaire.jpg',
		slug: 'uniformes-scolaires',
		catalogueItems: ['Uniformes scolaires', "Uniformes d'écoles coraniques", 'Chemises, pantalons et jupes'],
	},
	{
		title: 'Tenues de travail',
		description:
			'Vêtements professionnels pour les entreprises et les industries, avec des options adaptées à votre activité et à votre image.',
		image: '/images/tenue-travail.jpg',
		slug: 'tenue-travail',
		catalogueItems: ['Tenues professionnelles', 'Tenues de travail industrielles'],
	},
	{
		title: 'Kimonos',
		description:
			'Kimonos traditionnels et modernes pour les activités, les cérémonies et les événements spéciaux.',
		image: '/images/kimono.jpg',
		slug: 'kimonos',
		catalogueItems: ['Kimonos traditionnels', 'Kimonos modernes'],
	},
	{
		title: 'Blouses médicales',
		description:
			'Blouses et tenues de soin fonctionnelles pour le personnel des hôpitaux, des cliniques et des cabinets.',
		image: '/images/blouse-medicale.jpg',
		slug: 'blouses-medicales',
		catalogueItems: ['Blouses médicales', 'Blouses de laboratoire', 'Tuniques et tenues de soin'],
	},
	{
		title: "Toges d'avocat",
		description:
			'Toges et tenues juridiques confectionnées selon les besoins des professionnels du droit.',
		image: '/images/toge-avocat.jpg',
		slug: 'toges-avocat',
		catalogueItems: ["Toges d'avocat", 'Tenues juridiques'],
	},
	{
		title: 'Costumes africains',
		description:
			'Tenues traditionnelles et contemporaines, avec des options de tissus et de finitions à définir selon votre projet.',
		image: '/images/costume-africain.jpg',
		slug: 'costumes-africains',
		catalogueItems: ['Costumes africains traditionnels', 'Tenues contemporaines'],
	},
	{
		title: 'Tenues de sport',
		description:
			'Tenues et maillots personnalisables pour les clubs, les écoles et les associations sportives.',
		image: '/images/tenue-sport.jpg',
		slug: 'tenues-sport',
		catalogueItems: ["Maillots d'équipe", 'Tenues de sport personnalisées'],
	},
];
