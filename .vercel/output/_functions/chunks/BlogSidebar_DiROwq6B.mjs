import { c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_Dq_uziaj.mjs';
/* empty css                        */

const BLOG_POSTS = [
  {
    id: "1",
    title: "Comment choisir les uniformes scolaires idéaux pour votre établissement",
    excerpt: "Découvrez les critères essentiels pour sélectionner des uniformes scolaires confortables, durables et adaptés à l'image de votre établissement.",
    content: `
			<p>Le choix des uniformes scolaires est une décision importante qui impacte non seulement l'image de votre établissement, mais aussi le confort et le bien-être des élèves. Dans cet article, nous vous guidons à travers les critères essentiels à considérer.</p>
			
			<h2>1. Le confort avant tout</h2>
			<p>Les élèves passent de longues heures en classe. Il est donc crucial de choisir des tissus respirants, doux et adaptés aux différentes saisons. Le coton de haute qualité et les mélanges polyester-coton sont souvent les meilleurs choix.</p>
			
			<h2>2. La durabilité</h2>
			<p>Les uniformes scolaires sont soumis à des lavages fréquents et à une utilisation intensive. Optez pour des tissus résistants qui conservent leur couleur et leur forme au fil du temps.</p>
			
			<h2>3. L'identité de l'établissement</h2>
			<p>Les uniformes doivent refléter les valeurs et l'identité de votre école. Les couleurs, le logo et le design doivent être cohérents avec votre charte graphique.</p>
			
			<h2>4. Le budget</h2>
			<p>Trouvez le bon équilibre entre qualité et coût. Un investissement initial plus élevé peut se révéler économique sur le long terme grâce à la durabilité des vêtements.</p>
			
			<p>Chez Confection Univers, nous vous accompagnons dans le choix des uniformes scolaires parfaits pour votre établissement, en tenant compte de tous ces critères.</p>
		`,
    image: "/images/blog-uniformes-scolaires.jpg",
    category: "Uniformes Scolaires",
    date: "15 Janvier 2025",
    author: "Marie Diop",
    slug: "choisir-uniformes-scolaires"
  },
  {
    id: "2",
    title: "Les tendances 2025 en tenues de travail professionnelles",
    excerpt: "Explorez les dernières tendances en matière de tenues professionnelles pour donner à votre entreprise une image moderne et cohérente.",
    content: `
			<p>L'année 2025 apporte son lot de nouveautés dans le monde des tenues professionnelles. Découvrez les tendances qui marquent cette année et comment les intégrer dans votre entreprise.</p>
			
			<h2>1. Le retour du classique revisité</h2>
			<p>Les classiques comme le costume noir ou la chemise blanche reviennent en force, mais avec des coupes plus modernes et des tissus plus techniques.</p>
			
			<h2>2. Les couleurs subtiles</h2>
			<p>Les tons neutres et les couleurs subtiles comme le bleu marine, le gris perle et le beige sont très prisés cette année pour leur élégance intemporelle.</p>
			
			<h2>3. Le confort au travail</h2>
			<p>Les entreprises accordent de plus en plus d'importance au confort de leurs employés. Les tissus extensibles et les coupes ajustées mais confortables sont à l'honneur.</p>
			
			<h2>4. La durabilité</h2>
			<p>La tendance éco-responsable continue de gagner du terrain. Les entreprises privilégient des tenues durables et respectueuses de l'environnement.</p>
			
			<p>Confection Univers vous propose des tenues de travail alliant tendance, confort et durabilité.</p>
		`,
    image: "/images/blog-tenues-travail.jpg",
    category: "Tenues de Travail",
    date: "10 Janvier 2025",
    author: "Jean-Pierre Ndiaye",
    slug: "tendances-2025-tenues-travail"
  },
  {
    id: "3",
    title: "L'importance des tenues médicales de qualité",
    excerpt: "Pourquoi investir dans des tenues médicales de qualité est essentiel pour le confort et la sécurité du personnel soignant.",
    content: `
			<p>Les professionnels de la santé passent de longues heures debout et sont en contact constant avec des patients. Le choix de leurs tenues médicales est donc crucial.</p>
			
			<h2>1. L'hygiène et la sécurité</h2>
			<p>Les tenues médicales doivent être faciles à nettoyer et résister aux lavages fréquents à haute température pour éliminer les bactéries.</p>
			
			<h2>2. Le confort pendant les longs services</h2>
			<p>Les tissus respirants et extensibles permettent au personnel de bouger librement et de rester confortable tout au long de leur service.</p>
			
			<h2>3. La praticité</h2>
			<p>Les poches fonctionnelles et les coupes adaptées sont essentielles pour permettre au personnel soignant d'avoir ses outils à portée de main.</p>
			
			<h2>4. L'image professionnelle</h2>
			<p>Des tenues médicales bien ajustées et de qualité contribuent à l'image professionnelle de l'établissement de santé.</p>
			
			<p>Chez Confection Univers, nous concevons des tenues médicales qui répondent à tous ces critères essentiels.</p>
		`,
    image: "/images/blog-tenues-medicales.jpg",
    category: "Médical & Santé",
    date: "5 Janvier 2025",
    author: "Dr. Fatou Sow",
    slug: "importance-tenues-medicales"
  },
  {
    id: "4",
    title: "Organiser une cérémonie de graduation réussie",
    excerpt: "Tous les éléments à prévoir pour une cérémonie de graduation mémorable, des toges académiques à l'organisation logistique.",
    content: `
			<p>Une cérémonie de graduation est un moment important dans la vie d'un étudiant. Voici comment l'organiser pour qu'elle soit inoubliable.</p>
			
			<h2>1. Les toges académiques</h2>
			<p>Le choix des toges et des accessoires académiques est crucial. Elles doivent être de qualité, confortables et respecter les traditions académiques.</p>
			
			<h2>2. La logistique</h2>
			<p>Prévoyez suffisamment de temps pour l'organisation : réservation du lieu, coordination avec les intervenants, gestion des invités.</p>
			
			<h2>3. Le programme</h2>
			<p>Un programme bien structuré avec des discours inspirants et des moments de célébration rendra la cérémonie plus mémorable.</p>
			
			<h2>4. La sécurité</h2>
			<p>Assurez-vous que tout se déroule en sécurité : gestion des foules, accès PMR, plan d'urgence.</p>
			
			<p>Confection Univers vous accompagne dans la fourniture de toges académiques de qualité pour vos cérémonies.</p>
		`,
    image: "/images/blog-graduation.jpg",
    category: "Événements & Cérémonies",
    date: "28 Décembre 2024",
    author: "Amadou Diallo",
    slug: "organiser-ceremonie-graduation"
  },
  {
    id: "5",
    title: "Conseils pour l'entretien des tenues professionnelles",
    excerpt: "Prolongez la durée de vie de vos tenues professionnelles avec ces conseils d'entretien simples et efficaces.",
    content: `
			<p>Un bon entretien permet de prolonger la durée de vie de vos tenues professionnelles et de les garder comme neuves plus longtemps.</p>
			
			<h2>1. Suivez les étiquettes</h2>
			<p>Chaque vêtement a des instructions d'entretien spécifiques. Lisez attentivement les étiquettes avant le premier lavage.</p>
			
			<h2>2. Lavez à la bonne température</h2>
			<p>Une température trop élevée peut endommager les fibres et faire déteindre les couleurs. Optez pour des lavages à basse température quand c'est possible.</p>
			
			<h2>3. Utilisez les bons produits</h2>
			<p>Choisissez des détergents doux et évitez l'eau de javel qui peut abîmer les tissus et les couleurs.</p>
			
			<h2>4. Séchez correctement</h2>
			<p>Privilégiez le séchage à l'air libre ou utilisez un sèche-linge à basse température pour éviter le rétrécissement.</p>
			
			<h2>5. Repassez avec soin</h2>
			<p>Utilisez la température appropriée pour chaque type de tissus et repassez les vêtements encore légèrement humides pour de meilleurs résultats.</p>
			
			<p>En suivant ces conseils, vos tenues professionnelles Confection Univers resteront parfaites plus longtemps.</p>
		`,
    image: "/images/blog-entretien.jpg",
    category: "Conseils & Tendances",
    date: "20 Décembre 2024",
    author: "Sophie Mendy",
    slug: "conseils-entretien-tenues"
  },
  {
    id: "6",
    title: "Personnaliser les uniformes pour renforcer l'esprit d'équipe",
    excerpt: "Découvrez comment la personnalisation des uniformes peut renforcer la cohésion et l'identité de votre équipe.",
    content: `
			<p>Les uniformes personnalisés ne sont pas seulement une question d'image, ils jouent un rôle important dans la cohésion d'équipe.</p>
			
			<h2>1. Le sentiment d'appartenance</h2>
			<p>Porter un uniforme personnalisé crée un sentiment d'appartenance à l'entreprise et renforce l'esprit d'équipe.</p>
			
			<h2>2. L'identification facile</h2>
			<p>Des uniformes personnalisés permettent aux clients et aux visiteurs d'identifier facilement les membres de votre équipe.</p>
			
			<h2>3. La cohérence de l'image</h2>
			<p>Des uniformes cohérents et personnalisés renforcent l'image professionnelle de votre entreprise.</p>
			
			<h2>4. Les options de personnalisation</h2>
			<p>Broderies, logos, couleurs personnalisées... Il existe de nombreuses façons de personnaliser vos uniformes.</p>
			
			<p>Confection Univers vous propose des solutions de personnalisation adaptées à vos besoins et à votre image.</p>
		`,
    image: "/images/blog-personnalisation.jpg",
    category: "Conseils & Tendances",
    date: "15 Décembre 2024",
    author: "Moussa Ba",
    slug: "personnaliser-uniformes-esprit-equipe"
  },
  {
    id: "7",
    title: "Toges de graduation : Tradition et excellence académique",
    excerpt: "Découvrez nos toges de graduation premium confectionnées avec soin pour les cérémonies de remise des diplômes des universités et grandes écoles.",
    content: `
			<p>Les toges de graduation sont bien plus que de simples vêtements de cérémonie. Elles symbolisent l'accomplissement académique et l'excellence. Chez Confection Univers, nous confectionnons des toges de haute qualité qui respectent les traditions académiques tout en offrant confort et élégance.</p>
			
			<h2>Qualité des tissus</h2>
			<p>Nous utilisons des tissus premium comme le polyester de haute qualité et le satin pour les bordures, garantissant une tenue impeccable et une durabilité exceptionnelle.</p>
			
			<h2>Personnalisation complète</h2>
			<p>Chaque université a ses propres couleurs et traditions. Nous personnalisons chaque toge selon les codes de votre établissement : couleurs, bordures, insignes et accessoires.</p>
			
			<h2>Confort et ajustement</h2>
			<p>Nos toges sont conçues pour être portées confortablement pendant les longues cérémonies. Différentes tailles sont disponibles pour s'adapter à tous les diplômés.</p>
			
			<h2>Livraison ponctuelle</h2>
			<p>Nous comprenons l'importance des délais pour les cérémonies de graduation. Notre équipe garantit une livraison à temps pour votre événement.</p>
			
			<p>Contactez Confection Univers pour vos toges de graduation et faites de votre cérémonie un moment inoubliable.</p>
		`,
    image: "/images/toge-graduation.jpg",
    category: "Services",
    date: "1 Janvier 2025",
    author: "Adja D. Faye",
    slug: "toges-graduation"
  },
  {
    id: "8",
    title: "Uniformes scolaires : Confort et durabilité pour les élèves",
    excerpt: "Programmes complets d'uniformes scolaires pour établissements primaires et secondaires, alliant confort, durabilité et identité.",
    content: `
			<p>Les uniformes scolaires jouent un rôle important dans la vie des élèves et l'image des établissements. Confection Univers propose des solutions complètes pour les écoles primaires, collèges et lycées du Sénégal.</p>
			
			<h2>Tissus de qualité</h2>
			<p>Nous sélectionnons des tissus respirants, résistants et confortables qui supportent les lavages fréquents tout en conservant leur couleur et leur forme.</p>
			
			<h2>Design adapté à chaque âge</h2>
			<p>Nos uniformes sont conçus pour s'adapter aux besoins spécifiques des élèves de primaire, collège et lycée, avec des coupes appropriées à chaque tranche d'âge.</p>
			
			<h2>Identité de l'établissement</h2>
			<p>Nous intégrons les couleurs, logos et éléments visuels de votre établissement pour créer des uniformes qui reflètent votre identité.</p>
			
			<h2>Options complètes</h2>
			<p>Chemises, blouses, pantalons, jupes, shorts... Nous proposons une gamme complète d'articles pour habiller tous les élèves de votre établissement.</p>
			
			<p>Faites confiance à Confection Univers pour vos uniformes scolaires et offrez à vos élèves des vêtements confortables et durables.</p>
		`,
    image: "/images/uniforme-scolaire.jpg",
    category: "Services",
    date: "2 Janvier 2025",
    author: "Adja D. Faye",
    slug: "uniformes-scolaires"
  },
  {
    id: "9",
    title: "Tenues d'entreprise : Image professionnelle et confort",
    excerpt: "Tenues de travail professionnelles pour entreprises et industries, alliant confort, durabilité et image de marque.",
    content: `
			<p>L'image de votre entreprise commence par l'apparence de vos employés. Confection Univers propose des tenues de travail professionnelles qui renforcent votre identité de marque tout en garantissant le confort de votre personnel.</p>
			
			<h2>Tissus techniques et durables</h2>
			<p>Nous utilisons des tissus adaptés aux environnements de travail : résistants, respirants et faciles d'entretien pour une utilisation quotidienne.</p>
			
			<h2>Personnalisation à votre image</h2>
			<p>Logos, couleurs, coupes... Nous personnalisons chaque tenue pour qu'elle reflète parfaitement l'identité visuelle de votre entreprise.</p>
			
			<h2>Confort optimal</h2>
			<p>Nos tenues sont conçues pour permettre une liberté de mouvement maximale, essentiel pour les employés actifs dans différents secteurs.</p>
			
			<h2>Secteurs variés</h2>
			<p>Industrie, hôtellerie, restauration, bureaux... Nous adaptons nos tenues aux besoins spécifiques de chaque secteur d'activité.</p>
			
			<p>Optez pour les tenues d'entreprise Confection Univers et donnez à votre marque une image professionnelle cohérente.</p>
		`,
    image: "/images/tenue-travail.jpg",
    category: "Services",
    date: "3 Janvier 2025",
    author: "Adja D. Faye",
    slug: "tenues-entreprise"
  },
  {
    id: "10",
    title: "Kimonos : Tradition et élégance pour vos cérémonies",
    excerpt: "Kimonos traditionnels et modernes confectionnés avec des tissus de qualité, parfaits pour cérémonies culturelles et événements spéciaux.",
    content: `
			<p>Les kimonos incarnent l'élégance et la tradition. Confection Univers propose des kimonos confectionnés avec soin pour vos cérémonies culturelles, événements spéciaux et occasions marquantes au Sénégal.</p>
			
			<h2>Tissus nobles</h2>
			<p>Nous utilisons des tissus de qualité supérieure comme le bazin, le wax et d'autres tissus traditionnels pour créer des kimonos d'exception.</p>
			
			<h2>Designs traditionnels et modernes</h2>
			<p>Que vous préfériez les coupes traditionnelles ou des designs plus contemporains, nous créons des kimonos qui répondent à vos goûts et à l'occasion.</p>
			
			<h2>Finitions impeccables</h2>
			<p>Chaque kimono est confectionné avec une attention particulière aux détails : coutures renforcées, bordures soignées, ornements délicats.</p>
			
			<h2>Personnalisation</h2>
			<p>Couleurs, motifs, broderies... Nous personnalisons chaque kimono selon vos préférences pour créer une pièce unique.</p>
			
			<p>Choisissez Confection Univers pour vos kimonos et portez une tenue qui allie tradition, qualité et élégance.</p>
		`,
    image: "/images/kimono.jpg",
    category: "Services",
    date: "4 Janvier 2025",
    author: "Adja D. Faye",
    slug: "kimonos"
  },
  {
    id: "11",
    title: "Blouses médicales : Confort et praticité pour les soignants",
    excerpt: "Blouses médicales confortables et fonctionnelles pour personnel des hôpitaux et cliniques, avec poches pratiques et tissus faciles d'entretien.",
    content: `
			<p>Les professionnels de santé méritent des tenues qui allient confort, praticité et hygiène. Confection Univers propose des blouses médicales conçues spécifiquement pour les besoins du personnel soignant.</p>
			
			<h2>Tissus hygiéniques et résistants</h2>
			<p>Nos blouses sont confectionnées dans des tissus qui résistent aux lavages fréquents à haute température, essentiels pour maintenir les normes d'hygiène.</p>
			
			<h2>Poches fonctionnelles</h2>
			<p>Nos blouses sont équipées de poches pratiques et bien placées pour permettre au personnel soignant d'avoir ses outils à portée de main.</p>
			
			<h2>Confort pendant les longs services</h2>
			<p>Les tissus respirants et les coupes ajustées permettent une liberté de mouvement optimale pour les longues heures de travail.</p>
			
			<h2>Couleurs et styles variés</h2>
			<p>Nous proposons différentes couleurs et styles pour s'adapter aux préférences de chaque établissement de santé.</p>
			
			<p>Faites confiance à Confection Univers pour vos blouses médicales et offrez à votre personnel des tenues confortables et professionnelles.</p>
		`,
    image: "/images/blouse-medicale.jpg",
    category: "Services",
    date: "5 Janvier 2025",
    author: "Adja D. Faye",
    slug: "blouses-medicales"
  },
  {
    id: "12",
    title: "Toges d'avocat : Prestige et professionnalisme juridique",
    excerpt: "Toges d'avocat et tenues juridiques conformes aux standards du barreau sénégalais, confectionnées avec précision pour professionnels du droit.",
    content: `
			<p>Les toges d'avocat symbolisent l'autorité et le professionnalisme juridique. Confection Univers confectionne des toges conformes aux standards du barreau sénégalais, avec une attention particulière aux détails et à la qualité.</p>
			
			<h2>Conformité aux standards</h2>
			<p>Nos toges respectent scrupuleusement les codes et traditions du barreau sénégalais en matière de couleurs, coupes et accessoires.</p>
			
			<h2>Tissus de qualité supérieure</h2>
			<p>Nous utilisons des tissus nobles et durables qui confèrent à chaque toge un aspect prestigieux et professionnel.</p>
			
			<h2>Finitions précises</h2>
			<p>Chaque détail compte : bordures, insignes, boutons... Nous veillons à ce que chaque élément soit parfaitement exécuté.</p>
			
			<h2>Personnalisation discrète</h2>
			<p>Si nécessaire, nous pouvons intégrer des éléments de personnalisation discrets qui respectent les traditions juridiques.</p>
			
			<p>Choisissez Confection Univers pour vos toges d'avocat et portez une tenue qui reflète votre professionnalisme et votre statut.</p>
		`,
    image: "/images/toge-avocat.jpg",
    category: "Services",
    date: "6 Janvier 2025",
    author: "Adja D. Faye",
    slug: "toges-avocat"
  },
  {
    id: "13",
    title: "Costumes africains : Patrimoine et élégance sénégalaise",
    excerpt: "Costumes africains traditionnels et contemporains inspirés du patrimoine sénégalais, utilisant tissus locaux comme bazin et wax.",
    content: `
			<p>Les costumes africains sont une célébration de notre patrimoine culturel. Confection Univers crée des costumes traditionnels et contemporains qui allient héritage sénégalais et modernité.</p>
			
			<h2>Tissus locaux authentiques</h2>
			<p>Nous utilisons des tissus sénégalais authentiques : bazin, wax, tissus locaux de qualité pour créer des costumes qui racontent notre histoire.</p>
			
			<h2>Designs traditionnels et modernes</h2>
			<p>Des coupes traditionnelles aux designs contemporains, nous proposons une gamme variée de styles pour tous les goûts et toutes les occasions.</p>
			
			<h2>Artisanat de qualité</h2>
			<p>Chaque costume est confectionné avec un savoir-faire artisanal qui garantit une qualité exceptionnelle et des finitions impeccables.</p>
			
			<h2>Personnalisation créative</h2>
			<p>Couleurs, motifs, broderies... Nous créons des costumes uniques qui reflètent votre personnalité et votre style.</p>
			
			<p>Portez l'élégance africaine avec les costumes Confection Univers, un hommage à notre riche patrimoine culturel.</p>
		`,
    image: "/images/costume-africain.jpg",
    category: "Services",
    date: "7 Janvier 2025",
    author: "Adja D. Faye",
    slug: "costumes-africains"
  },
  {
    id: "14",
    title: "Tenues de sport : Performance et confort pour les athlètes",
    excerpt: "Tenues de sport et maillots d'équipe pour clubs, écoles et associations sportives, conçus pour performance et confort.",
    content: `
			<p>La performance sportive commence par l'équipement. Confection Univers propose des tenues de sport et maillots d'équipe conçus pour optimiser le confort et la performance des athlètes.</p>
			
			<h2>Tissus techniques respirants</h2>
			<p>Nous utilisons des tissus techniques qui évacuent l'humidité et permettent une régulation thermique optimale pendant l'effort.</p>
			
			<h2>Coupes ergonomiques</h2>
			<p>Nos tenues sont conçues avec des coupes qui permettent une liberté de mouvement maximale, essentielle pour la performance sportive.</p>
			
			<h2>Personnalisation d'équipe</h2>
			<p>Logos, numéros, couleurs... Nous personnalisons chaque tenue pour qu'elle reflète l'identité de votre équipe ou de votre club.</p>
			
			<h2>Durabilité intensive</h2>
			<p>Nos tenues résistent aux lavages fréquents et à l'usure intensive liée à la pratique sportive régulière.</p>
			
			<p>Équipez vos athlètes avec les tenues de sport Confection Univers et donnez-leur les moyens de performer au meilleur de leur potentiel.</p>
		`,
    image: "/images/tenue-sport.jpg",
    category: "Services",
    date: "8 Janvier 2025",
    author: "Adja D. Faye",
    slug: "tenues-sport"
  }
];
function getPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

const $$BlogSidebar = createComponent(($$result, $$props, $$slots) => {
  const recentPosts = BLOG_POSTS.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<aside class="space-y-6" data-astro-cid-3tvqi4ux> <!-- Search Widget --> <div class="widget-card p-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] hover:border-orange-500/30" style="background: #00002a; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px;" data-astro-cid-3tvqi4ux> <h3 class="mb-4 text-lg font-extrabold tracking-tight text-white" data-astro-cid-3tvqi4ux>Rechercher</h3> <div class="relative" data-astro-cid-3tvqi4ux> <input type="text" placeholder="Rechercher un article..." class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:border-[#F5B544] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F5B544]/20" data-astro-cid-3tvqi4ux> <svg class="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-3tvqi4ux> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-3tvqi4ux></path> </svg> </div> </div> <!-- Recent Posts Widget --> <div class="widget-card p-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] hover:border-orange-500/30" style="background: #00002a; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px;" data-astro-cid-3tvqi4ux> <h3 class="mb-4 text-lg font-extrabold tracking-tight text-white" data-astro-cid-3tvqi4ux>Articles Récents</h3> <div class="space-y-4" data-astro-cid-3tvqi4ux> ${recentPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group flex gap-4 transition-all duration-300 hover:translate-x-1" data-astro-cid-3tvqi4ux> <div class="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl" data-astro-cid-3tvqi4ux> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-astro-cid-3tvqi4ux> </div> <div class="flex flex-col justify-center" data-astro-cid-3tvqi4ux> <h4 class="mb-1 text-sm font-bold leading-tight text-white group-hover:text-[#F5B544] transition-colors line-clamp-2" data-astro-cid-3tvqi4ux> ${post.title} </h4> <div class="text-xs font-semibold tracking-widest uppercase" style="color: #9CA3AF;" data-astro-cid-3tvqi4ux> ${post.date} </div> </div> </a>`)} </div> </div> <!-- Categories Widget --> <div class="widget-card p-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] hover:border-orange-500/30" style="background: #00002a; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px;" data-astro-cid-3tvqi4ux> <h3 class="mb-4 text-lg font-extrabold tracking-tight text-white" data-astro-cid-3tvqi4ux>Catégories</h3> <ul class="space-y-3" data-astro-cid-3tvqi4ux> <li data-astro-cid-3tvqi4ux> <a href="#" class="group flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 hover:bg-white/5 hover:-translate-x-1" data-astro-cid-3tvqi4ux> <span class="text-white/80 group-hover:text-white" data-astro-cid-3tvqi4ux>Uniformes Scolaires</span> <span class="text-sm font-semibold" style="color: #F5B544;" data-astro-cid-3tvqi4ux>12</span> </a> </li> <li data-astro-cid-3tvqi4ux> <a href="#" class="group flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 hover:bg-white/5 hover:-translate-x-1" data-astro-cid-3tvqi4ux> <span class="text-white/80 group-hover:text-white" data-astro-cid-3tvqi4ux>Tenues de Travail</span> <span class="text-sm font-semibold" style="color: #F5B544;" data-astro-cid-3tvqi4ux>8</span> </a> </li> <li data-astro-cid-3tvqi4ux> <a href="#" class="group flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 hover:bg-white/5 hover:-translate-x-1" data-astro-cid-3tvqi4ux> <span class="text-white/80 group-hover:text-white" data-astro-cid-3tvqi4ux>Médical & Santé</span> <span class="text-sm font-semibold" style="color: #F5B544;" data-astro-cid-3tvqi4ux>5</span> </a> </li> <li data-astro-cid-3tvqi4ux> <a href="#" class="group flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 hover:bg-white/5 hover:-translate-x-1" data-astro-cid-3tvqi4ux> <span class="text-white/80 group-hover:text-white" data-astro-cid-3tvqi4ux>Événements & Cérémonies</span> <span class="text-sm font-semibold" style="color: #F5B544;" data-astro-cid-3tvqi4ux>7</span> </a> </li> <li data-astro-cid-3tvqi4ux> <a href="#" class="group flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300 hover:bg-white/5 hover:-translate-x-1" data-astro-cid-3tvqi4ux> <span class="text-white/80 group-hover:text-white" data-astro-cid-3tvqi4ux>Conseils & Tendances</span> <span class="text-sm font-semibold" style="color: #F5B544;" data-astro-cid-3tvqi4ux>15</span> </a> </li> </ul> </div> <!-- CTA Widget --> <div class="widget-card p-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] hover:border-orange-500/30" style="background: linear-gradient(135deg, #00002a 0%, #0E172A 100%); border: 2px solid rgba(245, 181, 68, 0.3); border-radius: 24px;" data-astro-cid-3tvqi4ux> <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style="background: rgba(245, 181, 68, 0.1);" data-astro-cid-3tvqi4ux> <svg class="h-6 w-6" style="color: #F5B544;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-3tvqi4ux> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-3tvqi4ux></path> </svg> </div> <h3 class="mb-3 text-xl font-extrabold tracking-tight text-white" data-astro-cid-3tvqi4ux>Un projet de confection pour votre institution ?</h3> <p class="mb-6 text-sm leading-relaxed" style="color: #9CA3AF;" data-astro-cid-3tvqi4ux>
Obtenez un devis personnalisé pour vos tenues professionnelles en quelques clics.
</p> <a href="/contact" class="btn-hero-primary w-full justify-center" data-astro-cid-3tvqi4ux> <span data-astro-cid-3tvqi4ux>Demander un devis</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-3tvqi4ux> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-3tvqi4ux></path> </svg> </a> </div> </aside> `;
}, "C:/GitHub/confection univers/src/components/BlogSidebar.astro", void 0);

export { $$BlogSidebar as $, BLOG_POSTS as B, getPostBySlug as g };
