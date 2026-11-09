# Architecture et décisions

Complète le [README](../README.md). La spécification d'origine (`SPEC-refonte-portfolio.md`) reste la référence du contenu et du design ; ce document liste ce qui en diffère et les pièges techniques rencontrés.

## Principes

- **Une page, des ancres.** Pas de routeur. S'il faut une page d'étude de cas NutriScope (phase 2), ajouter `@angular/router` à ce moment-là, avec un `404.html` de repli pour GitHub Pages.
- **Textes dans les dictionnaires, structure dans les données.** Un `*.data.ts` décrit l'ordre, les liens, les logos, les chiffres. Les dictionnaires `fr.ts` / `en.ts` portent tous les textes, **indexés par identifiant** (`Record<ProjetId, …>`, `Record<EtapeId, …>`…). Les identifiants sont déclarés dans `i18n/translations.ts` ; une entrée oubliée dans une langue fait échouer la compilation.
- **Un dossier par section** dans `src/app/sections/`, avec ses données.
- **`LanguageService`** : signal `lang` (mémorisé dans `localStorage`, français par défaut), `t` (dictionnaire actif), `nombre()` (format selon la langue). Un `effect` met à jour `<html lang>`, le `<title>`, la meta description et `og:title` / `og:description`.
- **`OnPush` partout** (zoneless + signals).

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

## Accessibilité

Un seul `h1`, un `h2` par section, aucun saut de niveau. Contraste ≥ 4,5:1 (voir ci-dessus). Cibles tactiles ≥ 44 px sous 640 px (`.btn { min-height: 2.75rem }`). Focus visible sur les liens. `prefers-reduced-motion` désactive le défilement doux. Boutons icône avec `aria-label`, SVG décoratifs en `aria-hidden`.

## Tests

- `i18n/language.service.spec.ts` : langue par défaut, bascule, persistance, formats de nombres, meta.
- `app.spec.ts` : toutes les sections se rendent, un seul `h1`, chaque lien `#ancre` a sa cible, passage en anglais.
- `package.json` → `overrides.karma` : Karma 6 est incompatible avec `glob` 14 / `minimatch` 11, imposés globalement par ailleurs ; on lui fournit `glob` 7 et `minimatch` 3. À supprimer le jour où l'on migre vers Vitest.

## Informations à fournir ou à confirmer

- **CV** : `public/assets/CV_Nathan_Marquis.pdf` n'est pas à jour (48 tests, DUT 2025, dates du stage).
- **Liens GitHub** : Wine Quality n'a pas de lien (champ `lien?` de `projets.data.ts`).
- **`og:url` / `og:image`** (`src/index.html`) : déduits du nom du dépôt (`nathanmarquis-pro.github.io/SiteWeb`) ; à confirmer.
- **Phase 2** : page d'étude de cas NutriScope ; mise à jour des jalons 4 à 7.
