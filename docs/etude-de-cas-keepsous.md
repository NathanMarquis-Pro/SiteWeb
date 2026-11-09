# Spécification : étude de cas KeepSous

Ce fichier suffit à créer la page sans poser de questions. Il a été rédigé à partir de l'exploration du portfolio (modèle NutriScope) et du dépôt privé KeepSous, puis des réponses de Nathan. Il ne contient aucun code de la page : c'est la tâche de la session suivante.

## 1. Objectif et contraintes

**Objectif.** Ajouter un bloc KeepSous sur l'accueil et une page d'étude de cas `/keepsous` (et `/en/keepsous`), sur le modèle de NutriScope : même ton, même structure, même markup.

**Contraintes fortes.**
- Le code source reste **privé** et l'application n'est **pas publiée**. Aucun lien vers un dépôt KeepSous, aucun lien GitHub pour ce projet.
- Seul extrait de code autorisé : celui de la section 3 (12 lignes).
- Données **fictives uniquement** (jeu `python -m scripts.seed_demo` : un jeune couple, 12 mois d'historique). Aucun montant, nom, mot de passe, URL de serveur ou nom de domaine réel, sur les captures comme dans les textes.
- Aucune donnée sensible : pas de contenu de `.env`, pas d'adresse Tailscale, pas de captures de l'écran de connexion avec des identifiants.
- Règles du site (`docs/ARCHITECTURE.md`, `docs/SPEC-refonte-portfolio.md`) : pas d'icônes décoratives, de dégradés, d'animations ni d'emojis ; texte secondaire en `/70` ; un seul `h1`, un `h2` par section, pas de `h4` ; liens internes en `<a href>`, jamais `routerLink` ; `mockup-code` avec `tabindex="0"` ; `p` dans `.card-body` avec `grow-0` ; pas de SCSS.

**Décisions prises avec Nathan.**

| Sujet | Décision |
|---|---|
| Place sur l'accueil | Bloc complet `keepsous`, juste après `nutriscope`, accroche « Mon projet personnel » / « My side project » |
| Langues | FR et EN rédigés par Claude, anglais britannique comme le reste du site |
| Extrait de code | `remaining_months` + `monthly_need_cents` (calculateur de cagnotte par appareil) |
| Bouton « code » | « Code privé, démo sur demande », `btn btn-ghost`, lien vers `#contact` (même page, pas de lien externe) |
| Cartes de stats | 834 tests · 44 endpoints · 23 décisions d'architecture |
| Frise | 6 étapes, 5 faites, sans estimation d'heures |
| Visuels | Captures WebP de l'appli avec les données de démo : 4 en desktop (`bright_emerald`, plus une en `dark_emerald`) et 1 en mobile (`bright_emerald`) pour la PWA |
| IA | Section courte et honnête |
| Difficultés | À rédiger par Nathan (voir section 9) |

## 2. Fichiers à créer ou modifier

Il n'y a **aucun composant partagé** dans ce portfolio : `src/app/shared/` ne contient que `liens.ts`. La frise, les stats, la fenêtre de code et l'encadré sont du balisage recopié. KeepSous fait de même, en recopiant le balisage des fichiers de référence.

### À créer

| Fichier | Modèle à imiter |
|---|---|
| `src/app/sections/keepsous/keepsous.component.ts` et `.html` | `src/app/sections/nutriscope/nutriscope.component.{ts,html}` (selector `app-keepsous`, `OnPush`, expose `t`, `donnees`) |
| `src/app/sections/keepsous/keepsous.data.ts` | `nutriscope.data.ts` (`jalonsFaits`, `stats`, `fonctionExtraite`, `code: LigneCode[]`) |
| `src/app/pages/etude-keepsous/etude-keepsous.page.ts` et `.html` | `pages/etude-nutriscope/etude-nutriscope.page.{ts,html}` (`@let e = t().etudeKeepsous;`) |
| `src/app/pages/etude-keepsous/etude-keepsous.data.ts` | `etude-nutriscope.data.ts` (ids de sections, tableaux de chiffres) |
| `src/app/pages/etude-keepsous/etude-keepsous.data.spec.ts` | `etude-nutriscope.data.spec.ts` (chiffres cohérents avec le bloc d'accueil, chaque nombre cité dans les textes présent tel que formaté) |
| `public/assets/keepsous/*.webp` | voir section 7 |

### À modifier : généraliser tout ce qui est écrit en dur pour `nutriscope`

Le slug et le type `PageId = 'accueil' | 'nutriscope'` sont codés en dur à plusieurs endroits. Il faut les généraliser (par exemple `PageId = 'accueil' | 'nutriscope' | 'keepsous'` et une table `slug par page`), sans casser NutriScope.

| Fichier | Changement |
|---|---|
| `src/app/i18n/translations.ts` | `PageId` (l.3) ; `ProjetId`/`NavCle` si besoin ; nouveau type `SectionKeepsousId` ; nouvelle interface `EtudeKeepsous` ; clés `Translations.keepsous` (bloc d'accueil) et `Translations.etudeKeepsous` (page). `etude` reste celui de NutriScope. |
| `src/app/i18n/fr.ts` et `en.ts` | Textes de la section 5 (même numérotation de lignes dans les deux fichiers) |
| `src/app/app.routes.ts` | Deux routes `keepsous` et `en/keepsous`, avec `loadComponent`, comme les routes NutriScope |
| `src/app/i18n/language.service.ts` | `langueDepuisChemin` (l.14) et `pageDepuisChemin` (l.19) : regex à étendre à `keepsous` ; `lienLangue` (l.85) : renvoyer le slug de la page courante ; `lienEtude()` et `ancreEtude(id)` : ajouter un paramètre de page (par défaut `nutriscope`) |
| `src/app/i18n/seo.ts` | `URL_KEEPSOUS` (`SITE_URL+'keepsous/'` et `SITE_URL+'en/keepsous/'`), table `URLS`, branche meta (l.64) et branche JSON-LD (l.85) : ajouter `jsonLdEtudeKeepsous` ou paramétrer `jsonLdEtude` |
| `public/langue.js` | Regex de redirection (l.32) : ajouter `keepsous` → `en/keepsous/` |
| `public/sitemap.xml` | 2 blocs `<url>` (`/keepsous/`, `/en/keepsous/`) avec 3 `xhtml:link` (fr, en, x-default = fr) |
| `src/app/pages/accueil/accueil.page.ts` | Insérer `app-keepsous` juste après `nutriscope` : `hero → nutriscope → keepsous → imsa → …` |
| `src/app/sections/navbar/navbar.data.ts` | Ajouter `{ cle: 'keepsous', href: '#keepsous' }` après `#nutriscope`, et la clé `nav.keepsous` (« KeepSous ») ; vérifier que la barre ne déborde pas à 375 px |
| `src/app/sections/projets/projets.data.ts` | **Ne rien ajouter** : KeepSous a son propre bloc, pas de carte (la grille de 4 cartes reste intacte) |
| `src/app/shared/liens.ts` | **Ne pas ajouter** de lien KeepSous |
| `src/app/i18n/fichiers-indexation.spec.ts` (l.31-46) | Liste des URLs du sitemap : 6 URLs, dans l'ordre accueil fr/en, nutriscope fr/en, keepsous fr/en |
| `src/app/i18n/langue-redirection.spec.ts`, `language.service.spec.ts` | Chemins `keepsous` et `en/keepsous` → langue et page ; SEO |
| `src/app/app.spec.ts` | Le helper `afficher()` (l.27) navigue vers `/nutriscope` pour toute page non accueil : le rendre dépendant du `PageId`. Ajouter un `describe` pour KeepSous (voir section 8). Mettre à jour le test du bloc d'accueil (`#keepsous a.btn-primary` → `keepsous/` / `en/keepsous/`, sans `target`). |
| `docs/ARCHITECTURE.md` | « Deux pages, quatre URL pré-rendues » → « Trois pages, six URL » ; ligne 26 est déjà obsolète (le router est bien présent) : à corriger au passage |
| `README.md` | Section structure |

Aucun changement dans `angular.json`, `app.routes.server.ts` ni `robots.txt` : toutes les routes sont pré-rendues automatiquement.

## 3. Bloc d'accueil `keepsous`

Structure : identique à `nutriscope.component.html` (section `id="keepsous"`, mêmes classes : `scroll-mt-20 border-y border-base-300 bg-base-200`, `conteneur py-20`, `steps`, grille 2 colonnes, `stats`, `mockup-code`).

Pour garder l'alternance visuelle avec le bloc NutriScope juste au-dessus (déjà sur fond `bg-base-200`), KeepSous utilise **sans** fond : `<section id="keepsous" class="scroll-mt-20">` (le `border-y` et le `bg-base-200` sont retirés). Les cartes `stats` gardent `bg-base-100`.

### Données (`keepsous.data.ts`)

- `jalonsFaits: 5` (les 5 premières étapes ont `step-primary`)
- `stats: [{ id: 'tests', valeur: 834 }, { id: 'endpoints', valeur: 44 }, { id: 'adr', valeur: 23 }]`
- `fonctionExtraite: 'monthly_need_cents'`
- `code` (12 lignes, extrait fidèle de `backend/app/features/appliances/calculator.py`, l.180-212, docstrings retirées ; **aucune ligne en `alerte`**) :

```python
def remaining_months(month: date, eol: date) -> int:
    return max(1, (eol.year - month.year) * 12 + eol.month - month.month)


def monthly_need_cents(spec: ApplianceSpec, balance: int, month: date, today: date) -> int:
    if spec.is_misc:
        return spec.fixed_monthly_cents or 0
    missing = spec.replacement_cost_cents - balance
    eol = end_of_life(spec, today)
    if missing <= 0 or eol is None:
        return 0
    return _ceil_div(missing, remaining_months(month, eol))
```

(Les deux lignes vides comptent dans la numérotation `data-prefix`. Si Nathan préfère exactement 12 lignes de code sans vide, supprimer la première ligne vide et la seconde : à décider à l'implémentation, sans impact sur le texte.)

### Textes (clés `keepsous.*`)

| Clé | FR | EN |
|---|---|---|
| surtitre | Mon projet personnel | My side project |
| titre | KeepSous | KeepSous |
| intro | Une application de gestion de budget que j'ai conçue et que j'héberge moi-même : six écrans, une base PostgreSQL, 44 endpoints. Sa particularité : une réserve d'imprévus qui met de l'argent de côté appareil par appareil. Code privé, application non publiée. | A budgeting app that I designed and host myself: six screens, a PostgreSQL database, 44 endpoints. What sets it apart: an unexpected-expense reserve that sets money aside device by device. Private code, app not published. |
| jalons | Maquettes et cadrage (oct. 2026) · Socle Docker et CI (oct. 2026) · Version 1 : 10 fonctionnalités (oct. 2026) · Améliorations v1.1 (nov. 2026) · Connexion, mobile, cagnottes (nov. 2026) · Finitions | Mockups and scoping (Oct. 2026) · Docker and CI foundations (Oct. 2026) · Version 1: 10 features (Oct. 2026) · Version 1.1 improvements (Nov. 2026) · Login, mobile, device funds (Nov. 2026) · Finishing touches |
| h3 | Une cagnotte par appareil, pas une réserve globale | One fund per device, not a single global reserve |
| p1 | Un lave-linge dure dix ans, un téléphone trois. Une réserve unique mélange tout. KeepSous donne à chaque appareil sa cagnotte, calculée à partir de sa durée de vie et du coût de remplacement. | A washing machine lasts ten years, a phone three. A single reserve mixes everything up. KeepSous gives each device its own fund, computed from its lifespan and its replacement cost. |
| p2 | Chaque mois, l'application calcule la somme à mettre de côté : ce qui manque pour remplacer l'appareil, divisé par les mois restants avant sa fin de vie. Pour une voiture, la fin de vie tient aussi compte du kilométrage. | Each month, the app works out how much to set aside: what is missing to replace the device, divided by the months left before its end of life. For a car, the end of life also takes mileage into account. |
| p3 | L'autre idée, dans les prévisions : simuler un achat (comptant, en 3 ou 12 fois) pour voir l'effet sur le solde de fin de mois avant de payer. | The other idea, in the forecasts: simulate a purchase (in cash, in 3 or 12 instalments) to see the effect on the end-of-month balance before paying. |
| alerte | Tous les montants sont des centimes entiers, arrondis vers le haut pour les cagnottes : mieux vaut mettre un centime de trop de côté qu'un centime de moins. | Every amount is stored as whole cents, rounded up for the funds: better to set aside one cent too many than one too few. |
| stats.tests | Tests / back et front, sans compter les e2e | Tests / back end and front end, e2e not included |
| stats.endpoints | Endpoints / API FastAPI | Endpoints / FastAPI API |
| stats.adr | Décisions / d'architecture documentées | Decisions / architecture decisions on record |
| legendeAvant / legendeApres | `Extrait de ` / ` : la somme mensuelle est ce qui manque, divisé par les mois restants, arrondi au centime supérieur.` | `Excerpt from ` / `: the monthly sum is what is missing, divided by the months left, rounded up to the next cent.` |
| boutonEtude | Lire l'étude de cas | Read the case study |
| boutonCode | Code privé, démo sur demande | Private code, demo on request |

Boutons : `btn btn-outline btn-primary` vers `langue.lienEtude('keepsous')` (sans `target`), et `btn btn-ghost` vers `langue.lien('#contact')` (sans `target` ni `rel`, c'est un lien interne).

Les titres `stats.*` suivent le format de NutriScope (« Titre / description ») : `titre` avant ` / `, `desc` après.

Nav : `nav.keepsous` = « KeepSous » (FR et EN).

## 4. Page d'étude de cas `/keepsous`

Même squelette que `etude-nutriscope.page.html` : `@let e = t().etudeKeepsous;`, un `<main>`, fonds alternés (sections impaires sans fond, paires `border-y border-base-300 bg-base-200`), `conteneur py-16`, un seul `h1`, un `h2.titre-section` par section.

### Ordre des blocs

0. **En-tête** : lien retour (`langue.lien('#keepsous')`), surtitre, `h1`, intro, fiche projet `dl` à 4 entrées
1. **Sommaire** (`nav`, ancres `langue.ancreEtude(id, 'keepsous')`)
2. `#contexte`
3. `#ecrans` (fond gris)
4. `#imprevus`
5. `#previsions` (fond gris)
6. `#construction`
7. `#qualite` (fond gris)
8. `#ia`
9. `#difficultes` (fond gris)
10. `#suite` (`border-t`, boutons)

`SECTIONS = ['contexte','ecrans','imprevus','previsions','construction','qualite','ia','difficultes','suite']`

### En-tête

| Clé | FR | EN |
|---|---|---|
| meta.titre | KeepSous, étude de cas · Nathan Marquis | KeepSous case study · Nathan Marquis |
| meta.description | KeepSous : application de gestion de budget auto-hébergée, avec une cagnotte par appareil pour les imprévus et une simulation d'achat dans les prévisions. | KeepSous: a self-hosted budgeting app with one fund per device for unexpected expenses and a purchase simulation in the forecasts. |
| retour | Retour au portfolio | Back to portfolio |
| surtitre | Étude de cas · KeepSous | Case study · KeepSous |
| titre | Un budget qui prévoit la panne du lave-linge | A budget that plans for the washing machine breaking down |
| intro | KeepSous est l'application de budget que j'utilise chez moi. Je l'ai conçue, développée et hébergée seul. Voici ce qu'elle fait, ce qui la distingue d'une application classique, comment je l'ai construite et ce que cela m'a appris. | KeepSous is the budgeting app I use at home. I designed, built and host it on my own. Here is what it does, what sets it apart from a typical app, how I built it and what I learned. |
| sommaire | Sommaire de l'étude de cas | Case study contents |

**Fiche projet (`fiche`)**

| Libellé FR → valeur | Libellé EN → valeur |
|---|---|
| Ma part → Tout : conception, back, front, déploiement | My part → Everything: design, back end, front end, deployment |
| Cadre → Projet personnel, seul | Setting → Personal project, solo |
| Durée → 4 semaines, depuis octobre 2026 | Duration → 4 weeks, since October 2026 |
| Outils → Next.js, TypeScript, FastAPI, PostgreSQL, Docker, GitHub Actions, Claude Code | Tools → Next.js, TypeScript, FastAPI, PostgreSQL, Docker, GitHub Actions, Claude Code |

### Section `contexte`

| | FR | EN |
|---|---|---|
| h2 | Le projet et pourquoi | The project and why |
| 1 | KeepSous est une application de gestion de budget pour une seule personne ou un seul foyer. Elle sert à estimer et à anticiper, pas à remplacer la banque : on y saisit ses opérations, on les range par catégorie et on regarde ce qu'il reste à vivre. | KeepSous is a budgeting app for one person or one household. It is for estimating and planning ahead, not for replacing the bank: you enter your transactions, sort them into categories and see what is left to live on. |
| 2 | Elle tourne chez moi, dans Docker, et n'écoute que sur la machine locale. Je l'ouvre sur mon téléphone comme une application installée (PWA) grâce à Tailscale. Elle n'est pas publiée et son code est privé : je peux la montrer en démonstration. | It runs at home, in Docker, and only listens on the local machine. I open it on my phone as an installed app (PWA) through Tailscale. It is not published and its code is private: I can show it in a demo. |
| 3 | Je suis parti de six maquettes d'écran, en trois thèmes, puis j'ai découpé le travail en tâches. Version 1 en octobre 2026, puis deux séries d'améliorations en novembre : connexion par mot de passe, mobile, et cagnottes par appareil. | I started from six screen mockups, in three themes, then split the work into tasks. Version 1 came in October 2026, followed by two rounds of improvements in November: password login, mobile, and per-device funds. |

### Section `ecrans`

| | FR | EN |
|---|---|---|
| h2 | Six écrans, un fil conducteur | Six screens, one thread |
| intro | Chaque écran répond à une question simple. | Each screen answers one simple question. |

Tableau (colonnes : Écran / Question à laquelle il répond ; 6 lignes, ligne d'en-tête `th scope="row"`) :

| Écran FR / EN | Question FR | Question EN |
|---|---|---|
| Accueil / Home | Où en suis-je ce mois-ci ? | Where do I stand this month? |
| Opérations / Transactions | Qu'est-ce que j'ai dépensé, et où ? | What did I spend, and where? |
| Enveloppes / Envelopes | Est-ce que je tiens mes plafonds par catégorie ? | Am I keeping to my caps for each category? |
| Imprévus / Unexpected | Combien mettre de côté pour remplacer mes appareils ? | How much should I set aside to replace my devices? |
| Prévisions / Forecasts | Que va devenir mon solde, et puis-je me permettre cet achat ? | What will my balance look like, and can I afford this purchase? |
| Paramètres / Settings | Comment régler l'appli, importer ou exporter mes données ? | How do I set up the app and import or export my data? |

Après le tableau, une phrase :
- FR : « Trois thèmes sont livrés : clair vert, clair rouge et sombre vert. »
- EN : "Three themes ship with it: light green, light red and dark green."

**Visuel** : `keepsous-accueil.webp` (voir section 7), dans une `<figure>` avec `<figcaption class="mt-2.5 text-sm text-base-content/70">`.

### Section `imprevus`

| | FR | EN |
|---|---|---|
| h2 | Imprévus : une cagnotte par appareil | Unexpected expenses: one fund per device |
| 1 | La première version avait une réserve unique pour tous les imprévus. Elle disait combien mettre de côté, mais pas pour quoi. J'ai remplacé cette réserve par une cagnotte par appareil (décision d'architecture n° 22). | The first version had a single reserve for all unexpected expenses. It said how much to set aside, but not what for. I replaced it with one fund per device (architecture decision no. 22). |
| 2 | Chaque appareil a un type (électroménager, véhicule, téléphone et informatique, multimédia, logement, divers), une date d'achat, une durée de vie et un coût de remplacement. L'application en déduit sa fin de vie, la part de vie déjà utilisée et un niveau de risque de panne : faible sous 60 %, moyen sous 85 %, élevé au-delà. | Each device has a type (household, vehicle, phone and IT, multimedia, housing, miscellaneous), a purchase date, a lifespan and a replacement cost. The app derives its end of life, the share of life already used and a failure risk level: low below 60%, medium below 85%, high above that. |
| 3 | La somme mensuelle est ce qui manque pour remplacer l'appareil, divisé par les mois restants, arrondi au centime supérieur. Pour un véhicule, la fin de vie est la plus proche entre l'âge et le kilométrage extrapolé. Un appareil qui a dépassé sa fin de vie est « en sursis » : il reste dans le budget, avec un mois pour finir de remplir sa cagnotte. | The monthly sum is what is missing to replace the device, divided by the months left, rounded up to the next cent. For a vehicle, the end of life is whichever comes first: age or extrapolated mileage. A device past its end of life is "on borrowed time": it stays in the budget, with one month left to fill its fund. |

**Encadré `alerte` (même markup que NutriScope, `alert alert-soft alert-success`)** :
- FR : « Quand le budget est serré, l'application remplit les cagnottes par ordre de priorité et indique pour chacune si elle est couverte, partielle ou non couverte, avec le manque total. »
- EN: "When the budget is tight, the app fills the funds in priority order and shows whether each one is covered, partly covered or not covered, along with the total shortfall."

**Tableau d'exemple** (appareils fictifs, calculs du 9 novembre 2026, mois de novembre 2026). Colonnes : Appareil / Vie utilisée / Coût / Déjà en cagnotte / Mois restants / À mettre de côté ce mois-ci.

| Appareil FR / EN | Vie utilisée | Coût | Cagnotte | Mois restants | Par mois |
|---|---|---|---|---|---|
| Lave-linge / Washing machine | 40 % | 600 € | 180 € | 72 | 5,84 € |
| Voiture, 150 000 km sur 250 000 / Car, 150,000 of 250,000 km | 59 % | 8 000 € | 3 000 € | 56 | 89,29 € |
| Téléphone en sursis / Phone on borrowed time | 100 % ou plus / 100% or more | 400 € | 100 € | 1 | 300,00 € |

> **À vérifier à l'implémentation** : ces valeurs ont été calculées à la main d'après `calculator.py` (hypothèses : lave-linge acheté le 1er nov. 2022, durée 120 mois ; voiture achetée le 9 nov. 2019, durée 180 mois, kilométrage 150 000 / 250 000 ; téléphone acheté le 1er mars 2023, durée 36 mois). Nathan doit les rejouer avec l'application (jeu de démo) ou avec `calculator.py` avant publication, et corriger le tableau et `etude-keepsous.data.ts` si un écart apparaît. Le `data.spec.ts` doit recalculer la formule `ceil((coût − cagnotte) / mois restants)` pour chaque ligne et vérifier la cohérence avec le tableau.

Légende sous le tableau : FR « Appareils et montants fictifs. » / EN "Fictional devices and amounts."

**Fenêtre de code** : le même `mockup-code` que le bloc d'accueil (`donnees.code`), dans une `<figure>`, avec la même légende (`legendeAvant` + `<code>monthly_need_cents</code>` + `legendeApres`).

**Visuels** : `keepsous-imprevus.webp` (clair vert) et `keepsous-imprevus-sombre.webp` (sombre vert), dans une grille `sm:grid-cols-2` ou l'une sous l'autre sur mobile. La capture mobile `keepsous-imprevus-mobile.webp` n'est pas ici : elle va dans la section `construction` (voir plus bas).

### Section `previsions`

| | FR | EN |
|---|---|---|
| h2 | Prévisions : puis-je me permettre cet achat ? | Forecasts: can I afford this purchase? |
| 1 | L'écran Prévisions extrapole le solde des mois à venir. Il contient un simulateur d'achat : on choisit un achat (téléviseur, ordinateur, vacances, voiture) ou un montant libre, et un paiement comptant, en 3 fois ou en 12 fois. | The Forecasts screen extrapolates the balance for the coming months. It includes a purchase simulator: you pick a purchase (television, computer, holidays, car) or a free amount, and pay in cash, in 3 or in 12 instalments. |
| 2 | Le solde simulé de fin de mois est le solde de départ, plus les revenus, moins les dépenses, moins la première échéance. Trois scénarios : les chiffres actuels, un mois plus serré (+20 % de dépenses) ou plus léger (−20 %). | The simulated end-of-month balance is the starting balance, plus income, minus expenses, minus the first instalment. There are three scenarios: current figures, a tighter month (+20% spending) or a lighter one (−20%). |
| 3 | Le montant est découpé en centimes entiers : les échéances suivantes sont arrondies vers le bas et la première absorbe le reste. La simulation tourne dans le navigateur : rien n'est envoyé au serveur ni enregistré. | The amount is split into whole cents: later instalments are rounded down and the first one absorbs the remainder. The simulation runs in the browser: nothing is sent to the server or stored. |

Tableau des verdicts (colonnes : Verdict / Condition) :

| Verdict FR / EN | Condition FR | Condition EN |
|---|---|---|
| Possible / Possible | Le solde simulé reste au-dessus de la marge de sécurité | The simulated balance stays above the safety margin |
| Serré / Tight | Le solde simulé reste positif, mais sous la marge | The simulated balance stays positive, but below the margin |
| Hors de portée / Unaffordable | Le solde simulé passe sous zéro | The simulated balance drops below zero |

**Visuel** : `keepsous-previsions-simulation.webp` (clair vert, simulateur ouvert avec un achat en 3 fois).

### Section `construction`

| | FR | EN |
|---|---|---|
| h2 | Comment c'est construit | How it is built |
| 1 | Le front est en Next.js (TypeScript strict, Tailwind, daisyUI). Le back est en FastAPI, avec une base PostgreSQL de 9 tables. Le navigateur appelle `/api/*` sur Next.js, qui relaie vers le back : pas de CORS à gérer. | The front end is Next.js (strict TypeScript, Tailwind, daisyUI). The back end is FastAPI, with a 9-table PostgreSQL database. The browser calls `/api/*` on Next.js, which forwards to the back end: no CORS to manage. |
| 2 | Chaque fonctionnalité a son dossier côté back (routes, schémas, service, modèles). Les types TypeScript sont générés à partir du contrat OpenAPI de FastAPI : si le back change, le front ne compile plus tant qu'il n'est pas à jour. | Each feature has its own folder on the back end (routes, schemas, service, models). The TypeScript types are generated from FastAPI's OpenAPI contract: if the back end changes, the front end stops compiling until it is updated. |
| 3 | Les montants sont des entiers en centimes, toujours positifs : c'est la catégorie qui donne le sens (dépense ou revenu). La base est écrite en SQL à la main, avec des correctifs numérotés et suivis dans une table. | Amounts are integers in cents, always positive: the category gives the direction (expense or income). The schema is written in SQL by hand, with numbered patches tracked in a table. |
| 4 | Tout tourne dans Docker. Un seul Makefile pilote le projet sous Linux et sous Windows (PowerShell). Une sauvegarde quotidienne de la base est planifiée, et la restauration est testée. | Everything runs in Docker. A single Makefile drives the project on Linux and on Windows (PowerShell). A daily database backup is scheduled, and restoring it is tested. |

**Visuel** : `keepsous-imprevus-mobile.webp` (clair vert, format portrait), placé sous le paragraphe 1 ou 4 dans une `<figure class="mt-8 max-w-[260px]">` (largeur limitée : c'est une capture de téléphone), avec la légende « Écran Imprévus sur téléphone (PWA). Données fictives. » / "Unexpected screen on a phone (PWA). Fictional data."

> Ne publier cette capture qu'une fois le rendu à 375 px et l'installation sur téléphone contrôlés : le dépôt KeepSous les note « non vérifiés ».

### Section `qualite`

| | FR | EN |
|---|---|---|
| h2 | Ce qui garde le code honnête | What keeps the code honest |
| 1 | Le projet compte 462 tests côté back et 372 côté front, plus 19 scénarios de bout en bout (Playwright) qui tournent sur une pile Docker jetable. | The project has 462 back-end tests and 372 front-end tests, plus 19 end-to-end scenarios (Playwright) that run on a throwaway Docker stack. |
| 2 | La CI GitHub Actions lance deux jobs en parallèle à chaque envoi : la vérification complète (lint, typage, tests, contrat d'API) et les tests de bout en bout. | GitHub Actions CI runs two jobs in parallel on every push: the full check (lint, typing, tests, API contract) and the end-to-end tests. |
| 3 | Les formules de cagnotte existent côté back (Python) et côté front (aperçu en direct). Des tests vérifient que les deux donnent les mêmes résultats. | The fund formulas exist on the back end (Python) and on the front end (live preview). Tests check that both give the same results. |
| 4 | Chaque choix structurant est écrit dans une décision d'architecture : il y en a 23, de « montants en centimes » à « dépendances Python gérées par uv ». | Every structural choice is written down as an architecture decision: there are 23, from "amounts in cents" to "Python dependencies managed by uv". |

Tableau récapitulatif (colonnes : Mesure / Valeur ; `th scope="row"` ; nombres via `langue.nombre`) :

| Mesure FR / EN | Valeur |
|---|---|
| Écrans / Screens | 6 (+ connexion et hors ligne / + login and offline) |
| Tables SQL / SQL tables | 9 |
| Endpoints FastAPI / FastAPI endpoints | 44 |
| Décisions d'architecture / Architecture decisions | 23 |
| Tests back / Back-end tests | 462 |
| Tests front / Front-end tests | 372 |
| Tests de bout en bout / End-to-end tests | 19 |
| Thèmes / Themes | 3 |
| Commits | 102 (du 13 oct. au 9 nov. 2026 / 13 Oct to 9 Nov 2026) |

> Chiffres comptés par recherche dans le code (`def test_`, `it(`/`test(`, décorateurs de routes). Le dernier `make check` enregistré donnait 393 tests back et 323 tests front (8 nov. 2026) : les nombres comptés incluent les cas paramétrés non dépliés et d'éventuelles différences. **Avant publication, Nathan lance `make check`** et remplace 462/372 (et 834) par les nombres exécutés si l'écart gêne. Le `data.spec.ts` impose que 834 = 462 + 372 et que ces chiffres soient identiques dans le bloc d'accueil et dans la page.

### Section `ia`

| | FR | EN |
|---|---|---|
| h2 | Comment j'ai travaillé avec l'IA | How I worked with AI |
| 1 | J'ai utilisé Claude Code pour écrire une grande partie du code. Mon rôle : concevoir les écrans, décider de l'architecture, découper le travail en tâches et relire. | I used Claude Code to write a large part of the code. My role: design the screens, decide the architecture, split the work into tasks and review. |
| 2 | Pour cadrer l'IA, j'ai écrit un document d'architecture avec des règles explicites pour elle, une fiche par fonctionnalité, des décisions d'architecture et deux guides de style (back et front). Les tâches de lint et de tests sont déléguées à un agent dédié. | To steer the AI, I wrote an architecture document with explicit rules for it, one sheet per feature, architecture decisions and two style guides (back end and front end). Lint and test runs are delegated to a dedicated agent. |
| 3 | Les garde-fous sont les tests, le typage et la CI : un changement ne passe que si tout est vert. Ce que je ne délègue pas : le choix des règles de calcul et la décision de remplacer la réserve globale par une cagnotte par appareil. | The safeguards are the tests, the typing and the CI: a change only goes through if everything is green. What I do not delegate: the choice of calculation rules and the decision to replace the global reserve with one fund per device. |

### Section `difficultes` (À RÉDIGER PAR NATHAN)

Nathan n'a pas fourni ses points ; ils ne sont **pas** inventés. Les clés existent dans `EtudeKeepsous`, avec des valeurs provisoires, **à remplacer par ses mots avant publication** :

| Clé | FR (provisoire) | EN (provisional) |
|---|---|---|
| h2 | Difficultés et apprentissages | Difficulties and lessons |
| intro | À RÉDIGER PAR NATHAN : 2 ou 3 difficultés, chacune avec ce que j'en ai appris. | TO BE WRITTEN BY NATHAN: 2 or 3 difficulties, each with what I learned from it. |
| points[0..2].titre / .texte | À RÉDIGER PAR NATHAN | TO BE WRITTEN BY NATHAN |

Pistes vues dans le dépôt, **uniquement pour aider Nathan** (à ne pas publier telles quelles) : remplacer la réserve globale F7 par les cagnottes (ADR-022) ; centimes entiers et arrondis ; support Windows (PowerShell 5.1 qui réencode les redirections en UTF-16, d'où `docker compose cp`) ; cadrer l'IA avec des fiches et des ADR.

Rendu : liste `ul` `list-disc` comme `#limites` de NutriScope, ou trois `h3` courts. **La page ne doit pas être mise en ligne tant que ces textes provisoires sont présents** (voir critères de validation).

### Section `suite`

| | FR | EN |
|---|---|---|
| h2 | La suite | What's next |
| paragraphe | La version 1 est terminée et utilisée. Il reste des finitions : tester l'installation sur téléphone et le rendu à 375 px. Les pistes suivantes sont notées, pas démarrées : objectifs d'épargne, import de relevés bancaires en CSV. | Version 1 is finished and in use. A few finishing touches remain: testing the phone install and the rendering at 375 px. The next ideas are written down, not started: savings goals and importing bank statements from CSV. |
| boutonRetour | Retour au portfolio | Back to portfolio |
| boutonCode | Code privé, démo sur demande | Private code, demo on request |
| credit | Maquettes et captures : données fictives. | Mockups and screenshots: fictional data. |

Boutons (`mt-9 flex flex-wrap gap-3`) : `btn btn-outline btn-primary` vers `langue.lien('#keepsous')` ; `btn btn-ghost` vers `langue.lien('#contact')` (lien interne, **pas de `target="_blank"`**).

## 5. Clés i18n proposées

Au format du projet : objets TS typés, clés en français camelCase, textes dans les dictionnaires et structure dans les données.

```ts
// translations.ts
export type PageId = 'accueil' | 'nutriscope' | 'keepsous';

export type SectionKeepsousId =
  | 'contexte' | 'ecrans' | 'imprevus' | 'previsions'
  | 'construction' | 'qualite' | 'ia' | 'difficultes' | 'suite';

export type StatKeepsousId = 'tests' | 'endpoints' | 'adr';
export type EcranId = 'accueil' | 'operations' | 'enveloppes' | 'imprevus' | 'previsions' | 'parametres';
export type VerdictId = 'possible' | 'serre' | 'horsDePortee';
export type MesureId =
  | 'ecrans' | 'tables' | 'endpoints' | 'adr' | 'testsBack'
  | 'testsFront' | 'testsE2e' | 'themes' | 'commits';

export interface KeepsousAccueil {          // Translations.keepsous
  surtitre: string; titre: string; intro: string;
  jalons: { nom: string; date?: string }[];
  h3: string; p1: string; p2: string; p3: string; alerte: string;
  stats: Record<StatKeepsousId, { titre: string; desc: string }>;
  legendeAvant: string; legendeApres: string;
  boutonEtude: string; boutonCode: string;
}

export interface EtudeKeepsous {            // Translations.etudeKeepsous
  meta: { titre: string; description: string };
  retour: string; surtitre: string; titre: string; intro: string;
  fiche: { libelle: string; valeur: string }[];
  sommaire: string;
  sections: Record<SectionKeepsousId, string>;
  contexte: string[];
  ecrans: {
    intro: string;
    colonnes: { ecran: string; question: string };
    liste: Record<EcranId, { nom: string; question: string }>;
    themes: string; legendeVisuel: string;
  };
  imprevus: {
    paragraphes: string[]; alerte: string;
    exemple: { colonnes: string[]; appareils: { nom: string; vie: string }[]; legende: string };
    legendeAvant: string; legendeApres: string;
  };
  previsions: {
    paragraphes: string[];
    verdicts: { colonnes: { verdict: string; condition: string }; liste: Record<VerdictId, { nom: string; condition: string }> };
  };
  construction: string[];
  qualite: { paragraphes: string[]; colonnes: { mesure: string; valeur: string }; mesures: Record<MesureId, string> };
  ia: string[];
  difficultes: { intro: string; points: { titre: string; texte: string }[] };
  suite: { paragraphe: string; boutonRetour: string; boutonCode: string; credit: string };
  visuels: Record<'accueil' | 'imprevus' | 'imprevusSombre' | 'imprevusMobile' | 'previsions', { alt: string; legende: string }>;
}
```

Notes :
- Dans `Translations`, ajouter `keepsous: KeepsousAccueil` et `etudeKeepsous: EtudeKeepsous`, et `nav.keepsous: string`. Une clé manquante dans `fr.ts` ou `en.ts` doit casser la compilation.
- `fr.ts` et `en.ts` doivent garder la même numérotation de lignes.
- Les chiffres sont dans `*.data.ts` (voir ci-dessous) ; les textes qui contiennent un nombre peuvent utiliser des jetons `{n}` remplacés par `langue.nombre`, comme `p1` de NutriScope.
- Typographie : FR avec espace avant `:` et guillemets « … » ; EN avec guillemets droits et orthographe britannique (programme, catalogue, licence).

### Données (`etude-keepsous.data.ts`)

```ts
export const SECTIONS: SectionKeepsousId[] = ['contexte','ecrans','imprevus','previsions','construction','qualite','ia','difficultes','suite'];
export const MESURES = { ecrans: 6, tables: 9, endpoints: 44, adr: 23, testsBack: 462, testsFront: 372, testsE2e: 19, themes: 3, commits: 102 };
export const TOTAL_TESTS = MESURES.testsBack + MESURES.testsFront; // 834
export const APPAREILS = [
  { id: 'lavelinge', vieUtilisee: 40, coutCents: 60000, cagnotteCents: 18000, moisRestants: 72, parMoisCents: 584 },
  { id: 'voiture',   vieUtilisee: 59, coutCents: 800000, cagnotteCents: 300000, moisRestants: 56, parMoisCents: 8929 },
  { id: 'telephone', vieUtilisee: 100, coutCents: 40000, cagnotteCents: 10000, moisRestants: 1, parMoisCents: 30000 },
];
```

Le spec de données vérifie : `parMoisCents === ceil((coutCents − cagnotteCents) / moisRestants)`, `TOTAL_TESTS` identique entre le bloc d'accueil et la page, et que chaque nombre cité dans les textes FR/EN apparaît tel que formaté par `Intl.NumberFormat`.

## 6. Données dans le bloc d'accueil : cohérence

Le bloc d'accueil et la page partagent `KEEPSOUS` (dans `keepsous.data.ts`), comme `NUTRISCOPE` pour NutriScope : `stats`, `jalonsFaits`, `fonctionExtraite`, `code`. La page l'importe, elle ne le duplique pas.

## 7. Assets à fournir

Dossier : `public/assets/keepsous/`. Format WebP, **données du jeu de démo uniquement** (`python -m scripts.seed_demo`, import dans Paramètres). Capturer dans un navigateur à environ 1440 × 900 puis exporter en **1600 px de large** (qualité 80, moins de 150 Ko chacune si possible). Pas de barre d'adresse ni d'onglets visibles, pas de notifications système.

| Fichier | Contenu | Thème | Dimensions conseillées |
|---|---|---|---|
| `keepsous-accueil.webp` | Écran Accueil : reste à vivre, récapitulatif du mois | `bright_emerald` | 1600 × 1000 |
| `keepsous-imprevus.webp` | Écran Imprévus : liste des appareils avec cagnottes, niveaux de risque, au moins un appareil « en sursis » | `bright_emerald` | 1600 × 1000 |
| `keepsous-imprevus-sombre.webp` | Même écran Imprévus, mêmes données | `dark_emerald` | 1600 × 1000 |
| `keepsous-imprevus-mobile.webp` | Écran Imprévus sur téléphone (PWA installée ou fenêtre de 390 px), mêmes données que la capture claire | `bright_emerald` | 800 × 1600 (portrait, ~390 × 800 capturé en 2x) |
| `keepsous-previsions-simulation.webp` | Écran Prévisions avec le simulateur ouvert : achat en 3 fois, verdict visible | `bright_emerald` | 1600 × 1000 |

Aucune capture de l'écran de connexion, des Paramètres avec chemins ou URLs réels, ni de la barre Tailscale.

**Textes alternatifs et légendes** (`visuels`) :

| Fichier | alt FR | alt EN |
|---|---|---|
| keepsous-accueil | Écran d'accueil de KeepSous en thème clair vert : reste à vivre du mois et récapitulatif des opérations, avec des données fictives. | KeepSous home screen in the light green theme: the month's remaining budget and a summary of transactions, with fictional data. |
| keepsous-imprevus | Écran Imprévus en thème clair vert : une cagnotte par appareil, avec le niveau de risque de panne et la somme à mettre de côté ce mois-ci. | Unexpected screen in the light green theme: one fund per device, with the failure risk level and the sum to set aside this month. |
| keepsous-imprevus-sombre | Le même écran Imprévus en thème sombre vert. | The same Unexpected screen in the dark green theme. |
| keepsous-imprevus-mobile | Écran Imprévus de KeepSous sur téléphone, en thème clair vert : la liste des appareils avec leurs cagnottes, avec des données fictives. | KeepSous Unexpected screen on a phone, in the light green theme: the list of devices with their funds, with fictional data. |
| keepsous-previsions-simulation | Écran Prévisions avec le simulateur d'achat : un achat payé en 3 fois et son verdict sur le solde de fin de mois. | Forecasts screen with the purchase simulator: a purchase paid in 3 instalments and its verdict on the end-of-month balance. |

Légendes courtes (`figcaption`) : « Données fictives. » / "Fictional data." (en ajoutant le thème pour la capture sombre).

Markup : `<figure class="min-w-0">` + `<img>` avec `width` et `height` (évite le décalage de mise en page), `loading="lazy"`, `class="w-full rounded-box border border-base-300"`, et `alt` issu des dictionnaires. L'image Open Graph `og-image.jpg` reste commune ; ne pas en créer une pour KeepSous.

Les 17 PNG de `docs/design/` du dépôt KeepSous sont des **maquettes** : ne pas les copier.

## 8. Critères de validation

**Build et tests**
- `ng build` sans erreur ni avertissement nouveau ; `prerendered-routes.json` liste `/keepsous` et `/en/keepsous`.
- `ng test` passe : specs de données, `app.spec.ts` (nouveau `describe` KeepSous), `language.service.spec.ts`, `langue-redirection.spec.ts`, `fichiers-indexation.spec.ts` (6 URLs).
- Le `describe` KeepSous vérifie au minimum : 1 `h1`, 1 `main`, 1 `h2` par id de `SECTIONS`, aucun `h4`, hrefs du sommaire = préfixe + id, tableaux avec `thead th[scope=col]` et `tbody th[scope=row]`, `.overflow-x-auto` et `.mockup-code` avec `tabindex="0"` (et `role="region"` + `aria-label` pour les zones défilantes), changement de langue qui reste sur la page.

**Interface**
- Page responsive de 375 px à 1440 px, sans défilement horizontal de la page (seuls tableaux et code défilent, dans leur conteneur).
- Navbar sans débordement avec le lien KeepSous à 375 px.
- Contraste : texte secondaire en `/70`.
- Les images ont un `alt`, des dimensions et `loading="lazy"`.

**Contenu**
- FR et EN complets : aucune clé vide, aucun « À RÉDIGER » ni « TO BE WRITTEN » restant dans `fr.ts`/`en.ts` (test ou recherche avant publication).
- **Aucun lien vers un dépôt KeepSous** : recherche de `github.com` dans les fichiers KeepSous = aucun résultat ; aucun `target="_blank"` sur la page KeepSous.
- **Aucune donnée réelle** : captures issues du jeu de démo, aucun nom, montant, e-mail, domaine ou adresse Tailscale réels.
- Chiffres cohérents entre bloc d'accueil, page et `data.spec.ts` (834 = 462 + 372).
- Extrait de code identique au fichier source, docstrings exceptées.
- SEO : `canonical`, `hreflang` fr/en/x-default, Open Graph et JSON-LD `Article` corrects pour `/keepsous/` et `/en/keepsous/` ; sitemap à 6 URLs.
- NutriScope fonctionne comme avant (régression : routes, liens, SEO, redirection de langue).

## 9. Points encore ouverts

1. **Difficultés et apprentissages** : à rédiger par Nathan avec ses mots (section `difficultes`). Bloquant pour la mise en ligne.
2. **Captures d'écran** : à réaliser par Nathan (5 fichiers de la section 7 : 4 desktop et 1 mobile ; la capture mobile attend en plus le contrôle du rendu à 375 px). Tant qu'elles manquent, la page peut se construire avec les `<img>` en place, mais ne pas publier avec des liens cassés.
3. **Nombre de tests** : 462 et 372 sont des comptages de fonctions dans le code, non des résultats d'exécution (le dernier `make check` enregistré donne 393 et 323). Lancer `make check` et trancher avant publication.
4. **Exemples chiffrés des cagnottes** : calculés à la main, à rejouer avec l'application ou `calculator.py`.
5. **Heures passées** : volontairement non indiquées. À ajouter dans la fiche si Nathan le souhaite.
6. **Licence du projet** : « À définir » dans le README de KeepSous. La page dit seulement « code privé » ; ne rien affirmer de plus.
7. **Date de fin** : la v1 est terminée, les finitions (installation sur téléphone, rendu à 375 px, Lighthouse) sont notées « non vérifiées » dans le dépôt. Mettre à jour la dernière étape de la frise quand elles seront faites.
8. **Fraîcheur des chiffres** : tous les chiffres datent du 9 novembre 2026 (102 commits, 23 ADR). À rafraîchir si le projet avance avant la mise en ligne.
