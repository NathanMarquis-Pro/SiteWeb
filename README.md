# Portfolio de Nathan Marquis

Site vitrine personnel : une page unique en français et en anglais, hébergée sur GitHub Pages.

🔗 https://nathanmarquis-pro.github.io/SiteWeb/

## Stack

- **Angular 20** : composants standalone, signals, zoneless, `OnPush`
- **Pré-rendu statique** (`@angular/ssr`, sans serveur Node) : le build génère `index.html` (français) et `en/index.html` (anglais) avec le contenu complet, les meta, Open Graph et JSON-LD
- **Tailwind CSS 4 + DaisyUI 5** : thème personnalisé `nathan` (voir `src/styles.css`)
- **Tests** : Karma + Jasmine
- **Déploiement** : `angular-cli-ghpages`

## Démarrer

```bash
npm install
npm start          # http://localhost:4200
```

| Commande | Rôle |
|---|---|
| `npm start` | serveur de développement |
| `npm run build` | build de production dans `dist/SiteWeb/browser` (inclut le pré-rendu des deux langues) |
| `npm test` | tests en mode watch |
| `npm run test:ci` | tests une seule fois (Chrome headless) |
| `npm run deploy` | build de production avec `--base-href /SiteWeb/` puis publication sur la branche `gh-pages` |

Dans Git Bash sous Windows, `ng build --base-href /SiteWeb/` lancé à la main est faussé : MSYS convertit `/SiteWeb/` en chemin Windows (`C:/Program Files/Git/SiteWeb/`) et la page reste blanche. Préfixer la commande par `MSYS_NO_PATHCONV=1` (`npm run deploy` n'est pas concerné).

### Tester le build tel qu'il sera publié

Le site est servi sous `/SiteWeb/` : le servir depuis un dossier parent.

```bash
MSYS_NO_PATHCONV=1 npx ng build --configuration production --base-href /SiteWeb/
mkdir -p /tmp/essai && cp -r dist/SiteWeb/browser /tmp/essai/SiteWeb
cd /tmp/essai && python -m http.server 8100     # http://localhost:8100/SiteWeb/ et /SiteWeb/en/
```

## Structure

```
public/                  fichiers servis tels quels
  favicon.ico · icon-192.png · icon-512.png · apple-touch-icon.png · site.webmanifest
  robots.txt · sitemap.xml
  langue.js              redirection `/` → `/en/` selon la langue du navigateur (avant le rendu)
  assets/                photo, og-image, CV, logos (URLs en `assets/...`)
src/
  index.html             coquille : base, langue.js, icônes, theme-color (le reste du <head> est généré)
  main.ts · main.server.ts   démarrage navigateur / pré-rendu
  styles.css             Tailwind, thème DaisyUI, utilitaires du site
  app/
    app.ts · app.html    empile les sections
    app.routes.ts · app.routes.server.ts · app.config.server.ts   routes `/`, `/en`, `/nutriscope`, `/en/nutriscope`, pré-rendues
    i18n/                LanguageService, seo.ts (meta, canonical, hreflang, JSON-LD), interface Translations, dictionnaires fr.ts / en.ts
    shared/liens.ts      liens externes et chemins de fichiers partagés
    sections/<nom>/      un dossier par section : composant, template, et données (`*.data.ts`)
docs/                    spécification, maquette, ARCHITECTURE.md
  sources/               originaux des images (photo, monogramme « NM » dont les icônes sont tirées)
```

## Modifier le contenu

- **Un texte** : modifier `src/app/i18n/fr.ts` **et** `en.ts`. Les deux dictionnaires ont la même forme (interface `Translations`) : TypeScript refuse de compiler si une langue oublie une entrée.
- **Un projet, une étape du parcours, une compétence** : modifier le fichier `*.data.ts` de la section (ordre, liens, logos, badges), puis ajouter le texte correspondant dans les dictionnaires avec le même identifiant.
- **Une image** : la placer dans `public/assets/` et la référencer par `assets/...`.
- **Une nouvelle section** : créer `src/app/sections/<nom>/` avec son composant, ajouter ses textes dans `translations.ts`, `fr.ts` et `en.ts`, puis l'ajouter à `app.ts` et `app.html`.
- **Le titre, la description, l'intitulé de poste** : clés `meta` des dictionnaires. Ils alimentent `<title>`, la description, Open Graph et le JSON-LD, dans le HTML pré-rendu de chaque langue. Plus rien n'est dupliqué dans `src/index.html`.
- **L'URL du site** : `SITE_URL` dans `src/app/shared/liens.ts`. Elle est répétée à la main dans `public/robots.txt`, `public/sitemap.xml` (un test, `fichiers-indexation.spec.ts`, échoue si elles divergent). Le manifeste, lui, est en chemins relatifs.
- **Les icônes** : à régénérer depuis `docs/sources/favicon-source.png` (recadrage sur le carré noir, puis réduction à 16/32/48, 180, 192 et 512 px).

## Langues et URL

Une URL = une langue : `/` est en français, `/en/` en anglais, toutes deux pré-rendues et liées par `hreflang` (`x-default` = `/`). Le sélecteur FR / EN est un vrai lien. `public/langue.js` redirige `/` vers `/en/` si le visiteur a choisi l'anglais, ou, sans choix, si `navigator.language` n'est pas français ; il ne redirige jamais les robots ni `/en/`. Le choix est mémorisé dans `localStorage` (clé `langue`) au clic sur FR / EN.

## Référencement (GitHub Pages)

- **robots.txt** : sur un domaine `github.io`, les robots ne lisent que `https://nathanmarquis-pro.github.io/robots.txt`, fichier du dépôt `NathanMarquis-Pro.github.io`. Celui de `public/` (servi sous `/SiteWeb/`) est donc **sans effet** tant qu'il n'y a pas de domaine personnalisé ; il est livré pour ce jour-là.
- **Sitemap** : le déclarer dans la [Search Console](https://search.google.com/search-console) : ajouter une propriété « préfixe d'URL » `https://nathanmarquis-pro.github.io/SiteWeb/`, puis soumettre `sitemap.xml`.
- **Aperçus de partage** : LinkedIn et d'autres gardent l'aperçu en cache ; après un déploiement, le rafraîchir avec le [Post Inspector](https://www.linkedin.com/post-inspector/).
- **Domaine personnalisé** : passer `--base-href` à `/` dans `npm run deploy`, changer `SITE_URL`, `robots.txt` et `sitemap.xml`, ajouter un fichier `CNAME` dans `public/`.

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) : décisions de conception et pièges rencontrés.
- [`docs/SPEC-refonte-portfolio.md`](docs/SPEC-refonte-portfolio.md) et [`docs/maquette-v2.html`](docs/maquette-v2.html) : spécification d'origine de la refonte.
