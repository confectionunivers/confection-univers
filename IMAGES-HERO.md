# Visuels du hero — noms de fichiers et dimensions

Dossier : **`src/assets/hero/`**

## Les 3 fichiers

| Nom du fichier | Emplacement à l'écran | CADRE affiché (CSS) | RATIO du cadre |
|---|---|---|---|
| `hero-toges-graduation.jpg` | **grande** carte (colonne de gauche, pleine hauteur) | 313 × 650 px | **0,48** |
| `hero-uniformes.jpg` | petite carte (haut droite) | 256 × 313 px | **0,82** |
| `hero-tenues-travail-sport.jpg` | petite carte (bas droite) | 256 × 313 px | **0,82** |

## Dimensions à fournir

Deux stratégies, au choix.

### A. Recommandé — respecter le ratio du cadre (aucun recadrage)

L'image remplit exactement son cadre : **la totalité des pixels est utilisée**, rien n'est rogné.

| Nom du fichier | RATIO à respecter | Dimension conseillée | Version haute densité |
|---|---|---|---|
| `hero-toges-graduation.jpg` | **0,50** (1:2 portrait) | 1000 × 2000 | 1600 × 3200 |
| `hero-uniformes.jpg` | **0,80** (4:5 portrait) | 800 × 1000 | 1600 × 2000 |
| `hero-tenues-travail-sport.jpg` | **0,80** (4:5 portrait) | 800 × 1000 | 1600 × 2000 |

### B. Conserver le cadrage actuel (recadrage centré automatique)

Le navigateur rogne les côtés (pour la grande carte) ou le haut et le bas (pour les petites).

| Nom du fichier | RATIO actuel | Minimum acceptable | Idéal |
|---|---|---|---|
| `hero-toges-graduation.jpg` | 0,80 | 1000 × 1300 | **1600 × 2000** |
| `hero-uniformes.jpg` | 0,67 | 500 × 800 | **800 × 1200** |
| `hero-tenues-travail-sport.jpg` | 0,73 | 500 × 700 | **800 × 1100** |

## État actuel des fichiers

| Nom du fichier | Dimensions actuelles | Verdict |
|---|---|---|
| `hero-toges-graduation.jpg` | 1600 × 2000 | ✅ au niveau de l'idéal 3x |
| `hero-uniformes.jpg` | 1600 × 2398 | ✅ au-delà de l'idéal |
| `hero-tenues-travail-sport.jpg` | 1600 × 2190 | ✅ au-delà de l'idéal |

> Les fichiers actuels sont donc déjà suffisants. Fournir des originaux plus grands
> n'est utile que si tu as les **photos sources d'origine** (fichiers de plusieurs Mo) :
> là, le gain serait réel, alors que l'agrandissement actuel ne fait que compenser.

## Contraintes à respecter

- **Format** : `.jpg` — les noms de fichiers doivent rester **identiques**, sinon il faut aussi modifier `src/components/Hero.astro`.
- **Ratio** : si tu changes de ratio, le `object-cover` recadrera **au centre**. Garde le sujet principal au milieu de l'image.
- **Poids** : jusqu'à 500 Ko par fichier sans souci. Ces sources ne sont **jamais** téléchargées telles quelles : Astro génère des variantes WebP de 8 à 95 Ko selon la taille d'écran.
- **Aucun texte incrusté** : évite les visuels contenant du lettrage ou des logos, c'est le détail qui trahit le plus une image générée.

## Après remplacement

```bash
npm run build
```

Astro régénère automatiquement toutes les variantes (taille, format, srcset) et met à jour les attributs `width`/`height` — aucune autre manipulation n'est nécessaire.

## Revenir en arrière

Les visuels précédents sont sauvegardés dans `.hero-originaux/` (non versionné) :

```bash
cp .hero-originaux/* src/assets/hero/
```
