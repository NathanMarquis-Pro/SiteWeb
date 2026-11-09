import { Translations } from './translations';

export const fr: Translations = {
  meta: {
    titre: 'Nathan Marquis · Développeur IA',
    poste: 'Développeur IA',
    description:
      'Développeur IA en formation (RNCP 6, mars 2027). NutriScope, nettoyage de données, tests automatisés. Stage dès janvier 2027, CDI dès mars, Lille.',
  },
  nav: {
    nutriscope: 'NutriScope',
    keepsous: 'KeepSous',
    imsa: 'Stage iMSA',
    projets: 'Projets',
    parcours: 'Parcours',
    contact: 'Me contacter',
    langue: 'Langue',
    ouvrirMenu: 'Ouvrir le menu',
  },
  hero: {
    dispo: 'Disponible : stage du 18 janvier au 26 février 2027, puis CDI dès mars',
    identite: 'Nathan Marquis, développeur IA',
    titre1: 'Vos données,',
    titre2: 'mes futures missions',
    paragraphe1:
      "Je veux être développeur depuis le collège et mes premiers scripts sur Scratch. Aujourd'hui, je me forme au développement IA chez M2i (titre RNCP niveau 6, en mars 2027).",
    paragraphe2:
      "Tout le monde dit que l'IA va remplacer le travail. J'ai préféré aller vérifier par moi-même, et apprendre à m'en servir.",
    bouton1: 'Voir mon projet en cours',
    bouton2: 'Télécharger mon CV',
    legendePhoto: 'À Flines-lez-Raches, près de Lille',
  },
  nutriscope: {
    surtitre: 'Le projet du moment',
    titre: 'NutriScope',
    intro:
      "Avec deux camarades de formation, on construit une application qui dit si un produit alimentaire est bon, et sinon, ce qui est mieux. 216 heures sur 8 mois, sur les vraies données d'Open Food Facts.",
    jalons: [
      { nom: 'Cadrage', date: 'sept. 2026' },
      { nom: 'Base de données', date: 'sept. 2026' },
      { nom: 'Nettoyage', date: 'oct. 2026' },
      { nom: 'Machine Learning' },
      { nom: 'Deep Learning' },
      { nom: 'Assistant RAG' },
      { nom: 'Mise en production' },
    ],
    h3: 'Ma partie : rendre les données utilisables',
    p1: "Au départ, il y avait {depart} produits. À l'arrivée, il en reste {arrivee}. J'ai supprimé plus de la moitié du catalogue, et je peux justifier chaque ligne retirée.",
    p2: "Chacune de mes règles produit son propre compte rendu chiffré. Le rapport de nettoyage se génère tout seul, ce qui permet à toute l'équipe de voir ce qui a changé et pourquoi.",
    p3: "J'ai ensuite découpé les données en fichiers Parquet avec DuckDB et préparé le fichier de features pour les futurs modèles.",
    alerte:
      "Je n'invente pas les nutriments manquants : je les signale. Les compléter maintenant fausserait les modèles, il faudra le faire après le découpage entraînement / test.",
    stats: {
      doublons: { titre: 'Doublons', desc: 'même code-barres' },
      inclassables: { titre: 'Inclassables', desc: 'ni catégorie, ni rayon' },
      vides: { titre: 'Vides', desc: 'aucun nutriment' },
    },
    legendeAvant: 'Extrait de ',
    legendeApres: ' : chaque colonne reçoit une décision explicite, et une décision inconnue arrête le pipeline.',
    boutonEtude: "Lire l'étude de cas",
    boutonCode: 'Voir le code sur GitHub',
  },
  keepsous: {
    surtitre: "Mon projet personnel",
    titre: "KeepSous",
    intro: "Une application de gestion de budget que j'ai conçue et que j'héberge moi-même : six écrans, une base PostgreSQL, 44 endpoints. Sa particularité : une réserve d'imprévus qui met de l'argent de côté appareil par appareil. Code privé, application non publiée.",
    jalons: [
      {
        nom: "Maquettes et cadrage",
        date: "oct. 2026",
      },
      {
        nom: "Socle Docker et CI",
        date: "oct. 2026",
      },
      {
        nom: "Version 1 : 10 fonctionnalités",
        date: "oct. 2026",
      },
      {
        nom: "Améliorations v1.1",
        date: "nov. 2026",
      },
      {
        nom: "Connexion, mobile, cagnottes",
        date: "nov. 2026",
      },
      {
        nom: "Finitions",
      },
    ],
    h3: "Une cagnotte par appareil, pas une réserve globale",
    p1: "Un lave-linge dure dix ans, un téléphone trois. Une réserve unique mélange tout. KeepSous donne à chaque appareil sa cagnotte, calculée à partir de sa durée de vie et du coût de remplacement.",
    p2: "Chaque mois, l'application calcule la somme à mettre de côté : ce qui manque pour remplacer l'appareil, divisé par les mois restants avant sa fin de vie. Pour une voiture, la fin de vie tient aussi compte du kilométrage.",
    p3: "L'autre idée, dans les prévisions : simuler un achat (comptant, en 3 ou 12 fois) pour voir l'effet sur le solde de fin de mois avant de payer.",
    alerte: "Tous les montants sont des centimes entiers, arrondis vers le haut pour les cagnottes : mieux vaut mettre un centime de trop de côté qu'un centime de moins.",
    stats: {
      tests: {
        titre: "Tests",
        desc: "back et front, sans compter les e2e",
      },
      endpoints: {
        titre: "Endpoints",
        desc: "API FastAPI",
      },
      adr: {
        titre: "Décisions",
        desc: "d'architecture documentées",
      },
    },
    legendeAvant: "Extrait de ",
    legendeApres: " : la somme mensuelle est ce qui manque, divisé par les mois restants, arrondi au centime supérieur.",
    boutonEtude: "Lire l'étude de cas",
    boutonCode: "Code privé, démo sur demande",
  },
  imsa: {
    surtitre: 'Stage · iMSA, avril à juin 2025',
    titre: "D'un premier test illisible à 48 tests que toute l'équipe peut reprendre",
    p1: "Mon projet principal était d'automatiser les tests d'un service en ligne de la MSA avec Playwright. Un projet de ce genre existait déjà dans l'entreprise, mais quand je l'ai ouvert, je n'y ai absolument rien compris : les autres équipes n'avaient pas les mêmes besoins que nous.",
    p2: "Je suis donc reparti de la documentation. La première fois que mon test est passé au vert, j'étais admiratif : Playwright se déplaçait sur la page et cliquait sur les boutons comme un vrai utilisateur, mais 200 fois plus vite.",
    p3: "C'est là que la vraie réflexion a commencé : rendre ces tests maintenables et faciles à comprendre, parce que j'allais devoir passer la main.",
    badgeAvant: 'Avant',
    badgeApres: 'Après',
    ariaAvant: 'Avant : le test généré, avec les mêmes clics répétés sur chaque page',
    ariaApres: 'Après : une carte des pages et une seule fonction de navigation',
    resultats: [
      { fort: '48', apres: ' tests end-to-end' },
      { fort: '28', apres: ' méthodes réutilisables' },
      { avant: 'Tests de non-régression : ', fort: "d'une journée à 5-10 minutes" },
    ],
  },
  methode: {
    titre: 'Comment je travaille',
    intro: 'Trois habitudes prises en BUT, en stage et en formation, que je garde sur chaque projet.',
    habitudes: {
      verifier: {
        titre: 'Je vérifie avant de croire.',
        texte:
          "On lit partout que la préparation des données compte plus que l'algorithme. Je l'ai testé sur un TP : c'est plus nuancé, ça dépend du modèle.",
        lien: 'Voir le TP Wine Quality',
      },
      relancer: {
        titre: "Je fais des choses qu'on peut relancer.",
        texte:
          "Mon script Parcoursup télécharge les données officielles, vérifie le fichier, crée la base et nettoie derrière lui. Un seul lancement, le même résultat à chaque fois.",
        lien: 'Voir le projet',
      },
      transmettre: {
        titre: "J'écris pour la personne qui reprendra mon code.",
        texte:
          "Des outils de test pensés pour toute l'équipe chez iMSA, un compte rendu automatique pour chaque règle de nettoyage dans NutriScope.",
        lien: 'Voir le stage',
      },
    },
  },
  projets: {
    titre: 'Autres projets',
    moyenne: 'Moyenne',
    xgboost: 'XGBoost',
    liste: {
      wine: {
        surtitre: 'TP de formation · oct. 2026',
        description: "Prédire la note d'un vin, et mesurer ce qui fait vraiment baisser l'erreur moyenne.",
      },
      parcoursup: {
        surtitre: 'BUT · SAE 2.04',
        description:
          'Un script SQL qui télécharge les 13 870 formations Parcoursup, vérifie le fichier, puis les range dans une base PostgreSQL propre.',
      },
      kfinds: {
        surtitre: 'BUT · SAE 3.02',
        description:
          "Charger un jeu de données, l'afficher en nuage de points et classer une nouvelle donnée d'après ses voisines.",
      },
      universelille: {
        surtitre: 'BUT · SAE 4.01',
        description:
          "Une messagerie instantanée pour les étudiants et le personnel de l'Université de Lille, déployée sur Tomcat.",
      },
    },
  },
  parcours: {
    titre: 'Parcours',
    items: {
      bac: {
        date: '2020 → 2023',
        titre: 'Bac STI2D, spécialité SIN · mention Très Bien',
        detail: 'Lycée Elisa Lemonnier (ex-Edmond Labbé), Douai',
        lien: 'Voir la formation',
      },
      dut: {
        date: '2023 → 2025',
        titre: 'DUT Informatique (2 années de BUT)',
        detail: "IUT de Lille, Villeneuve-d'Ascq · parcours Réalisation d'applications",
        lien: 'Voir la formation',
      },
      imsa: {
        date: 'Avril → juin 2025 · 10 semaines',
        titre: 'Stage développeur full stack, iMSA (Avelin)',
        detail: 'Angular, Spring Boot, Playwright · organisation SAFe',
        lien: '48 tests',
      },
      m2i: {
        date: 'Juillet 2026 → mars 2027 · en cours',
        titre: 'Titre professionnel Développeur IA (RNCP niveau 6)',
        detail: 'M2i · données, Machine Learning, Deep Learning, IA générative, déploiement, RGPD',
        lien: 'NutriScope',
      },
    },
  },
  competences: {
    titre: "Ce que j'utilise",
    legendePleine: 'Compétence acquise',
    legendeVide: 'Apprentissage en cours',
    enCoursSr: "(en cours d'apprentissage)",
    groupes: {
      ia: 'IA et données',
      qualite: 'Qualité et outillage',
      web: 'Développement web',
      langues: 'Langues',
    },
    langues: 'Français · Anglais courant (TOEIC 900/990)',
  },
  horsCode: {
    titre: 'Hors du code',
    texte:
      "Je fais beaucoup de sport. Le dernier défi en date : un trail de 16 km et 300 m de dénivelé sur les terrils de Raismes, après un triathlon en début d'année. Avant ça, il y a eu 7 ans de tennis, de l'escalade, du basket, du foot, et toujours un peu de piscine.",
  },
  etude: {
    meta: {
      titre: 'NutriScope, étude de cas · Nathan Marquis',
      description:
        'NutriScope : nettoyage de 1,3 million de produits Open Food Facts en 8 règles testées, valeurs manquantes signalées, stockage Parquet et PostgreSQL.',
    },
    retour: 'Retour au portfolio',
    surtitre: 'Étude de cas · NutriScope',
    titre: 'Nettoyer 1,3 million de produits alimentaires, et pouvoir le justifier',
    intro:
      "Pour NutriScope, l'application qui dit si un produit alimentaire est bon, j'ai transformé l'export brut d'Open Food Facts en un catalogue que l'application et les modèles peuvent lire sans se tromper. Voici ce que j'ai décidé, pourquoi, et ce que cela a changé.",
    fiche: [
      { label: 'Ma partie', valeur: 'Données : nettoyage, stockage, exports' },
      { label: 'Équipe', valeur: '3 personnes, formation M2i' },
      { label: 'Durée', valeur: '216 heures sur 8 mois, depuis septembre 2026' },
      { label: 'Outils', valeur: 'Python, pandas, DuckDB, PostgreSQL, Parquet, pytest' },
    ],
    sommaire: "Sommaire de l'étude de cas",
    sections: {
      contexte: 'Le projet et ma place dedans',
      donnees: 'Le point de départ : un export de 7,5 Go',
      pipeline: 'Huit règles, toujours dans le même ordre',
      manquants: "Valeurs manquantes : signaler plutôt qu'inventer",
      resultats: 'Ce que le nettoyage a changé',
      stockage: 'Où ranger les données',
      limites: 'Ce qui reste ouvert',
      suite: 'La suite',
    },
    contexte: [
      'NutriScope est le projet fil rouge de ma formation chez M2i : une application qui dit si un produit alimentaire est bon pour la santé et, sinon, ce qui est mieux. Nous sommes trois, pour 216 heures réparties sur 8 mois.',
      'Le cadrage demande une recherche de produit, le scan du code-barres, une fiche synthétique, la comparaison de plusieurs produits, un assistant conversationnel et une interface mobile fluide.',
      "Tout cela repose sur une même matière : les données d'Open Food Facts. Ma partie, c'est ce qui sépare leur export brut de ce que l'application et les modèles peuvent lire sans se tromper : le nettoyage, la stratégie face aux valeurs manquantes, le stockage et les exports. La base PostgreSQL et la pipeline de bout en bout sont un travail d'équipe.",
    ],
    donnees: {
      paragraphes: [
        "Open Food Facts publie sa base en Parquet. L'export du 29 juillet 2026 pèse 7,5 Go : 4 636 471 produits et 111 colonnes. Parquet range les données par colonne, ce qui permet de ne lire que celles dont on a besoin ; c'est pour cela que nous l'avons préféré au CSV.",
        "Il est restreint aux produits vendus en France et aux colonnes utiles : 1 294 426 produits au départ du nettoyage. Le téléchargement est vérifié par une empreinte SHA-256, et le fichier brut n'est jamais modifié.",
        'Ce qui nous a paru le plus sale : des dictionnaires stockés dans des colonnes, des intitulés de colonnes peu explicites, beaucoup de cases vides et des produits en double.',
      ],
      volumes: {
        monde: { titre: 'Export mondial', desc: 'produits, 111 colonnes' },
        france: { titre: 'Périmètre France', desc: 'départ du nettoyage' },
        final: { titre: 'Catalogue final', desc: 'produits retenus' },
      },
    },
    pipeline: {
      intro:
        "Le nettoyage est une suite de huit règles. Chacune reçoit le tableau de produits et rend le tableau corrigé avec un compte rendu : lignes avant, lignes après, lignes touchées, détail par cas. Le rapport de nettoyage se génère à partir de ces comptes rendus.",
      colonnes: { regle: 'Règle', avant: 'Lignes avant', apres: 'Lignes après', touchees: 'Lignes touchées', effet: "Ce qu'elle fait" },
      regles: {
        types: "Fixe le type de chaque colonne. « Données pour 100 g ou à la portion ? » devient un booléen qui peut rester inconnu, au lieu d'être deviné.",
        textes: "Normalise les textes et les listes de tags : 15 859 noms en majuscules corrigés, variantes d'une même marque regroupées (90 636 lignes).",
        doublons: 'Garde un seul produit par code-barres.',
        unites: "Calcule ou recalcule l'énergie en kcal, le sel et le sodium quand ils manquent ou ne concordent pas : 114 995 kcal et 13 463 sodiums recalculés.",
        bornes: 'Traite les valeurs impossibles : plus de 100 g de nutriment pour 100 g de produit, ou valeurs négatives.',
        energie:
          "Recalcule l'énergie à partir des macronutriments (4, 4 et 9 kcal par gramme) quand elle est absente, aberrante ou incohérente : 5 032 valeurs incohérentes recalculées, 73 valeurs supérieures à 900 kcal invalidées.",
        categories: "Déduit le rayon de chaque produit à partir de ses catégories et supprime les 654 920 produits sans catégorie, qu'on ne pourrait pas classer.",
        manquants: 'Applique une décision explicite à chaque colonne (voir plus bas), puis supprime les 90 565 produits sans aucun nutriment.',
      },
      ordre:
        "L'ordre compte. Les unités passent avant les bornes : un sel déduit du sodium peut ainsi être borné à son tour. L'énergie est recalculée après les bornes, pour s'appuyer sur des macronutriments plausibles.",
      tests:
        "Chaque règle a ses tests, et deux tests communs vérifient les mêmes propriétés pour les huit : elle ne modifie pas le tableau qu'on lui passe (pureté), et la rejouer sur sa propre sortie ne change plus rien (idempotence).",
    },
    manquants: {
      paragraphes: [
        "Avant nettoyage, près d'un produit sur trois n'avait pas de valeur pour l'énergie, le sucre ou le sel. La tentation est de boucher les trous avec une médiane. Je ne le fais pas à cette étape.",
        "L'absence n'est pas due au hasard : les fibres, par exemple, sont rarement déclarées par les marques, quelle que soit la qualité du produit. Remplacer ces cases effacerait un signal, et fausserait toute analyse faite avant le découpage entraînement / test. Chaque nutriment clé reçoit donc une colonne booléenne « manquant », et la valeur d'origine reste vide.",
        'Les autres colonnes reçoivent aussi une décision explicite, choisie dans un vocabulaire fermé de six mots (keep, flag, constant, foodgroup_median, mode, drop_column). Une décision inconnue arrête la pipeline plutôt que de laisser passer une faute de frappe.',
      ],
      colonnes: { colonne: 'Colonne', decision: 'Décision', pourquoi: 'Pourquoi' },
      decisions: {
        nutriments: {
          colonne: 'Nutriments clés (énergie, lipides, sucres, fibres, protéines, sel…)',
          pourquoi: "L'absence est informative, pas aléatoire. On signale, on n'impute pas : l'imputation se fera après le découpage entraînement / test.",
        },
        labels: { colonne: 'Labels', pourquoi: 'Aucun label listé veut dire aucun label déclaré.' },
        origines: {
          colonne: 'Origines',
          pourquoi: "Une provenance absente est une vraie inconnue, pas une absence de provenance : d'où un libellé différent de celui des labels.",
        },
        additifs: {
          colonne: 'Additifs',
          pourquoi: "Hypothèse : aucun tag signifie aucun additif déclaré. Un produit peut avoir des additifs non déclarés : c'est un point de vigilance.",
        },
        quantite: {
          colonne: 'Quantité',
          pourquoi: 'Texte libre aux formats hétérogènes (« 500g », « 1L »…) et vide aux deux tiers : aucune valeur de remplacement ne serait fiable.',
        },
        nova: {
          colonne: 'Groupe NOVA (degré de transformation)',
          pourquoi: "Quatre valeurs ordonnées : la plus fréquente suffit pour l'affichage. Un drapeau serait aussi légitime, à trancher en équipe.",
        },
        scores: {
          colonne: 'Nutri-Score (note et lettre)',
          pourquoi: "C'est la cible du futur modèle : y toucher avant le découpage ferait fuiter de l'information.",
        },
      },
      alerte:
        "foodgroup_median, la médiane du rayon, existe dans le vocabulaire, mais aucune colonne ne l'utilise pour l'instant : les nutriments sont signalés, pas imputés.",
    },
    resultats: {
      anomaliesTitre: 'Contrôles métier',
      anomalies: {
        sucres: 'Sucres > 100 g pour 100 g',
        lipides: 'Matières grasses > 100 g pour 100 g',
        sel: 'Sel > 100 g pour 100 g',
        proteines: 'Protéines > 100 g pour 100 g',
        energie: 'Énergie > 3 800 kJ',
        macros: 'Somme des macronutriments > 100 g',
        negatives: 'Énergies négatives',
      },
      colonneAvant: 'Avant',
      colonneApres: 'Après',
      manquantsTitre: 'Valeurs manquantes',
      manquantsNote: 'Produits sans valeur, sur 1 294 426 produits avant nettoyage et 548 913 après.',
      nutriments: { energie: 'Énergie (kcal)', sucres: 'Sucres', sel: 'Sel', fibres: 'Fibres' },
      rayonsTitre: 'Produits par rayon',
      rayonsNote: 'Catalogue final, 548 913 produits. Un produit sur dix reste sans rayon connu.',
      rayons: {
        sucres: 'Produits sucrés',
        viandes: 'Poissons, viandes, œufs',
        laitiers: 'Lait et produits laitiers',
        inconnu: 'Rayon inconnu',
        cereales: 'Céréales et pommes de terre',
        boissons: 'Boissons',
        plats: 'Plats composés',
        sauces: 'Matières grasses et sauces',
        fruits: 'Fruits et légumes',
        sales: 'Snacks salés',
        alcools: 'Boissons alcoolisées',
        bebes: 'Aliments et laits bébé',
      },
    },
    stockage: {
      paragraphes: [
        "Tout descend d'une seule source de vérité : le fichier Parquet nettoyé, produit par le code de nettoyage. On ne corrige jamais une donnée à la main dans la base : une valeur aberrante retourne dans le code sous forme de règle.",
        'Les données elles-mêmes restent hors de Git. On versionne le code qui les produit, le schéma SQL et les rapports : un clone neuf et le README suffisent pour tout régénérer.',
      ],
      colonnes: { usage: 'Usage', lit: 'Lit', pourquoi: 'Pourquoi' },
      liste: {
        api: {
          usage: "L'application (API)",
          lit: 'La base PostgreSQL',
          pourquoi: "Un produit à la fois, retrouvé par son code-barres : c'est ce pour quoi une base relationnelle est faite.",
        },
        analyse: {
          usage: 'Analyses et notebooks',
          lit: 'Les fichiers Parquet, via DuckDB',
          pourquoi: 'Des moyennes et des filtres sur tout le catalogue : DuckDB ne lit que les colonnes utiles.',
        },
        ml: {
          usage: 'Entraînement des modèles',
          lit: 'Un export figé et daté',
          pourquoi: "Le même fichier donne les mêmes résultats d'une exécution à l'autre. Le Parquet nettoyé, lui, est reconstruit à chaque nettoyage.",
        },
      },
      benchmarkTitre: "J'ai mesuré avant de choisir",
      benchmarkIntro:
        'Trois requêtes types, trois moteurs, sur le catalogue nettoyé. Temps médians sur trois exécutions, lecture des données comprise. DuckDB sur Parquet est le plus rapide des trois sur chacune.',
      benchmarkColonnes: { requete: 'Requête' },
      requetes: {
        agregat: 'Moyennes par rayon',
        filtre: 'Produits les plus sucrés par rayon',
        marques: 'Complétude du Nutri-Score par marque',
      },
      benchmarkLimites: [
        "Chaque mesure tourne dans un processus neuf, sans cache partagé. Aucun index n'est ajouté à PostgreSQL pour l'occasion.",
        'Une seule machine, un seul jeu de données, cache du système chaud : les ordres de grandeur sont fiables, pas les valeurs exactes.',
        "pandas lit ici le Parquet complet, pas un CSV : l'écart mesure le moteur, pas le format. Pour les marques, PostgreSQL garde toutes celles d'un produit, le Parquet seulement la première : les deux classements peuvent différer.",
      ],
      exportTitre: 'Un export figé pour le machine learning',
      export: [
        "L'entraînement ne lit ni la base ni le Parquet nettoyé : il lit un fichier Parquet daté, accompagné d'un schema.json qui note l'empreinte SHA-256 du fichier, le commit Git, les filtres appliqués et le rôle de chaque colonne.",
        "On n'y garde que les produits dont le Nutri-Score est connu (de A à E) et dont les sept nutriments clés sont renseignés, avec trois rapports calculés : sucres sur glucides, saturés sur lipides, part des lipides dans l'énergie.",
        'La note numérique du Nutri-Score est marquée « à ne pas utiliser comme variable » : elle donne la réponse que le modèle doit trouver.',
      ],
    },
    limites: [
      'Deux contrôles ne tombent pas à zéro après nettoyage : 1 275 produits ont encore une somme de macronutriments supérieure à 100 g pour 100 g, et 7 énergies sont négatives. Ils figurent dans le rapport.',
      'Le choix du mode pour le groupe NOVA est à confirmer : un drapeau serait tout aussi défendable, car une absence de classification peut elle-même informer.',
      "Pour les additifs, « aucun tag » est traité comme « aucun additif déclaré ». Il reste à vérifier, lors de l'analyse exploratoire, que cela ne crée pas d'écart entre rayons.",
      "Un produit sur dix reste dans le rayon « inconnu ». Je l'ai gardé plutôt que de le deviner, mais il fausse les comparaisons entre rayons s'il n'est pas traité à part.",
    ],
    suite: {
      paragraphe:
        "Le catalogue est prêt. Prochaine étape côté données : découper en entraînement et test, puis imputer les nutriments manquants dans le pipeline du modèle, et non plus en amont. Viennent ensuite le machine learning, le deep learning, l'assistant RAG et la mise en production.",
      boutonCode: 'Voir le code sur GitHub',
      credit: 'Données : © Open Food Facts contributors, licence ODbL pour la base et CC-BY-SA pour les images.',
    },
  },
  etudeKeepsous: {
    meta: {
      titre: "KeepSous, étude de cas · Nathan Marquis",
      description: "KeepSous : application de gestion de budget auto-hébergée, avec une cagnotte par appareil pour les imprévus et une simulation d'achat dans les prévisions.",
    },
    retour: "Retour au portfolio",
    surtitre: "Étude de cas · KeepSous",
    titre: "Un budget qui prévoit la panne du lave-linge",
    intro: "KeepSous est l'application de budget que j'utilise chez moi. Je l'ai conçue, développée et hébergée seul. Voici ce qu'elle fait, ce qui la distingue d'une application classique, comment je l'ai construite et ce que cela m'a appris.",
    fiche: [
      {
        label: "Ma part",
        valeur: "Tout : conception, back, front, déploiement",
      },
      {
        label: "Cadre",
        valeur: "Projet personnel, seul",
      },
      {
        label: "Durée",
        valeur: "4 semaines, depuis octobre 2026",
      },
      {
        label: "Outils",
        valeur: "Next.js, TypeScript, FastAPI, PostgreSQL, Docker, GitHub Actions, Claude Code",
      },
    ],
    sommaire: "Sommaire de l'étude de cas",
    sections: {
      contexte: "Le projet et pourquoi",
      ecrans: "Six écrans, un fil conducteur",
      imprevus: "Imprévus : une cagnotte par appareil",
      previsions: "Prévisions : puis-je me permettre cet achat ?",
      construction: "Comment c'est construit",
      qualite: "Ce qui garde le code honnête",
      ia: "Comment j'ai travaillé avec l'IA",
      difficultes: "Difficultés et apprentissages",
      suite: "La suite",
    },
    contexte: [
      "KeepSous est une application de gestion de budget pour une seule personne ou un seul foyer. Elle sert à estimer et à anticiper, pas à remplacer la banque : on y saisit ses opérations, on les range par catégorie et on regarde ce qu'il reste à vivre.",
      "Elle tourne chez moi, dans Docker, et n'écoute que sur la machine locale. Je l'ouvre sur mon téléphone comme une application installée (PWA) grâce à Tailscale. Elle n'est pas publiée et son code est privé : je peux la montrer en démonstration.",
      "Je suis parti de six maquettes d'écran, en trois thèmes, puis j'ai découpé le travail en tâches. Version 1 en octobre 2026, puis deux séries d'améliorations en novembre : connexion par mot de passe, mobile, et cagnottes par appareil.",
    ],
    ecrans: {
      intro: "Chaque écran répond à une question simple.",
      colonnes: {
        ecran: "Écran",
        question: "Question à laquelle il répond",
      },
      liste: {
        accueil: {
          nom: "Accueil",
          question: "Où en suis-je ce mois-ci ?",
        },
        operations: {
          nom: "Opérations",
          question: "Qu'est-ce que j'ai dépensé, et où ?",
        },
        enveloppes: {
          nom: "Enveloppes",
          question: "Est-ce que je tiens mes plafonds par catégorie ?",
        },
        imprevus: {
          nom: "Imprévus",
          question: "Combien mettre de côté pour remplacer mes appareils ?",
        },
        previsions: {
          nom: "Prévisions",
          question: "Que va devenir mon solde, et puis-je me permettre cet achat ?",
        },
        parametres: {
          nom: "Paramètres",
          question: "Comment régler l'appli, importer ou exporter mes données ?",
        },
      },
      themes: "Trois thèmes sont livrés : clair vert, clair rouge et sombre vert.",
    },
    imprevus: {
      paragraphes: [
        "La première version avait une réserve unique pour tous les imprévus. Elle disait combien mettre de côté, mais pas pour quoi. J'ai remplacé cette réserve par une cagnotte par appareil (décision d'architecture n° 22).",
        "Chaque appareil a un type (électroménager, véhicule, téléphone et informatique, multimédia, logement, divers), une date d'achat, une durée de vie et un coût de remplacement. L'application en déduit sa fin de vie, la part de vie déjà utilisée et un niveau de risque de panne : faible sous 60 %, moyen sous 85 %, élevé au-delà.",
        "La somme mensuelle est ce qui manque pour remplacer l'appareil, divisé par les mois restants, arrondi au centime supérieur. Pour un véhicule, la fin de vie est la plus proche entre l'âge et le kilométrage extrapolé. Un appareil qui a dépassé sa fin de vie est « en sursis » : il reste dans le budget, avec un mois pour finir de remplir sa cagnotte.",
      ],
      alerte: "Quand le budget est serré, l'application remplit les cagnottes par ordre de priorité et indique pour chacune si elle est couverte, partielle ou non couverte, avec le manque total.",
      exemple: {
        colonnes: {
          appareil: "Appareil",
          vie: "Vie utilisée",
          cout: "Coût",
          cagnotte: "Déjà en cagnotte",
          mois: "Mois restants",
          parMois: "À mettre de côté ce mois-ci",
        },
        appareils: {
          lavelinge: {
            nom: "Lave-linge",
          },
          voiture: {
            nom: "Voiture, 150 000 km sur 250 000",
          },
          telephone: {
            nom: "Téléphone en sursis",
            vie: "100 % ou plus",
          },
        },
        legende: "Appareils et montants fictifs.",
      },
      legendeAvant: "Extrait de ",
      legendeApres: " : la somme mensuelle est ce qui manque, divisé par les mois restants, arrondi au centime supérieur.",
    },
    previsions: {
      paragraphes: [
        "L'écran Prévisions extrapole le solde des mois à venir. Il contient un simulateur d'achat : on choisit un achat (téléviseur, ordinateur, vacances, voiture) ou un montant libre, et un paiement comptant, en 3 fois ou en 12 fois.",
        "Le solde simulé de fin de mois est le solde de départ, plus les revenus, moins les dépenses, moins la première échéance. Trois scénarios : les chiffres actuels, un mois plus serré (+20 % de dépenses) ou plus léger (−20 %).",
        "Le montant est découpé en centimes entiers : les échéances suivantes sont arrondies vers le bas et la première absorbe le reste. La simulation tourne dans le navigateur : rien n'est envoyé au serveur ni enregistré.",
      ],
      colonnes: {
        verdict: "Verdict",
        condition: "Condition",
      },
      verdicts: {
        possible: {
          nom: "Possible",
          condition: "Le solde simulé reste au-dessus de la marge de sécurité",
        },
        serre: {
          nom: "Serré",
          condition: "Le solde simulé reste positif, mais sous la marge",
        },
        horsDePortee: {
          nom: "Hors de portée",
          condition: "Le solde simulé passe sous zéro",
        },
      },
    },
    construction: [
      "Le front est en Next.js (TypeScript strict, Tailwind, daisyUI). Le back est en FastAPI, avec une base PostgreSQL de 9 tables. Le navigateur appelle /api/* sur Next.js, qui relaie vers le back : pas de CORS à gérer.",
      "Chaque fonctionnalité a son dossier côté back (routes, schémas, service, modèles). Les types TypeScript sont générés à partir du contrat OpenAPI de FastAPI : si le back change, le front ne compile plus tant qu'il n'est pas à jour.",
      "Les montants sont des entiers en centimes, toujours positifs : c'est la catégorie qui donne le sens (dépense ou revenu). La base est écrite en SQL à la main, avec des correctifs numérotés et suivis dans une table.",
      "Tout tourne dans Docker. Un seul Makefile pilote le projet sous Linux et sous Windows (PowerShell). Une sauvegarde quotidienne de la base est planifiée, et la restauration est testée.",
    ],
    qualite: {
      paragraphes: [
        "Le projet compte 462 tests côté back et 372 côté front, plus 19 scénarios de bout en bout (Playwright) qui tournent sur une pile Docker jetable.",
        "La CI GitHub Actions lance deux jobs en parallèle à chaque envoi : la vérification complète (lint, typage, tests, contrat d'API) et les tests de bout en bout.",
        "Les formules de cagnotte existent côté back (Python) et côté front (aperçu en direct). Des tests vérifient que les deux donnent les mêmes résultats.",
        "Chaque choix structurant est écrit dans une décision d'architecture : il y en a 23, de « montants en centimes » à « dépendances Python gérées par uv ».",
      ],
      colonnes: {
        mesure: "Mesure",
        valeur: "Valeur",
      },
      mesures: {
        ecrans: "Écrans",
        tables: "Tables SQL",
        endpoints: "Endpoints FastAPI",
        adr: "Décisions d'architecture",
        testsBack: "Tests back",
        testsFront: "Tests front",
        testsE2e: "Tests de bout en bout",
        themes: "Thèmes",
        commits: "Commits",
      },
      notes: {
        ecrans: "+ connexion et hors ligne",
        commits: "du 13 oct. au 9 nov. 2026",
      },
    },
    ia: [
      "J'ai utilisé Claude Code pour écrire une grande partie du code. Mon rôle : concevoir les écrans, décider de l'architecture, découper le travail en tâches et relire.",
      "Pour cadrer l'IA, j'ai écrit un document d'architecture avec des règles explicites pour elle, une fiche par fonctionnalité, des décisions d'architecture et deux guides de style (back et front). Les tâches de lint et de tests sont déléguées à un agent dédié.",
      "Les garde-fous sont les tests, le typage et la CI : un changement ne passe que si tout est vert. Ce que je ne délègue pas : le choix des règles de calcul et la décision de remplacer la réserve globale par une cagnotte par appareil.",
    ],
    difficultes: {
      intro: "À RÉDIGER PAR NATHAN : 2 ou 3 difficultés, chacune avec ce que j'en ai appris.",
      points: [
        {
          titre: "À RÉDIGER PAR NATHAN",
          texte: "À RÉDIGER PAR NATHAN",
        },
        {
          titre: "À RÉDIGER PAR NATHAN",
          texte: "À RÉDIGER PAR NATHAN",
        },
        {
          titre: "À RÉDIGER PAR NATHAN",
          texte: "À RÉDIGER PAR NATHAN",
        },
      ],
    },
    suite: {
      paragraphe: "La version 1 est terminée et utilisée. Il reste des finitions : tester l'installation sur téléphone et le rendu à 375 px. Les pistes suivantes sont notées, pas démarrées : objectifs d'épargne, import de relevés bancaires en CSV.",
      boutonCode: "Code privé, démo sur demande",
      credit: "Maquettes et captures : données fictives.",
    },
    visuels: {
      accueil: {
        alt: "Écran d'accueil de KeepSous en thème clair vert : reste à vivre du mois et récapitulatif des opérations, avec des données fictives.",
        legende: "Données fictives.",
      },
      imprevus: {
        alt: "Écran Imprévus en thème clair vert : une cagnotte par appareil, avec le niveau de risque de panne et la somme à mettre de côté ce mois-ci.",
        legende: "Données fictives.",
      },
      imprevusSombre: {
        alt: "Le même écran Imprévus en thème sombre vert.",
        legende: "Même écran en thème sombre vert. Données fictives.",
      },
      imprevusMobile: {
        alt: "Écran Imprévus de KeepSous sur téléphone, en thème clair vert : la liste des appareils avec leurs cagnottes, avec des données fictives.",
        legende: "Écran Imprévus sur téléphone (PWA). Données fictives.",
      },
      previsions: {
        alt: "Écran Prévisions avec le simulateur d'achat : un achat payé en 3 fois et son verdict sur le solde de fin de mois.",
        legende: "Données fictives.",
      },
    },
  },
  footer: {
    titre: 'Travaillons ensemble.',
    texte:
      "Je cherche un stage du 18 janvier au 26 février 2027, puis un CDI à partir de mars. J'habite à Flines-lez-Raches : métropole lilloise, Douaisis, hybride ou à distance.",
    basDePage: '© 2026 Nathan Marquis · site fait avec Angular et DaisyUI',
  },
};
