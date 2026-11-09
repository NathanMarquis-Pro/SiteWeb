# Portfolio de Nathan Marquis

Site vitrine personnel : une page unique en français et en anglais, hébergée sur GitHub Pages.

🔗 https://nathanmarquis-pro.github.io/SiteWeb/

## Stack

- **Angular 20** : composants standalone, signals, zoneless, `OnPush`
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
| `npm run build` | build de production dans `dist/SiteWeb/browser` |
| `npm test` | tests en mode watch |
| `npm run test:ci` | tests une seule fois (Chrome headless) |
| `npm run deploy` | build de production avec `--base-href /SiteWeb/` puis publication sur la branche `gh-pages` |

## Structure

```
public/                  fichiers servis tels quels (favicon, CV, images)
  assets/                photo, og-image, logos (URLs en `assets/...`)
src/
  index.html             meta et Open Graph par défaut (français)
  styles.css             Tailwind, thème DaisyUI, utilitaires du site
  app/
    app.ts · app.html    empile les sections
    i18n/                LanguageService, interface Translations, dictionnaires fr.ts / en.ts
    shared/liens.ts      liens externes et chemins de fichiers partagés
    sections/<nom>/      un dossier par section : composant, template, et données (`*.data.ts`)
docs/                    spécification, maquette, ARCHITECTURE.md
```

## Modifier le contenu

- **Un texte** : modifier `src/app/i18n/fr.ts` **et** `en.ts`. Les deux dictionnaires ont la même forme (interface `Translations`) : TypeScript refuse de compiler si une langue oublie une entrée.
- **Un projet, une étape du parcours, une compétence** : modifier le fichier `*.data.ts` de la section (ordre, liens, logos, badges), puis ajouter le texte correspondant dans les dictionnaires avec le même identifiant.
- **Une image** : la placer dans `public/assets/` et la référencer par `assets/...`.
- **Une nouvelle section** : créer `src/app/sections/<nom>/` avec son composant, ajouter ses textes dans `translations.ts`, `fr.ts` et `en.ts`, puis l'ajouter à `app.ts` et `app.html`.
- **Le titre et la description de la page** : clés `meta` des dictionnaires (mises à jour à chaque changement de langue). Les valeurs françaises sont dupliquées dans `src/index.html` pour les robots qui n'exécutent pas JavaScript.

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) : décisions de conception et pièges rencontrés.
- [`docs/SPEC-refonte-portfolio.md`](docs/SPEC-refonte-portfolio.md) et [`docs/maquette-v2.html`](docs/maquette-v2.html) : spécification d'origine de la refonte.
