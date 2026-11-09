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
  footer: {
    titre: 'Travaillons ensemble.',
    texte:
      "Je cherche un stage du 18 janvier au 26 février 2027, puis un CDI à partir de mars. J'habite à Flines-lez-Raches : métropole lilloise, Douaisis, hybride ou à distance.",
    basDePage: '© 2026 Nathan Marquis · site fait avec Angular et DaisyUI',
  },
};
