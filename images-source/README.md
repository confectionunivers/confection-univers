# 📥 Dossier de dépôt des images

Dépose ici **une seule photo par gamme**, puis lance :

```bash
npm install          # une seule fois
npm run images:prepare
```

Le script génère automatiquement **toutes les variantes** aux bonnes dimensions
et les écrit dans `public/images/catalogue/`.

## Ce que tu dois déposer : 10 fichiers

Nomme tes photos exactement comme ceci (`.jpg`, `.jpeg` ou `.png` — peu importe) :

| Fichier à déposer | Ce que ça produit |
|---|---|
| `tenues-scolaires.jpg` | 640×480 + 1280×960 + 1000×750 |
| `tenues-professionnelles.jpg` | 640×480 + 1280×960 + 1000×750 |
| `tenues-medicales.jpg` | 640×480 + 1280×960 + 1000×750 |
| `tenues-sportives.jpg` | 640×480 + 1280×960 + 1000×750 |
| `tenues-academiques.jpg` | 640×480 + 1280×960 + 1000×750 |
| `arts-martiaux.jpg` | 640×480 + 1280×960 + 1000×750 |
| `ecoles-coraniques.jpg` | 640×480 + 1280×960 + 1000×750 |
| `toges-avocat.jpg` | 640×480 + 1280×960 + 1000×750 |
| `tenues-africaines.jpg` | 640×480 + 1280×960 + 1000×750 |
| `manufacture-hero.jpg` | 1280×720 + 1600×900 (bandeau d'en-tête) |

Les 4 visuels d'ambiance (section « personnalisation » et « production ») sont
**recadrés automatiquement** depuis ces 10 photos — tu n'as rien à fournir.

## Exemple

Tu as `IMG_4521.jpg`, une photo de tes uniformes scolaires en 3024×4032 :

1. Renomme-la `tenues-scolaires.jpg`
2. Copie-la dans ce dossier
3. `npm run images:prepare`

→ 3 fichiers sont créés : `tenues-scolaires-640.webp`, `tenues-scolaires-1280.webp`
et `tenues-scolaires-detail.webp`. Le site les affiche immédiatement.

## Bon à savoir

- **Recadrage centré** : les photos sont rognées au centre pour atteindre le bon
  format. Garde le sujet principal au milieu de l'image.
- **Fournis la plus grande résolution possible** (au moins 1280 px de large).
  Si ta photo est plus petite que la cible, le script le signale et l'image sera
  agrandie, donc floue.
- **Format de sortie** : WebP, ~30 % plus léger que le JPEG à qualité égale, et
  surtout **aucune ligne de code à modifier**.
  (Pour du JPEG : `npm run images:prepare -- --jpg`, mais il faut alors adapter le code.)
- Les masters déposés ici ne sont **pas** versionnés par Git (voir `.gitignore`) :
  ce sont des fichiers de travail. Les images finales, elles, sont bien dans Git.

## Options

```bash
npm run images:prepare -- --quality=90    # qualité d'encodage
npm run images:prepare -- --src=mes-photos   # autre dossier source
npm run images:prepare -- --jpg           # sortie JPEG
```
