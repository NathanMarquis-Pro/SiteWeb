# Spécification — refonte du portfolio de Nathan Marquis (Angular + DaisyUI 5)

> Document destiné à Claude Code. Il décrit la page d'accueil validée (maquette « V2 » du 09/11/2026) section par section, avec les composants DaisyUI à utiliser, le thème, la structure Angular et tous les textes en français et en anglais.
> **Règle d'or : ne pas « embellir ».** Le design a été volontairement épuré pour ne pas ressembler à un site généré par IA. Ne pas ajouter d'icônes décoratives, de dégradés, d'emojis, de petits labels en majuscules au-dessus des titres, d'animations d'apparition, ni de cartes supplémentaires. Les textes sont écrits par Nathan : les reprendre **mot pour mot**.

---

## 0. Avant de commencer

1. Lire la structure actuelle du projet Angular (version d'Angular, composants existants, routing, assets, déploiement GitHub Pages).
2. Travailler sur une branche dédiée, par exemple `refonte-v2`.
3. Ne supprimer aucun asset (logos, CV, images) sans le signaler. Les anciennes sections (projets Ubivoit, Catacombes, FlyingDustries, liste de compétences avec logos) sont **retirées de la page**, pas forcément du dépôt.
4. Avancer étape par étape (voir section 6) et vérifier le rendu dans le navigateur après chaque étape, à 1440 px et à 390 px de large.

---

## 1. Installation : Tailwind CSS 4 + DaisyUI 5

```bash
npm install tailwindcss @tailwindcss/postcss postcss daisyui@latest
```

Fichier `.postcssrc.json` à la racine :

```json
{ "plugins": { "@tailwindcss/postcss": {} } }
```

Dans `src/styles.css` (remplacer `styles.scss` si besoin, ou garder le SCSS pour le reste et importer ce CSS) :

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: false;
}

@plugin "daisyui/theme" {
  name: "nathan";
  default: true;
  prefersdark: false;
  color-scheme: light;

  --color-base-100: #FFFFFF;
  --color-base-200: #F6F5F1;
  --color-base-300: #E7E4DC;
  --color-base-content: #1E2230;

  --color-primary: #14213D;
  --color-primary-content: #FFFFFF;
  --color-secondary: #555B6B;
  --color-secondary-content: #FFFFFF;
  --color-accent: #2E7D57;
  --color-accent-content: #FFFFFF;
  --color-neutral: #2A2F3D;
  --color-neutral-content: #E6E8EE;

  --color-info: #2F5D8C;
  --color-info-content: #FFFFFF;
  --color-success: #2E7D57;
  --color-success-content: #FFFFFF;
  --color-warning: #F2C66D;
  --color-warning-content: #1E2230;
  --color-error: #B4413A;
  --color-error-content: #FFFFFF;

  --radius-selector: 2rem;   /* badges, toggles : forme « pilule » */
  --radius-field: 0.5rem;    /* boutons */
  --radius-box: 0.75rem;     /* cartes, stats, alert, mockup */
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 0;                /* pas d'ombres ni d'effet 3D */
  --noise: 0;
}

@theme {
  --font-serif: "DM Serif Display", Georgia, serif;
  --font-sans: "DM Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

html { scroll-behavior: smooth; }
```

Dans `src/index.html` :
- `<html lang="fr" data-theme="nathan">` (la langue est ensuite mise à jour par le service de langue) ;
- les polices Google Fonts :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400&display=swap">
```

Typographie :
- **Titres h1 / h2** : `font-serif font-normal text-primary` (DM Serif Display, jamais en gras).
- **Texte courant** : `font-sans` (par défaut sur `body`), paragraphes en `text-base-content/80`.
- **Mono** : uniquement dans les blocs de code.

---

## 2. Architecture Angular

Composants standalone, un par section, dans `src/app/sections/` :

| Composant | Ancre | Rôle |
|---|---|---|
| `NavbarComponent` | — | en-tête fixe, liens, langue, contact |
| `HeroComponent` | `#haut` | présentation |
| `NutriscopeComponent` | `#nutriscope` | projet du moment |
| `ImsaComponent` | `#imsa` | stage, avant / après |
| `MethodeComponent` | `#methode` | comment je travaille |
| `ProjetsComponent` | `#projets` | autres projets |
| `ParcoursComponent` | `#parcours` | formation et expérience |
| `CompetencesComponent` | `#competences` | technos |
| `HorsCodeComponent` | `#hors-code` | sport |
| `FooterComponent` | `#contact` | contact |

`AppComponent` les empile dans cet ordre, à l'intérieur de `<main>` (sauf navbar et footer).

**Données** dans `src/app/data/` (fichiers TypeScript typés, aucun texte en dur dans les templates) :
- `projets.ts`, `parcours.ts`, `competences.ts`, `nutriscope.ts`, `liens.ts`.

**Langue FR / EN** : pas d'Angular i18n (il oblige à construire un site par langue, compliqué sur GitHub Pages). À la place :
- `LanguageService` avec un `signal<'fr' | 'en'>`, valeur initiale lue dans `localStorage` (dans un `try/catch`), sinon `'fr'` ;
- deux dictionnaires `src/app/i18n/fr.ts` et `en.ts` de même forme (interface `Translations`) ;
- un `computed` qui renvoie le dictionnaire actif ; les composants lisent `t().hero.titre1`, etc. ;
- au changement de langue : mettre à jour `document.documentElement.lang` et le `<title>`.

Toutes les sections doivent avoir `scroll-mt-20` pour ne pas passer sous la navbar fixe.

Conteneur commun à chaque section : `<div class="mx-auto max-w-[1120px] px-6">`. Espacement vertical : `py-20` (80 px), `py-16` pour les petites sections.

---

## 3. Sections

### 3.1 Navbar

**Composants DaisyUI** : `navbar`, `menu menu-horizontal`, `dropdown`, `join`, `btn`.

```html
<header class="sticky top-0 z-50 border-b border-base-300 bg-base-100">
  <nav class="navbar mx-auto max-w-[1120px] px-6">
    <div class="navbar-start"><a href="#haut" class="text-lg font-medium">Nathan Marquis</a></div>
    <div class="navbar-end gap-2">
      <ul class="menu menu-horizontal hidden lg:flex"> <!-- 4 liens --> </ul>
      <div class="join" role="group" [attr.aria-label]="t().nav.langue">
        <button class="btn btn-xs join-item" [class.btn-primary]="lang()==='fr'" [attr.aria-pressed]="lang()==='fr'">FR</button>
        <button class="btn btn-xs join-item" [class.btn-primary]="lang()==='en'" [attr.aria-pressed]="lang()==='en'">EN</button>
      </div>
      <a href="#contact" class="btn btn-primary btn-sm hidden sm:inline-flex">…</a>
      <!-- mobile -->
      <div class="dropdown dropdown-end lg:hidden">
        <button class="btn btn-ghost btn-square" [attr.aria-label]="t().nav.ouvrirMenu"> <!-- icône 3 traits --> </button>
        <ul class="menu dropdown-content bg-base-100 rounded-box border border-base-300 w-56 p-2"> <!-- liens + Me contacter --> </ul>
      </div>
    </div>
  </nav>
</header>
```

| Clé | FR | EN |
|---|---|---|
| liens | NutriScope · Stage iMSA · Projets · Parcours | NutriScope · iMSA internship · Projects · Background |
| bouton | Me contacter | Contact me |
| aria langue | Langue | Language |
| aria menu | Ouvrir le menu | Open menu |

### 3.2 Hero

**Composants** : `hero`, `hero-content`, `badge` + `status`, `avatar`, `btn`.

Disposition : texte à gauche, photo à droite sur desktop ; photo au-dessus sur mobile (`flex-col-reverse lg:flex-row`). Padding `pt-18 pb-20`.

- Pastille de disponibilité : `<span class="badge badge-outline badge-lg gap-2 font-normal"><span class="status status-success" aria-hidden="true"></span>…</span>`
- Ligne d'identité : `<p class="text-lg text-base-content/80">`
- Titre `h1` : `font-serif text-primary text-[clamp(44px,6vw,72px)] leading-[1.04]`, deux lignes, la seconde en `<em class="text-secondary">`.
- Deux paragraphes `text-lg text-base-content/80 max-w-[580px]`.
- Boutons : `btn btn-primary` (lien `#nutriscope`) et `btn btn-ghost` avec icône de téléchargement (lien vers le CV PDF, attribut `download`).
- Photo : `<div class="avatar"><div class="w-72 rounded-box"><img src="assets/photo-nathan.jpg" alt="Nathan Marquis"></div></div>`. **Asset à fournir par Nathan** ; en attendant, garder un bloc gris avec la mention « Photo à venir ».

| Clé | FR | EN |
|---|---|---|
| dispo | Disponible : stage du 18 janvier au 26 février 2027, puis CDI dès mars | Available: internship from 18 January to 26 February 2027, then a permanent role from March |
| identité | Nathan Marquis, développeur IA | Nathan Marquis, AI developer |
| titre ligne 1 | Vos données, | Your data, |
| titre ligne 2 | mes futures missions | my future missions |
| paragraphe 1 | Je veux être développeur depuis le collège et mes premiers scripts sur Scratch. Aujourd'hui, je me forme au développement IA chez M2i (titre RNCP niveau 6, en mars 2027). | I've wanted to be a developer since secondary school, when I wrote my first scripts in Scratch. Today I'm training as an AI developer at M2i (French level 6 professional qualification, March 2027). |
| paragraphe 2 | Tout le monde dit que l'IA va remplacer le travail. J'ai préféré aller vérifier par moi-même, et apprendre à m'en servir. | Everyone says AI is going to replace jobs. I'd rather check for myself, and learn how to use it. |
| bouton 1 | Voir mon projet en cours | See my current project |
| bouton 2 | Télécharger mon CV | Download my CV |

### 3.3 NutriScope

Fond `bg-base-200`, bordures haut et bas `border-y border-base-300`.

**Composants** : `steps`, `stats`, `mockup-code`, `alert alert-soft`, `btn btn-outline`, `btn btn-ghost`.

1. **En-tête** : sur-titre `<p class="text-base-content/60">` + `h2` serif `text-[clamp(34px,4.4vw,52px)]` + paragraphe `text-lg max-w-[720px]`.
2. **Jalons** : `<ul class="steps steps-vertical md:steps-horizontal w-full mt-10">`, 7 `<li class="step">`, les 3 premiers avec `step-primary`. Pour les jalons livrés, ajouter la date sous le libellé (`<span class="block text-xs opacity-60">`).
3. **Deux colonnes** (`grid lg:grid-cols-2 gap-10 mt-16`) :
   - à gauche : `h3` (`text-2xl font-semibold text-primary`), 3 paragraphes, puis `<div role="note" class="alert alert-soft alert-success">` avec une icône « i » et le texte ;
   - à droite :
     - `<div class="stats stats-vertical sm:stats-horizontal w-full bg-base-100 border border-base-300">` avec 3 `stat` (`stat-title`, `stat-value text-primary text-3xl`, `stat-desc`) ;
     - `<figure>` contenant le `mockup-code` (code ci-dessous) et une `figcaption text-sm text-base-content/60`.
4. **Boutons** : `btn btn-outline btn-primary` (étude de cas) et `btn btn-ghost` (GitHub).
   - L'étude de cas n'existe pas encore : **phase 2**. En attendant, le bouton pointe vers le dépôt GitHub de NutriScope s'il est public, sinon il est masqué (`@if`).

Code du `mockup-code` (extrait réel de `cleaning.py`, ne pas le modifier) :

```html
<div class="mockup-code w-full text-sm">
  <pre data-prefix="1"><code>match decision:</code></pre>
  <pre data-prefix="2"><code>    case "keep":</code></pre>
  <pre data-prefix="3"><code>        continue</code></pre>
  <pre data-prefix="4"><code>    case "flag":</code></pre>
  <pre data-prefix="5"><code>        res, nb = _apply_flag(res, column)</code></pre>
  <pre data-prefix="6"><code>    case "mode":</code></pre>
  <pre data-prefix="7"><code>        res, nb = _apply_mode(res, column)</code></pre>
  <pre data-prefix="8"><code>    ...</code></pre>
  <pre data-prefix="9"><code>    case _:</code></pre>
  <pre data-prefix="10" class="text-warning"><code>        raise ValueError(f"Décision inconnue '{{ '{' }}decision{{ '}' }}'")</code></pre>
</div>
```

> Attention : dans un template Angular, les accolades doivent être échappées comme ci-dessus (ou le texte mis dans une variable TypeScript).

| Clé | FR | EN |
|---|---|---|
| sur-titre | Le projet du moment | What I'm working on |
| titre | NutriScope | NutriScope |
| intro | Avec deux camarades de formation, on construit une application qui dit si un produit alimentaire est bon, et sinon, ce qui est mieux. 216 heures sur 8 mois, sur les vraies données d'Open Food Facts. | With two classmates, I'm building an app that tells you whether a food product is good for you, and if not, what's better. 216 hours over 8 months, on real Open Food Facts data. |
| jalons | Cadrage (sept. 2026) · Base de données (sept. 2026) · Nettoyage (oct. 2026) · Machine Learning · Deep Learning · Assistant RAG · Mise en production | Scoping (Sept. 2026) · Database (Sept. 2026) · Data cleaning (Oct. 2026) · Machine learning · Deep learning · RAG assistant · Deployment |
| h3 | Ma partie : rendre les données utilisables | My part: making the data usable |
| § 1 | Au départ, il y avait 1 294 426 produits. À l'arrivée, il en reste 548 913. J'ai supprimé plus de la moitié du catalogue, et je peux justifier chaque ligne retirée. | We started with 1,294,426 products and ended up with 548,913. I removed more than half of the catalogue, and I can justify every single row I dropped. |
| § 2 | Chacune de mes règles produit son propre compte rendu chiffré. Le rapport de nettoyage se génère tout seul, ce qui permet à toute l'équipe de voir ce qui a changé et pourquoi. | Each of my rules produces its own report with figures. The cleaning report builds itself, so the whole team can see what changed and why. |
| § 3 | J'ai ensuite découpé les données en fichiers Parquet avec DuckDB et préparé le fichier de features pour les futurs modèles. | I then split the data into Parquet files with DuckDB and prepared the feature file for the upcoming models. |
| alert | Je n'invente pas les nutriments manquants : je les signale. Les compléter maintenant fausserait les modèles, il faudra le faire après le découpage entraînement / test. | I don't make up missing nutrient values: I flag them. Filling them in now would bias the models; that has to happen after the train/test split. |
| stat 1 | Doublons · 28 · même code-barres | Duplicates · 28 · same barcode |
| stat 2 | Inclassables · 654 920 · ni catégorie, ni rayon | Unclassifiable · 654,920 · no category, no aisle |
| stat 3 | Vides · 90 565 · aucun nutriment | Empty · 90,565 · no nutrients |
| légende code | Extrait de `missing_values_strategy` : chaque colonne reçoit une décision explicite, et une décision inconnue arrête le pipeline. | Excerpt from `missing_values_strategy`: every column gets an explicit decision, and an unknown decision stops the pipeline. |
| boutons | Lire l'étude de cas · Voir le code sur GitHub | Read the case study · See the code on GitHub |

Format des nombres : espace insécable en français (`1 294 426`), virgule en anglais (`1,294,426`). Utiliser `Intl.NumberFormat` avec la langue active.

### 3.4 Stage iMSA

**Composants** : `diff`, `badge`.

1. Sur-titre, `h2` serif `text-[clamp(32px,4vw,46px)] max-w-[760px]`.
2. Deux colonnes (`grid lg:grid-cols-2 gap-10 mt-8`) :
   - à gauche : 3 paragraphes `text-[17px] text-base-content/80` ;
   - à droite : le `diff`.

```html
<figure class="diff aspect-[4/3] rounded-box border border-base-300" tabindex="0">
  <div class="diff-item-1" role="img" tabindex="0" [attr.aria-label]="t().imsa.ariaAvant">
    <div class="bg-neutral text-neutral-content p-4 pt-12 font-mono text-[11.5px] leading-relaxed">
      <span class="badge badge-sm absolute top-3 left-3">Avant</span>
      <pre>…code Avant…</pre>
    </div>
  </div>
  <div class="diff-item-2" role="img" tabindex="0" [attr.aria-label]="t().imsa.ariaApres">
    <div class="bg-base-100 p-4 pt-12 font-mono text-[11.5px] leading-relaxed">
      <span class="badge badge-sm badge-soft badge-success absolute top-3 right-3">Après</span>
      <pre>…code Après…</pre>
    </div>
  </div>
  <div class="diff-resizer"></div>
</figure>
<p class="mt-2 text-sm text-base-content/60">…</p>
```

- **Mobile** : le glisser est peu pratique sous 640 px. Afficher le `diff` à partir de `sm:` (`hidden sm:block`) et, en dessous, deux `mockup-code` empilés avec les badges « Avant » / « Après » (`sm:hidden`).

Code « Avant » (simplifié depuis le rapport de stage) :

```text
getByRole('button',
  { name: 'Suivant' }).click();
getByRole('textbox', { name:
  'Veuillez détailler…' })
  .fill('Bonjour');
getByRole('button',
  { name: 'Suivant' }).click();
getByText('Je m\'engage…')
  .click();
getByRole('button',
  { name: 'Suivant' }).click();
// … ×11 pages
```

Code « Après » :

```text
const mapParcoursSite =
  new Map<string, Function>([
  ["accueil", remplissageAccueil],
  ["mandat", remplissageMandat],
  ["motiver", remplissageMotiver],
  // … 9 pages
]);

// dans un test :
await navigationVersUri(
  page, "recapitulatif");
```

3. **Ligne de résultats** (`mt-10 pt-6 border-t border-base-300 flex flex-wrap gap-x-10 gap-y-3`) : trois `<p>` avec le chiffre en `<strong class="text-2xl text-primary">`. Pas de cartes.

| Clé | FR | EN |
|---|---|---|
| sur-titre | Stage · iMSA, avril à juin 2025 | Internship · iMSA, April to June 2025 |
| titre | D'un premier test illisible à 48 tests que toute l'équipe peut reprendre | From one unreadable test to 48 tests the whole team can maintain |
| § 1 | Mon projet principal était d'automatiser les tests d'un service en ligne de la MSA avec Playwright. Un projet de ce genre existait déjà dans l'entreprise, mais quand je l'ai ouvert, je n'y ai absolument rien compris : les autres équipes n'avaient pas les mêmes besoins que nous. | My main project was automating the tests of an online service for the MSA (French agricultural social security) with Playwright. A similar project already existed in the company, but when I opened it, I couldn't make sense of it at all: the other teams didn't have the same needs as ours. |
| § 2 | Je suis donc reparti de la documentation. La première fois que mon test est passé au vert, j'étais admiratif : Playwright se déplaçait sur la page et cliquait sur les boutons comme un vrai utilisateur, mais 200 fois plus vite. | So I started again from the documentation. The first time my test turned green, I was amazed: Playwright moved around the page and clicked the buttons like a real user, only 200 times faster. |
| § 3 | C'est là que la vraie réflexion a commencé : rendre ces tests maintenables et faciles à comprendre, parce que j'allais devoir passer la main. | That's when the real thinking began: making these tests maintainable and easy to understand, because I would have to hand them over. |
| aide diff | Glisser pour comparer. | Drag to compare. |
| aria avant | Avant : le test généré, avec les mêmes clics répétés sur chaque page | Before: the generated test, with the same clicks repeated on every page |
| aria après | Après : une carte des pages et une seule fonction de navigation | After: a map of the pages and a single navigation function |
| résultats | **48** tests end-to-end · **28** méthodes réutilisables · Tests de non-régression : **d'une journée à 5-10 minutes** | **48** end-to-end tests · **28** reusable methods · Regression testing: **from a full day to 5–10 minutes** |

### 3.5 Comment je travaille

Fond `bg-base-200`, `border-y border-base-300`, `py-18`.

**Composant** : `list` / `list-row` (pas de cartes à icônes).

Disposition : titre à gauche (`lg:w-1/3`), liste à droite.

```html
<ul class="list bg-base-100 rounded-box border border-base-300">
  <li class="list-row">
    <div class="list-col-grow">
      <p class="text-[17px] font-semibold">…titre…</p>
      <p class="mt-1 text-base-content/80">…texte… <a class="link link-primary" href="…">…</a></p>
    </div>
  </li>
  …
</ul>
```

| | FR | EN |
|---|---|---|
| titre section | Comment je travaille | How I work |
| 1 · titre | Je vérifie avant de croire. | I check before I believe. |
| 1 · texte | On lit partout que la préparation des données compte plus que l'algorithme. Je l'ai testé sur un TP : c'est plus nuancé, ça dépend du modèle. | You read everywhere that data preparation matters more than the algorithm. I tested it on a lab exercise: it's more nuanced, it depends on the model. |
| 1 · lien | Voir le TP Wine Quality → `#wine` | See the Wine Quality exercise |
| 2 · titre | Je fais des choses qu'on peut relancer. | I build things you can run again. |
| 2 · texte | Mon script Parcoursup télécharge les données officielles, vérifie le fichier, crée la base et nettoie derrière lui. Un seul lancement, le même résultat à chaque fois. | My Parcoursup script downloads the official data, checks the file, builds the database and cleans up after itself. One run, the same result every time. |
| 2 · lien | Voir le projet → `#parcoursup` | See the project |
| 3 · titre | J'écris pour la personne qui reprendra mon code. | I write for whoever takes over my code. |
| 3 · texte | Des outils de test pensés pour toute l'équipe chez iMSA, un compte rendu automatique pour chaque règle de nettoyage dans NutriScope. | Test tools designed for the whole team at iMSA, an automatic report for every cleaning rule in NutriScope. |

### 3.6 Autres projets

**Composants** : `card card-border card-sm`, `badge badge-outline badge-sm`, `progress`.

Grille : `grid gap-5 sm:grid-cols-2 lg:grid-cols-4`. Chaque carte : `card card-border card-sm bg-base-100`, `card-body`, sur-titre `text-xs text-base-content/60`, `h3.card-title text-lg`, description `text-[15px]`, badges en bas (`card-actions mt-auto`). Ancres `id="wine"` et `id="parcoursup"` sur les cartes concernées. Les liens GitHub par projet seront ajoutés plus tard (prévoir un champ `lien?: string` dans les données et un `btn btn-link btn-sm` affiché seulement s'il existe).

Carte Wine Quality : deux lignes de barres avec `<progress class="progress" value="100" max="100">` (Moyenne, 0,685) et `<progress class="progress progress-primary" value="58" max="100">` (XGBoost, 0,400), libellé à gauche et valeur à droite. Ajouter un `aria-label` sur chaque `progress`.

| Projet | Sur-titre FR / EN | Description FR | Description EN | Badges |
|---|---|---|---|---|
| Wine Quality | TP de formation · oct. 2026 / Training lab · Oct. 2026 | Prédire la note d'un vin, et mesurer ce qui fait vraiment baisser l'erreur moyenne. | Predicting a wine's rating, and measuring what actually lowers the average error. | scikit-learn · XGBoost · Optuna |
| Parcoursup | BUT · SAE 2.04 / University project · SAE 2.04 | Un script SQL qui télécharge les 13 870 formations Parcoursup, vérifie le fichier, puis les range dans une base PostgreSQL propre. | A SQL script that downloads the 13,870 Parcoursup programmes, checks the file, then loads them into a clean PostgreSQL database. | SQL · PostgreSQL · Bash |
| K_Finds | BUT · SAE 3.02 / University project · SAE 3.02 | Charger un jeu de données, l'afficher en nuage de points et classer une nouvelle donnée d'après ses voisines. | Load a dataset, plot it as a scatter chart and classify a new point based on its neighbours. | Java · JavaFX · Classification |
| UniVerseLille | BUT · SAE 4.01 / University project · SAE 4.01 | Une messagerie instantanée pour les étudiants et le personnel de l'Université de Lille, déployée sur Tomcat. | An instant messaging app for students and staff at the University of Lille, deployed on Tomcat. | Java · JEE · PostgreSQL |

Libellés des barres : Moyenne / Average ; XGBoost / XGBoost. Titre de section : Autres projets / Other projects.

### 3.7 Parcours

**Composant** : `timeline timeline-vertical timeline-compact timeline-snap-icon`.

Disposition : titre à gauche, frise à droite.

```html
<ul class="timeline timeline-vertical timeline-compact timeline-snap-icon">
  <li>
    <div class="timeline-middle"> <!-- point : petit cercle plein, text-success pour l'élément en cours, text-primary sinon --> </div>
    <div class="timeline-end mb-8 w-full">
      <time class="text-sm text-base-content/60">…</time>
      <div class="timeline-box mt-1 shadow-none">
        <p class="font-semibold">…</p>
        <p class="text-base-content/80">…</p>
      </div>
    </div>
    <hr class="bg-base-300" />
  </li>
  …
</ul>
```

| Date FR / EN | Titre FR | Titre EN | Détail FR | Détail EN |
|---|---|---|---|---|
| Juillet 2026 → mars 2027 · en cours / July 2026 → March 2027 · ongoing | Titre professionnel Développeur IA (RNCP niveau 6) | AI Developer professional qualification (French level 6) | M2i · données, Machine Learning, Deep Learning, IA générative, déploiement, RGPD | M2i · data, machine learning, deep learning, generative AI, deployment, GDPR |
| Avril → juin 2025 · 10 semaines / April → June 2025 · 10 weeks | Stage développeur full stack, iMSA (Avelin) | Full-stack developer internship, iMSA (Avelin) | Angular, Spring Boot, Playwright · organisation SAFe | Angular, Spring Boot, Playwright · SAFe organisation |
| 2023 → 2025 | DUT Informatique (2 années de BUT) | DUT in Computer Science (2-year university degree) | IUT de Lille, Villeneuve-d'Ascq · parcours Réalisation d'applications | IUT de Lille, Villeneuve-d'Ascq · application development track |
| 2020 → 2023 | Bac STI2D, spécialité SIN · mention Très Bien | Technology baccalaureate (STI2D, IT and digital systems) · highest honours | Lycée Elisa Lemonnier (ex-Edmond Labbé), Douai | Lycée Elisa Lemonnier (formerly Edmond Labbé), Douai |

Titre de section : Parcours / Background.

### 3.8 Compétences

Fond `bg-base-200`, `border-t border-base-300`.

**Composants** : `badge`, `divider`.

- En-tête : `h2` à gauche, légende à droite (`flex flex-wrap justify-between items-baseline`).
- Légende : deux pastilles **vides de texte** (`<span class="badge badge-primary w-8" aria-hidden="true"></span>` et `<span class="badge badge-outline badge-primary w-8" aria-hidden="true"></span>`) suivies de leur libellé.
- Chaque groupe : une ligne `flex flex-wrap gap-x-6 gap-y-2` avec le nom du groupe (`w-44 font-semibold`) et les badges (`badge badge-primary` = acquise, `badge badge-outline badge-primary` = en cours), séparés par `<div class="divider my-0"></div>`.
- Pour les lecteurs d'écran, ajouter dans chaque badge en cours un `<span class="sr-only">(en cours d'apprentissage)</span>`.

| | FR | EN |
|---|---|---|
| titre | Ce que j'utilise | What I use |
| légende pleine | Compétence acquise | Skill acquired |
| légende vide | Apprentissage en cours | Currently learning |

| Groupe FR / EN | Acquises | En cours |
|---|---|---|
| IA et données / AI and data | Python, pandas, scikit-learn, XGBoost, SQL, PostgreSQL, DuckDB, Parquet | TensorFlow / Keras, LLM et RAG (EN : LLMs and RAG) |
| Qualité et outillage / Quality and tooling | Playwright, Pytest, Git · GitLab · GitHub, Jira, Linux · Bash | FastAPI, Docker, CI/CD |
| Développement web / Web development | Java, Spring Boot, Angular, TypeScript, JEE | — |
| Langues / Languages | texte simple : Français · Anglais courant (TOEIC 900/990) / French · Fluent English (TOEIC 900/990) | — |

### 3.9 Hors du code

Section simple, `py-16`, titre à gauche, un paragraphe `text-lg` à droite. Aucun composant.

| | FR | EN |
|---|---|---|
| titre | Hors du code | Away from the keyboard |
| texte | Je fais beaucoup de sport. Le dernier défi en date : un trail de 16 km et 300 m de dénivelé sur les terrils de Raismes, après un triathlon en début d'année. Avant ça, il y a eu 7 ans de tennis, de l'escalade, du basket, du foot, et toujours un peu de piscine. | I do a lot of sport. My latest challenge: a 16 km trail run with 300 m of elevation over the slag heaps of Raismes, after a triathlon earlier this year. Before that came 7 years of tennis, climbing, basketball, football, and always a bit of swimming. |

### 3.10 Footer / Contact

**Composants** : `footer`, `btn`.

```html
<footer id="contact" class="bg-primary text-primary-content">
  <div class="mx-auto max-w-[1120px] px-6 pt-18 pb-8">
    <div class="flex flex-wrap items-end justify-between gap-8">
      <div class="max-w-[540px]">
        <h2 class="font-serif text-[clamp(34px,4.4vw,50px)] leading-tight">…</h2>
        <p class="mt-3 text-[17px] opacity-80">…</p>
      </div>
      <div class="flex flex-wrap gap-2.5">
        <a class="btn bg-base-100 text-primary border-0" href="mailto:nathan.marquis.pro@gmail.com">nathan.marquis.pro@gmail.com</a>
        <a class="btn btn-outline border-primary-content/40 text-primary-content" href="https://www.linkedin.com/in/nathanmarquis-ia">LinkedIn</a>
        <a class="btn btn-outline border-primary-content/40 text-primary-content" href="https://github.com/NathanMarquis-Pro">GitHub</a>
      </div>
    </div>
    <p class="mt-14 border-t border-primary-content/20 pt-5 text-sm opacity-70">…</p>
  </div>
</footer>
```

| | FR | EN |
|---|---|---|
| titre | Travaillons ensemble. | Let's work together. |
| texte | Je cherche un stage du 18 janvier au 26 février 2027, puis un CDI à partir de mars. J'habite à Flines-lez-Raches : métropole lilloise, Douaisis, hybride ou à distance. | I'm looking for an internship from 18 January to 26 February 2027, then a permanent position from March. I live in Flines-lez-Raches: Lille area, Douai area, hybrid or remote. |
| bas de page | © 2026 Nathan Marquis · site fait avec Angular et DaisyUI | © 2026 Nathan Marquis · built with Angular and DaisyUI |

---

## 4. Accessibilité et qualité

- Un seul `h1` (hero), un `h2` par section, `h3` pour les sous-titres. Ordre des titres sans saut.
- Tous les liens sont de vrais `<a href>`, tous les boutons de vrais `<button type="button">`.
- Les boutons à icône seule ont un `aria-label`. Les SVG décoratifs ont `aria-hidden="true"`.
- Contraste : textes secondaires à `text-base-content/60` minimum sur fond blanc (vérifier ≥ 4,5:1). Ne pas descendre en dessous.
- Cibles tactiles d'au moins 44 px sur mobile (boutons `btn` standard, pas `btn-xs`, dans le menu mobile).
- Navigation au clavier : focus visible sur les liens, boutons et le `diff` (`tabindex="0"` déjà prévu).
- `prefers-reduced-motion` : désactiver le `scroll-behavior: smooth`.

## 5. SEO et partage

Dans `index.html`, mis à jour par le `LanguageService` :
- `<title>` : « Nathan Marquis · Développeur IA » / « Nathan Marquis · AI Developer »
- `<meta name="description">` : « Développeur IA en formation (RNCP 6, mars 2027). NutriScope, nettoyage de données, tests automatisés. Stage dès janvier 2027, CDI dès mars, Lille. » / « Trainee AI developer (level 6 qualification, March 2027). NutriScope, data cleaning, automated testing. Internship from January 2027, permanent role from March, Lille area. »
- Balises Open Graph (`og:title`, `og:description`, `og:image` = photo ou capture du site, `og:url`).

## 6. Ordre de réalisation

1. Installation Tailwind 4 + DaisyUI 5 + thème `nathan` + polices. Vérifier qu'un `btn btn-primary` s'affiche en bleu nuit.
2. `LanguageService` et dictionnaires FR / EN (vides au départ, remplis section par section).
3. Navbar, puis Hero.
4. NutriScope (steps, stats, mockup-code, alert).
5. iMSA (diff + version mobile).
6. Comment je travaille, Autres projets.
7. Parcours, Compétences, Hors du code, Footer.
8. Passage accessibilité (section 4), SEO (section 5), test à 390 px, 768 px et 1440 px.
9. Build de production et déploiement GitHub Pages (garder la configuration existante, `base-href` compris).

## 7. Assets à fournir par Nathan

- [ ] `assets/photo-nathan.jpg` (photo pro, format portrait, au moins 600 × 720 px)
- [ ] `assets/CV_Nathan_Marquis.pdf` (CV à jour : 48 tests, DUT 2025, dates du stage 2025)
- [ ] Lien du dépôt GitHub NutriScope (public ou non ?)
- [ ] Liens GitHub des autres projets, s'ils sont publics

## 8. Hors périmètre (phase 2)

- Page d'étude de cas NutriScope (`/nutriscope`).
- Mode sombre.
- Mise à jour du contenu à chaque nouveau jalon NutriScope (jalons 4 à 7).
