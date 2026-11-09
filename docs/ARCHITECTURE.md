# Architecture et décisions

Complète le [README](../README.md). La spécification d'origine (`SPEC-refonte-portfolio.md`) reste la référence du contenu et du design ; ce document liste ce qui en diffère et les pièges techniques rencontrés.

## Principes

- **Deux pages, quatre URL pré-rendues.** L'accueil (une page, des ancres) et l'étude de cas NutriScope (`pages/etude-nutriscope/`, chargée en différé), chacune en `/` + `/en/`. `App` est une coque (navbar, `router-outlet`, footer). Les liens entre pages sont des `<a href>` ordinaires, jamais `routerLink` : chaque page se charge en entier, langue et SEO viennent de l'URL. Pas de `404.html` : toutes les pages existent en HTML statique. Le routeur dans le bundle navigateur coûte environ 30 kB transférés (63 → 92 kB de JS initial).
- **Textes dans les dictionnaires, structure dans les données.** Un `*.data.ts` décrit l'ordre, les liens, les logos, les chiffres. Les dictionnaires `fr.ts` / `en.ts` portent tous les textes, **indexés par identifiant** (`Record<ProjetId, …>`, `Record<EtapeId, …>`…). Les identifiants sont déclarés dans `i18n/translations.ts` ; une entrée oubliée dans une langue fait échouer la compilation.
- **Un dossier par section** dans `src/app/sections/`, avec ses données.
- **`LanguageService`** : `lang` (en lecture seule, déduite de l'URL), `t` (dictionnaire actif), `nombre()` (format selon la langue), `lien()` (préfixe les ancres en anglais), `memoriser()` (écrit le choix dans `localStorage`). Un `effect` met à jour `<html lang>` et appelle `appliquerSeo()` (`i18n/seo.ts`).
- **`OnPush` partout** (zoneless + signals).

## Pré-rendu, langue et URL

Décisions prises avec leurs compromis ; la page est statique (GitHub Pages), sans serveur Node.

| | Retenu : `/` + `/en/` pré-rendues | Écarté : langue 100 % côté client |
|---|---|---|
| SEO et partage | deux pages indexables, aperçu OG anglais pour un lien `/en/` | un seul HTML français, anglais invisible pour les robots |
| Hydratation | langue = URL, donc HTML serveur = rendu client | HTML français hydraté puis basculé : écarts possibles |
| Flash de langue | aucun (redirection dans `<head>`, avant le rendu) | flash FR → EN à chaque visite anglophone |
| Complexité | routes serveur, ancres préfixées, `langue.js` | minimale |
| GitHub Pages | `en/index.html` est servi pour `/en/` (`/en` est redirigé), aucun 404 | rien à faire |

- **Langue et page = URL.** `LANGUE_INITIALE` et `PAGE_INITIALE` lisent `PlatformLocation.pathname` (`…/en`, `…/en/`, `…/en/nutriscope[/]` → anglais ; `…/nutriscope[/]` → étude de cas). `lienLangue()` reste sur la page courante, `lienEtude()` et `ancreEtude()` rappellent le chemin de la page (une ancre nue mènerait à l'accueil à cause du `<base href>`). Le serveur et le navigateur calculent la même valeur, donc l'hydratation ne détecte aucun écart. `localStorage` n'est jamais lu par Angular.
- **Routeur côté serveur uniquement.** `app.config.server.ts` fournit `provideRouter(routes)` avec deux routes sans composant (`''` et `en`), juste pour que le builder découvre les pages à pré-rendre. Le bundle navigateur n'embarque pas le routeur et `App` n'a pas de `<router-outlet>` : le DOM est inchangé.
- **Sortie** : `outputMode: static`, sans clé `ssr` ni `server.ts` ; `index.csr.html` est un repli généré par le builder, inutilisé.
- **Redirection `public/langue.js`** : script classique, bloquant, dans `<head>` après `<base>`. Depuis la racine uniquement, il redirige vers `/en/` si le choix mémorisé est `en`, ou, sans choix, si `navigator.language` n'est pas `fr*`. Jamais pour les robots (`bot|crawl|spider|slurp|facebookexternalhit|linkedin|embedly`), jamais depuis `/en/` : un lien partagé vers `/en/` reste en anglais. Un lien partagé vers `/` s'ouvre en anglais chez un visiteur non francophone qui n'a rien choisi.
- **Sélecteur FR / EN** : deux liens (`./` et `en/`, relatifs au `<base>`), pas de bascule en place. Le clic mémorise le choix (`click` et `auxclick`), sinon `langue.js` renverrait de `/` vers `/en/`.
- **SEO** (`i18n/seo.ts`, exécuté aussi au pré-rendu) : `<title>`, description, `og:*` (dont `og:locale`, image absolue 1200×630), canonical, `hreflang` `fr` / `en` / `x-default`, JSON-LD `Person`. Le JSON-LD n'utilise que des faits du dépôt : nom, `meta.poste`, URL, photo, LinkedIn et GitHub (`LIENS`), compétences acquises (`competences.data.ts`). Ni email ni adresse. `src/index.html` ne garde que ce qui ne dépend pas de la langue (`og:type`, `twitter:card`, icônes, `theme-color`).
- **Icônes** : carré noir « NM » recadré dans `docs/sources/favicon-source.png`. Icônes `any` à coins transparents, `apple-touch-icon` plein (iOS arrondit lui-même).

## Design

- Thème DaisyUI `nathan` défini dans `src/styles.css` (couleurs, rayons, pas d'ombre). Mode sombre hors périmètre.
- Classe `conteneur` : largeur maximale 1360 px, marges latérales `px-6` (la spec indiquait 1120 px).
- Utilitaires `titre-section` (h2 serif 36 px) et `surtitre`.
- Pas d'icônes décoratives, de dégradés, d'animations ni d'emojis : le design est volontairement sobre.

## Écarts voulus avec la spec

| Sujet | Spec | Réalisé |
|---|---|---|
| Largeur des sections | `max-w-[1120px]` | `conteneur` (1360 px) |
| Hero | texte à gauche, photo à droite (composant `hero`) | grille 7/5 colonnes, photo portrait 4/5, légende « À Flines-lez-Raches, près de Lille » |
| iMSA avant / après | composant `diff` à glisser | deux blocs côte à côte (empilés sur mobile) |
| Parcours | frise verticale, du plus récent au plus ancien | frise horizontale dès 1024 px, de la plus ancienne à la plus récente, carte avec logo, liens vers `#imsa`, `#nutriscope` et les formations |
| Comment je travaille | titre seul à gauche | phrase d'introduction ajoutée, texte en 16 px, lien « Voir le stage » sur le 3e point |
| Texte secondaire | `text-base-content/60` | `/70` (le `/60` donne 4,2:1, sous les 4,5:1 exigés) |
| Photo | `photo-nathan.jpg` | `photo_nathan.webp` (original dans `docs/sources/`) et `og-image.jpg` |

Traductions anglaises ajoutées par l'implémentation, à valider : légende de la photo, introduction de « Comment je travaille », « See the programme », « See the internship », « Before » / « After ».

## Pièges DaisyUI / Tailwind

- **`.card-body p { flex-grow: 1 }`** étire tous les paragraphes d'une carte et décale les titres : `grow-0` sur le sur-titre et la description.
- **`timeline-compact`** : la colonne (vertical) ou la ligne (horizontal) réservée au côté « start » reste en `1fr`. Corrigé en forçant `--timeline-col-start` et `--timeline-row-start` sur les `li` de la liste.
- **`mockup-code`** défile horizontalement : `tabindex="0"` pour le rendre accessible au clavier.
- **Tailwind 4 n'est pas compilé par Sass** : les styles sont dans `styles.css`, pas de SCSS.

## Pièges de déploiement et de pré-rendu

- **`<base href>` et ancres.** Sous `/SiteWeb/`, `href="#imsa"` mène à `/SiteWeb/#imsa`, donc à la page française, même depuis `/SiteWeb/en/`. Tout lien interne passe par `LanguageService.lien()` (`en/#imsa` en anglais). Un test (`app.spec.ts`) refuse toute ancre nue sur la page anglaise.
- **`robots.txt` sous `/SiteWeb/`** : ignoré par les robots (voir README). Le sitemap se déclare dans la Search Console.
- **`SITE_URL`** vit dans `shared/liens.ts` et est répétée dans `robots.txt` et `sitemap.xml` ; `fichiers-indexation.spec.ts` détecte une divergence. Le manifeste est en chemins relatifs.
- **Git Bash et `--base-href`** : MSYS réécrit `/SiteWeb/` en `C:/Program Files/Git/SiteWeb/` (page blanche, aucun asset chargé). Utiliser `MSYS_NO_PATHCONV=1` ; `npm run deploy` n'est pas touché.
- **Clic avant hydratation** : un clic sur un lien de langue pendant les premières dizaines de millisecondes peut naviguer avant que le choix soit mémorisé ; depuis `/en/`, FR renverrait alors vers `/en/`. Cas limite non traité.
- **`langue.js` n'est pas haché** : GitHub Pages peut le garder en cache environ 10 minutes après un déploiement.
- **Aperçus de partage** : mis en cache par LinkedIn et consorts, à rafraîchir après un déploiement.
- **Taille** : l'hydratation et la reprise d'événements (`withEventReplay()`) ajoutent environ 47 kB à `main` (163 → 210 kB, 49 → 63 kB transférés).

## Accessibilité

Un seul `h1`, un `h2` par section, aucun saut de niveau. Contraste ≥ 4,5:1 (voir ci-dessus). Cibles tactiles ≥ 44 px sous 640 px (`.btn { min-height: 2.75rem }`). Focus visible sur les liens. `prefers-reduced-motion` désactive le défilement doux. Boutons icône avec `aria-label`, SVG décoratifs en `aria-hidden`.

## Tests

- `i18n/language.service.spec.ts` : langue déduite de l'URL, meta, canonical, hreflang, `og:*`, JSON-LD (faits du dépôt, dans chaque langue), `lien()`, mémorisation, formats de nombres.
- `i18n/langue-redirection.spec.ts` : logique de `public/langue.js` (chargé par l'option `scripts` de la cible `test`) : langue du navigateur, choix mémorisé, robots, chemins de redirection.
- `app.spec.ts` : toutes les sections se rendent, un seul `h1`, chaque lien interne a sa cible dans les deux langues, sélecteur de langue, page anglaise.
- `fichiers-indexation.spec.ts` : `robots.txt`, `sitemap.xml`, `site.webmanifest` et dimensions des icônes, alignés sur `SITE_URL`.
- `package.json` → `overrides.karma` : Karma 6 est incompatible avec `glob` 14 / `minimatch` 11, imposés globalement par ailleurs ; on lui fournit `glob` 7 et `minimatch` 3. À supprimer le jour où l'on migre vers Vitest.

## Informations à fournir ou à confirmer

- **CV** : `public/assets/CV_Nathan_Marquis.pdf` n'est pas à jour (48 tests, DUT 2025, dates du stage).
- **Liens GitHub** : Wine Quality n'a pas de lien (champ `lien?` de `projets.data.ts`).
- **URL publique** : `https://nathanmarquis-pro.github.io/SiteWeb/` (confirmée ; cohérente avec le remote `NathanMarquis-Pro/SiteWeb`). Si elle change, voir « Domaine personnalisé » dans le README.
- **Phase 2 (faite)** : page d'étude de cas NutriScope. Chiffres recopiés de `docs/data/rapport_nettoyage.md` (4 nov. 2026) et `docs/data/benchmark.md` du dépôt NutriScope, gardés cohérents par `etude-nutriscope.data.spec.ts`. À refaire à la main si le rapport est régénéré.
- **À faire** : mise à jour des jalons 4 à 7 (accueil et étude).
