import { Translations } from './translations';

export const en: Translations = {
  meta: {
    titre: 'Nathan Marquis · AI Developer',
    poste: 'AI Developer',
    description:
      'Trainee AI developer (level 6 qualification, March 2027). NutriScope, data cleaning, automated testing. Internship from January 2027, permanent role from March, Lille area.',
  },
  nav: {
    nutriscope: 'NutriScope',
    keepsous: 'KeepSous',
    imsa: 'iMSA internship',
    projets: 'Projects',
    parcours: 'Background',
    contact: 'Contact me',
    langue: 'Language',
    ouvrirMenu: 'Open menu',
  },
  hero: {
    dispo: 'Available: internship from 18 January to 26 February 2027, then a permanent role from March',
    identite: 'Nathan Marquis, AI developer',
    titre1: 'Your data,',
    titre2: 'my future missions',
    paragraphe1:
      "I've wanted to be a developer since secondary school, when I wrote my first scripts in Scratch. Today I'm training as an AI developer at M2i (French level 6 professional qualification, March 2027).",
    paragraphe2:
      "Everyone says AI is going to replace jobs. I'd rather check for myself, and learn how to use it.",
    bouton1: 'See my current project',
    bouton2: 'Download my CV',
    legendePhoto: 'In Flines-lez-Raches, near Lille',
  },
  nutriscope: {
    surtitre: "What I'm working on",
    titre: 'NutriScope',
    intro:
      "With two classmates, I'm building an app that tells you whether a food product is good for you, and if not, what's better. 216 hours over 8 months, on real Open Food Facts data.",
    jalons: [
      { nom: 'Scoping', date: 'Sept. 2026' },
      { nom: 'Database', date: 'Sept. 2026' },
      { nom: 'Data cleaning', date: 'Oct. 2026' },
      { nom: 'Machine learning' },
      { nom: 'Deep learning' },
      { nom: 'RAG assistant' },
      { nom: 'Deployment' },
    ],
    h3: 'My part: making the data usable',
    p1: 'We started with {depart} products and ended up with {arrivee}. I removed more than half of the catalogue, and I can justify every single row I dropped.',
    p2: 'Each of my rules produces its own report with figures. The cleaning report builds itself, so the whole team can see what changed and why.',
    p3: 'I then split the data into Parquet files with DuckDB and prepared the feature file for the upcoming models.',
    alerte:
      "I don't make up missing nutrient values: I flag them. Filling them in now would bias the models; that has to happen after the train/test split.",
    stats: {
      doublons: { titre: 'Duplicates', desc: 'same barcode' },
      inclassables: { titre: 'Unclassifiable', desc: 'no category, no aisle' },
      vides: { titre: 'Empty', desc: 'no nutrients' },
    },
    legendeAvant: 'Excerpt from ',
    legendeApres: ': every column gets an explicit decision, and an unknown decision stops the pipeline.',
    boutonEtude: 'Read the case study',
    boutonCode: 'See the code on GitHub',
  },
  keepsous: {
    surtitre: "My side project",
    titre: "KeepSous",
    intro: "A budgeting app that I designed and host myself: six screens, a PostgreSQL database, 44 endpoints. What sets it apart: an unexpected-expense reserve that sets money aside device by device. Private code, app not published.",
    jalons: [
      {
        nom: "Mockups and scoping",
        date: "Oct. 2026",
      },
      {
        nom: "Docker and CI foundations",
        date: "Oct. 2026",
      },
      {
        nom: "Version 1: 10 features",
        date: "Oct. 2026",
      },
      {
        nom: "Version 1.1 improvements",
        date: "Nov. 2026",
      },
      {
        nom: "Login, mobile, device funds",
        date: "Nov. 2026",
      },
      {
        nom: "Finishing touches",
      },
    ],
    h3: "One fund per device, not a single global reserve",
    p1: "A washing machine lasts ten years, a phone three. A single reserve mixes everything up. KeepSous gives each device its own fund, computed from its lifespan and its replacement cost.",
    p2: "Each month, the app works out how much to set aside: what is missing to replace the device, divided by the months left before its end of life. For a car, the end of life also takes mileage into account.",
    p3: "The other idea, in the forecasts: simulate a purchase (in cash, in 3 or 12 instalments) to see the effect on the end-of-month balance before paying.",
    alerte: "Every amount is stored as whole cents, rounded up for the funds: better to set aside one cent too many than one too few.",
    stats: {
      tests: {
        titre: "Tests",
        desc: "back end and front end, e2e not included",
      },
      endpoints: {
        titre: "Endpoints",
        desc: "FastAPI API",
      },
      adr: {
        titre: "Decisions",
        desc: "architecture decisions on record",
      },
    },
    legendeAvant: "Excerpt from ",
    legendeApres: ": the monthly sum is what is missing, divided by the months left, rounded up to the next cent.",
    boutonEtude: "Read the case study",
    boutonCode: "Private code, demo on request",
  },
  imsa: {
    surtitre: 'Internship · iMSA, April to June 2025',
    titre: 'From one unreadable test to 48 tests the whole team can maintain',
    p1: "My main project was automating the tests of an online service for the MSA (French agricultural social security) with Playwright. A similar project already existed in the company, but when I opened it, I couldn't make sense of it at all: the other teams didn't have the same needs as ours.",
    p2: 'So I started again from the documentation. The first time my test turned green, I was amazed: Playwright moved around the page and clicked the buttons like a real user, only 200 times faster.',
    p3: "That's when the real thinking began: making these tests maintainable and easy to understand, because I would have to hand them over.",
    badgeAvant: 'Before',
    badgeApres: 'After',
    ariaAvant: 'Before: the generated test, with the same clicks repeated on every page',
    ariaApres: 'After: a map of the pages and a single navigation function',
    resultats: [
      { fort: '48', apres: ' end-to-end tests' },
      { fort: '28', apres: ' reusable methods' },
      { avant: 'Regression testing: ', fort: 'from a full day to 5–10 minutes' },
    ],
  },
  methode: {
    titre: 'How I work',
    intro: 'Three habits picked up during my degree, my internship and my training, which I keep on every project.',
    habitudes: {
      verifier: {
        titre: 'I check before I believe.',
        texte:
          "You read everywhere that data preparation matters more than the algorithm. I tested it on a lab exercise: it's more nuanced, it depends on the model.",
        lien: 'See the Wine Quality exercise',
      },
      relancer: {
        titre: 'I build things you can run again.',
        texte:
          'My Parcoursup script downloads the official data, checks the file, builds the database and cleans up after itself. One run, the same result every time.',
        lien: 'See the project',
      },
      transmettre: {
        titre: 'I write for whoever takes over my code.',
        texte:
          'Test tools designed for the whole team at iMSA, an automatic report for every cleaning rule in NutriScope.',
        lien: 'See the internship',
      },
    },
  },
  projets: {
    titre: 'Other projects',
    moyenne: 'Average',
    xgboost: 'XGBoost',
    liste: {
      wine: {
        surtitre: 'Training lab · Oct. 2026',
        description: "Predicting a wine's rating, and measuring what actually lowers the average error.",
      },
      parcoursup: {
        surtitre: 'University project · SAE 2.04',
        description:
          'A SQL script that downloads the 13,870 Parcoursup programmes, checks the file, then loads them into a clean PostgreSQL database.',
      },
      kfinds: {
        surtitre: 'University project · SAE 3.02',
        description:
          'Load a dataset, plot it as a scatter chart and classify a new point based on its neighbours.',
      },
      universelille: {
        surtitre: 'University project · SAE 4.01',
        description:
          'An instant messaging app for students and staff at the University of Lille, deployed on Tomcat.',
      },
    },
  },
  parcours: {
    titre: 'Background',
    items: {
      bac: {
        date: '2020 → 2023',
        titre: 'Technology baccalaureate (STI2D, IT and digital systems) · highest honours',
        detail: 'Lycée Elisa Lemonnier (formerly Edmond Labbé), Douai',
        lien: 'See the programme',
      },
      dut: {
        date: '2023 → 2025',
        titre: 'DUT in Computer Science (2-year university degree)',
        detail: "IUT de Lille, Villeneuve-d'Ascq · application development track",
        lien: 'See the programme',
      },
      imsa: {
        date: 'April → June 2025 · 10 weeks',
        titre: 'Full-stack developer internship, iMSA (Avelin)',
        detail: 'Angular, Spring Boot, Playwright · SAFe organisation',
        lien: '48 tests',
      },
      m2i: {
        date: 'July 2026 → March 2027 · ongoing',
        titre: 'AI Developer professional qualification (French level 6)',
        detail: 'M2i · data, machine learning, deep learning, generative AI, deployment, GDPR',
        lien: 'NutriScope',
      },
    },
  },
  competences: {
    titre: 'What I use',
    legendePleine: 'Skill acquired',
    legendeVide: 'Currently learning',
    enCoursSr: '(currently learning)',
    groupes: {
      ia: 'AI and data',
      qualite: 'Quality and tooling',
      web: 'Web development',
      langues: 'Languages',
    },
    langues: 'French · Fluent English (TOEIC 900/990)',
  },
  horsCode: {
    titre: 'Away from the keyboard',
    texte:
      'I do a lot of sport. My latest challenge: a 16 km trail run with 300 m of elevation over the slag heaps of Raismes, after a triathlon earlier this year. Before that came 7 years of tennis, climbing, basketball, football, and always a bit of swimming.',
  },
  etude: {
    meta: {
      titre: 'NutriScope case study · Nathan Marquis',
      description:
        'NutriScope: cleaning 1.3 million Open Food Facts products with 8 tested rules, flagged missing values, and Parquet and PostgreSQL storage.',
    },
    retour: 'Back to portfolio',
    surtitre: 'Case study · NutriScope',
    titre: 'Cleaning 1.3 million food products, and being able to justify it',
    intro:
      'For NutriScope, the app that tells you whether a food product is good for you, I turned the raw Open Food Facts export into a catalogue that the app and the models can read without getting it wrong. Here is what I decided, why, and what it changed.',
    fiche: [
      { label: 'My part', valeur: 'Data: cleaning, storage, exports' },
      { label: 'Team', valeur: '3 people, M2i programme' },
      { label: 'Duration', valeur: '216 hours over 8 months, since September 2026' },
      { label: 'Tools', valeur: 'Python, pandas, DuckDB, PostgreSQL, Parquet, pytest' },
    ],
    sommaire: 'Case study contents',
    sections: {
      contexte: 'The project and my place in it',
      donnees: 'Starting point: a 7.5 GB export',
      pipeline: 'Eight rules, always in the same order',
      manquants: "Missing values: flag them, don't make them up",
      resultats: 'What the cleaning changed',
      stockage: 'Where to keep the data',
      limites: 'What is still open',
      suite: "What's next",
    },
    contexte: [
      "NutriScope is the main project of my programme at M2i: an app that tells you whether a food product is good for your health and, if not, what's better. There are three of us, with 216 hours spread over 8 months.",
      'The brief asks for product search, barcode scanning, a summary product page, comparison of several products, a conversational assistant and a smooth mobile interface.',
      'All of this rests on one material: Open Food Facts data. My part is what stands between their raw export and what the app and the models can read without getting it wrong: cleaning, the strategy for missing values, storage and exports. The PostgreSQL database and the end-to-end pipeline are a team effort.',
    ],
    donnees: {
      paragraphes: [
        'Open Food Facts publishes its database as Parquet. The export of 29 July 2026 weighs 7.5 GB: 4,636,471 products and 111 columns. Parquet stores data by column, so you only read the ones you need; that is why we preferred it to CSV.',
        'It is narrowed to products sold in France and to the useful columns: 1,294,426 products at the start of the cleaning. The download is checked with a SHA-256 hash, and the raw file is never modified.',
        'What looked dirtiest to us: dictionaries stored inside columns, vague column names, lots of empty cells and duplicate products.',
      ],
      volumes: {
        monde: { titre: 'Worldwide export', desc: 'products, 111 columns' },
        france: { titre: 'France scope', desc: 'start of the cleaning' },
        final: { titre: 'Final catalogue', desc: 'products kept' },
      },
    },
    pipeline: {
      intro:
        'The cleaning is a series of eight rules. Each one takes the table of products and returns the corrected table with a report: rows before, rows after, rows touched, detail per case. The cleaning report is generated from these reports.',
      colonnes: { regle: 'Rule', avant: 'Rows before', apres: 'Rows after', touchees: 'Rows touched', effet: 'What it does' },
      regles: {
        types: 'Sets the type of each column. "Data per 100 g or per serving?" becomes a boolean that can stay unknown, instead of being guessed.',
        textes: 'Normalises texts and tag lists: 15,859 upper-case names fixed, spelling variants of the same brand merged (90,636 rows).',
        doublons: 'Keeps a single product per barcode.',
        unites: 'Computes or recomputes energy in kcal, salt and sodium when they are missing or inconsistent: 114,995 kcal and 13,463 sodium values recomputed.',
        bornes: 'Handles impossible values: more than 100 g of a nutrient per 100 g of product, or negative values.',
        energie:
          'Recomputes energy from the macronutrients (4, 4 and 9 kcal per gram) when it is missing, absurd or inconsistent: 5,032 inconsistent values recomputed, 73 values above 900 kcal invalidated.',
        categories: "Derives each product's aisle from its categories and removes the 654,920 products with no category, which couldn't be classified.",
        manquants: 'Applies an explicit decision to each column (see below), then removes the 90,565 products with no nutrient at all.',
      },
      ordre:
        'Order matters. Units come before bounds: a salt value derived from sodium can then be bounded in turn. Energy is recomputed after the bounds, so it relies on plausible macronutrients.',
      tests:
        'Each rule has its own tests, and two shared tests check the same properties for all eight: a rule does not modify the table it is given (purity), and replaying it on its own output changes nothing more (idempotence).',
    },
    manquants: {
      paragraphes: [
        "Before cleaning, almost one product in three had no value for energy, sugar or salt. The temptation is to fill the gaps with a median. I don't do that at this stage.",
        'The gaps are not random: fibre, for example, is rarely declared by brands, whatever the quality of the product. Filling those cells would erase a signal, and bias any analysis done before the train/test split. So each key nutrient gets a boolean "missing" column, and the original value stays empty.',
        'The other columns also get an explicit decision, chosen from a closed vocabulary of six words (keep, flag, constant, foodgroup_median, mode, drop_column). An unknown decision stops the pipeline instead of letting a typo through.',
      ],
      colonnes: { colonne: 'Column', decision: 'Decision', pourquoi: 'Why' },
      decisions: {
        nutriments: {
          colonne: 'Key nutrients (energy, fat, sugars, fibre, protein, salt…)',
          pourquoi: "Missing is informative, not random. We flag, we don't impute: imputation will happen after the train/test split.",
        },
        labels: { colonne: 'Labels', pourquoi: 'No listed label means no declared label.' },
        origines: {
          colonne: 'Origins',
          pourquoi: 'A missing origin is a genuine unknown, not an absence of origin: hence a different value from labels.',
        },
        additifs: {
          colonne: 'Additives',
          pourquoi: 'Assumption: no tag means no declared additive. A product may have undeclared additives: a point to watch.',
        },
        quantite: {
          colonne: 'Quantity',
          pourquoi: 'Free text in inconsistent formats ("500g", "1L"…) and two-thirds empty: no replacement value would be reliable.',
        },
        nova: {
          colonne: 'NOVA group (degree of processing)',
          pourquoi: 'Four ordered values: the most frequent one is enough for display. A flag would be just as legitimate, to be settled as a team.',
        },
        scores: {
          colonne: 'Nutri-Score (score and letter)',
          pourquoi: 'This is the target of the future model: touching it before the split would leak information.',
        },
      },
      alerte:
        'foodgroup_median, the aisle median, exists in the vocabulary, but no column uses it for now: nutrients are flagged, not imputed.',
    },
    resultats: {
      anomaliesTitre: 'Business checks',
      anomalies: {
        sucres: 'Sugars > 100 g per 100 g',
        lipides: 'Fat > 100 g per 100 g',
        sel: 'Salt > 100 g per 100 g',
        proteines: 'Protein > 100 g per 100 g',
        energie: 'Energy > 3,800 kJ',
        macros: 'Sum of macronutrients > 100 g',
        negatives: 'Negative energy values',
      },
      colonneAvant: 'Before',
      colonneApres: 'After',
      manquantsTitre: 'Missing values',
      manquantsNote: 'Products with no value, out of 1,294,426 products before cleaning and 548,913 after.',
      nutriments: { energie: 'Energy (kcal)', sucres: 'Sugars', sel: 'Salt', fibres: 'Fibre' },
      rayonsTitre: 'Products per aisle',
      rayonsNote: 'Final catalogue, 548,913 products. One product in ten still has no known aisle.',
      rayons: {
        sucres: 'Sugary snacks',
        viandes: 'Fish, meat, eggs',
        laitiers: 'Milk and dairy products',
        inconnu: 'Unknown aisle',
        cereales: 'Cereals and potatoes',
        boissons: 'Beverages',
        plats: 'Composite foods',
        sauces: 'Fats and sauces',
        fruits: 'Fruits and vegetables',
        sales: 'Salty snacks',
        alcools: 'Alcoholic beverages',
        bebes: 'Baby foods and milks',
      },
    },
    stockage: {
      paragraphes: [
        'Everything comes from a single source of truth: the cleaned Parquet file, produced by the cleaning code. We never fix a value by hand in the database: an absurd value goes back into the code as a rule.',
        'The data itself stays out of Git. We version the code that produces it, the SQL schema and the reports: a fresh clone and the README are enough to regenerate everything.',
      ],
      colonnes: { usage: 'Use', lit: 'Reads', pourquoi: 'Why' },
      liste: {
        api: {
          usage: 'The app (API)',
          lit: 'The PostgreSQL database',
          pourquoi: 'One product at a time, found by its barcode: exactly what a relational database is for.',
        },
        analyse: {
          usage: 'Analysis and notebooks',
          lit: 'Parquet files, through DuckDB',
          pourquoi: 'Averages and filters over the whole catalogue: DuckDB only reads the columns it needs.',
        },
        ml: {
          usage: 'Model training',
          lit: 'A frozen, dated export',
          pourquoi: 'The same file gives the same results from one run to the next. The cleaned Parquet, by contrast, is rebuilt at every cleaning run.',
        },
      },
      benchmarkTitre: 'I measured before choosing',
      benchmarkIntro:
        'Three typical queries, three engines, on the cleaned catalogue. Median times over three runs, reading the data included. DuckDB on Parquet is the fastest of the three on each one.',
      benchmarkColonnes: { requete: 'Query' },
      requetes: {
        agregat: 'Averages per aisle',
        filtre: 'Sugariest products per aisle',
        marques: 'Nutri-Score completeness per brand',
      },
      benchmarkLimites: [
        'Each measurement runs in a fresh process, with no shared cache. No index is added to PostgreSQL for the occasion.',
        'One machine, one dataset, warm operating-system cache: the orders of magnitude are reliable, the exact values are not.',
        'pandas reads the full Parquet file here, not a CSV: the gap measures the engine, not the format. For brands, PostgreSQL keeps every brand of a product, Parquet only the first: the two rankings may differ.',
      ],
      exportTitre: 'A frozen export for machine learning',
      export: [
        "Training reads neither the database nor the cleaned Parquet: it reads a dated Parquet file, with a schema.json recording the file's SHA-256 hash, the Git commit, the filters applied and the role of each column.",
        'It only keeps products whose Nutri-Score is known (A to E) and whose seven key nutrients are filled in, with three computed ratios: sugars over carbohydrates, saturated over total fat, and the share of fat in energy.',
        'The numeric Nutri-Score is marked "do not use as a feature": it is the answer the model is meant to find.',
      ],
    },
    limites: [
      'Two checks do not drop to zero after cleaning: 1,275 products still have a sum of macronutrients above 100 g per 100 g, and 7 energy values are negative. Both appear in the report.',
      'Using the mode for the NOVA group is still to be confirmed: a flag would be just as defensible, since a missing classification can itself be informative.',
      'For additives, "no tag" is treated as "no declared additive". We still need to check, during exploratory analysis, that this does not create gaps between aisles.',
      'One product in ten remains in the "unknown" aisle. I kept it rather than guess, but it distorts comparisons between aisles unless it is handled separately.',
    ],
    suite: {
      paragraphe:
        'The catalogue is ready. Next step on the data side: split into training and test sets, then impute the missing nutrients inside the model pipeline rather than upstream. Machine learning, deep learning, the RAG assistant and deployment come after that.',
      boutonCode: 'See the code on GitHub',
      credit: 'Data: © Open Food Facts contributors, ODbL licence for the database and CC-BY-SA for the images.',
    },
  },
  etudeKeepsous: {
    meta: {
      titre: "KeepSous case study · Nathan Marquis",
      description: "KeepSous: a self-hosted budgeting app with one fund per device for unexpected expenses and a purchase simulation in the forecasts.",
    },
    retour: "Back to portfolio",
    surtitre: "Case study · KeepSous",
    titre: "A budget that plans for the washing machine breaking down",
    intro: "KeepSous is the budgeting app I use at home. I designed, built and host it on my own. Here is what it does, what sets it apart from a typical app, how I built it and what I learned.",
    fiche: [
      {
        label: "My part",
        valeur: "Everything: design, back end, front end, deployment",
      },
      {
        label: "Setting",
        valeur: "Personal project, solo",
      },
      {
        label: "Duration",
        valeur: "4 weeks, since October 2026",
      },
      {
        label: "Tools",
        valeur: "Next.js, TypeScript, FastAPI, PostgreSQL, Docker, GitHub Actions, Claude Code",
      },
    ],
    sommaire: "Case study contents",
    sections: {
      contexte: "The project and why",
      ecrans: "Six screens, one thread",
      imprevus: "Unexpected expenses: one fund per device",
      previsions: "Forecasts: can I afford this purchase?",
      construction: "How it is built",
      qualite: "What keeps the code honest",
      ia: "How I worked with AI",
      difficultes: "Difficulties and lessons",
      suite: "What's next",
    },
    contexte: [
      "KeepSous is a budgeting app for one person or one household. It is for estimating and planning ahead, not for replacing the bank: you enter your transactions, sort them into categories and see what is left to live on.",
      "It runs at home, in Docker, and only listens on the local machine. I open it on my phone as an installed app (PWA) through Tailscale. It is not published and its code is private: I can show it in a demo.",
      "I started from six screen mockups, in three themes, then split the work into tasks. Version 1 came in October 2026, followed by two rounds of improvements in November: password login, mobile, and per-device funds.",
    ],
    ecrans: {
      intro: "Each screen answers one simple question.",
      colonnes: {
        ecran: "Screen",
        question: "Question it answers",
      },
      liste: {
        accueil: {
          nom: "Home",
          question: "Where do I stand this month?",
        },
        operations: {
          nom: "Transactions",
          question: "What did I spend, and where?",
        },
        enveloppes: {
          nom: "Envelopes",
          question: "Am I keeping to my caps for each category?",
        },
        imprevus: {
          nom: "Unexpected",
          question: "How much should I set aside to replace my devices?",
        },
        previsions: {
          nom: "Forecasts",
          question: "What will my balance look like, and can I afford this purchase?",
        },
        parametres: {
          nom: "Settings",
          question: "How do I set up the app and import or export my data?",
        },
      },
      themes: "Three themes ship with it: light green, light red and dark green.",
    },
    imprevus: {
      paragraphes: [
        "The first version had a single reserve for all unexpected expenses. It said how much to set aside, but not what for. I replaced it with one fund per device (architecture decision no. 22).",
        "Each device has a type (household, vehicle, phone and IT, multimedia, housing, miscellaneous), a purchase date, a lifespan and a replacement cost. The app derives its end of life, the share of life already used and a failure risk level: low below 60%, medium below 85%, high above that.",
        "The monthly sum is what is missing to replace the device, divided by the months left, rounded up to the next cent. For a vehicle, the end of life is whichever comes first: age or extrapolated mileage. A device past its end of life is \"on borrowed time\": it stays in the budget, with one month left to fill its fund.",
      ],
      alerte: "When the budget is tight, the app fills the funds in priority order and shows whether each one is covered, partly covered or not covered, along with the total shortfall.",
      exemple: {
        colonnes: {
          appareil: "Device",
          vie: "Life used",
          cout: "Cost",
          cagnotte: "Already in the fund",
          mois: "Months left",
          parMois: "To set aside this month",
        },
        appareils: {
          lavelinge: {
            nom: "Washing machine",
          },
          voiture: {
            nom: "Car, 150,000 of 250,000 km",
          },
          telephone: {
            nom: "Phone on borrowed time",
            vie: "100% or more",
          },
        },
        legende: "Fictional devices and amounts.",
      },
      legendeAvant: "Excerpt from ",
      legendeApres: ": the monthly sum is what is missing, divided by the months left, rounded up to the next cent.",
    },
    previsions: {
      paragraphes: [
        "The Forecasts screen extrapolates the balance for the coming months. It includes a purchase simulator: you pick a purchase (television, computer, holidays, car) or a free amount, and pay in cash, in 3 or in 12 instalments.",
        "The simulated end-of-month balance is the starting balance, plus income, minus expenses, minus the first instalment. There are three scenarios: current figures, a tighter month (+20% spending) or a lighter one (−20%).",
        "The amount is split into whole cents: later instalments are rounded down and the first one absorbs the remainder. The simulation runs in the browser: nothing is sent to the server or stored.",
      ],
      colonnes: {
        verdict: "Verdict",
        condition: "Condition",
      },
      verdicts: {
        possible: {
          nom: "Possible",
          condition: "The simulated balance stays above the safety margin",
        },
        serre: {
          nom: "Tight",
          condition: "The simulated balance stays positive, but below the margin",
        },
        horsDePortee: {
          nom: "Unaffordable",
          condition: "The simulated balance drops below zero",
        },
      },
    },
    construction: [
      "The front end is Next.js (strict TypeScript, Tailwind, daisyUI). The back end is FastAPI, with a 9-table PostgreSQL database. The browser calls /api/* on Next.js, which forwards to the back end: no CORS to manage.",
      "Each feature has its own folder on the back end (routes, schemas, service, models). The TypeScript types are generated from FastAPI's OpenAPI contract: if the back end changes, the front end stops compiling until it is updated.",
      "Amounts are integers in cents, always positive: the category gives the direction (expense or income). The schema is written in SQL by hand, with numbered patches tracked in a table.",
      "Everything runs in Docker. A single Makefile drives the project on Linux and on Windows (PowerShell). A daily database backup is scheduled, and restoring it is tested.",
    ],
    qualite: {
      paragraphes: [
        "The project has 462 back-end tests and 372 front-end tests, plus 19 end-to-end scenarios (Playwright) that run on a throwaway Docker stack.",
        "GitHub Actions CI runs two jobs in parallel on every push: the full check (lint, typing, tests, API contract) and the end-to-end tests.",
        "The fund formulas exist on the back end (Python) and on the front end (live preview). Tests check that both give the same results.",
        "Every structural choice is written down as an architecture decision: there are 23, from \"amounts in cents\" to \"Python dependencies managed by uv\".",
      ],
      colonnes: {
        mesure: "Measure",
        valeur: "Value",
      },
      mesures: {
        ecrans: "Screens",
        tables: "SQL tables",
        endpoints: "FastAPI endpoints",
        adr: "Architecture decisions",
        testsBack: "Back-end tests",
        testsFront: "Front-end tests",
        testsE2e: "End-to-end tests",
        themes: "Themes",
        commits: "Commits",
      },
      notes: {
        ecrans: "+ login and offline",
        commits: "13 Oct to 9 Nov 2026",
      },
    },
    ia: [
      "I used Claude Code to write a large part of the code. My role: design the screens, decide the architecture, split the work into tasks and review.",
      "To steer the AI, I wrote an architecture document with explicit rules for it, one sheet per feature, architecture decisions and two style guides (back end and front end). Lint and test runs are delegated to a dedicated agent.",
      "The safeguards are the tests, the typing and the CI: a change only goes through if everything is green. What I do not delegate: the choice of calculation rules and the decision to replace the global reserve with one fund per device.",
    ],
    difficultes: {
      intro: "TO BE WRITTEN BY NATHAN: 2 or 3 difficulties, each with what I learned from it.",
      points: [
        {
          titre: "TO BE WRITTEN BY NATHAN",
          texte: "TO BE WRITTEN BY NATHAN",
        },
        {
          titre: "TO BE WRITTEN BY NATHAN",
          texte: "TO BE WRITTEN BY NATHAN",
        },
        {
          titre: "TO BE WRITTEN BY NATHAN",
          texte: "TO BE WRITTEN BY NATHAN",
        },
      ],
    },
    suite: {
      paragraphe: "Version 1 is finished and in use. A few finishing touches remain: testing the phone install and the rendering at 375 px. The next ideas are written down, not started: savings goals and importing bank statements from CSV.",
      boutonCode: "Private code, demo on request",
      credit: "Mockups and screenshots: fictional data.",
    },
    visuels: {
      accueil: {
        alt: "KeepSous home screen in the light green theme: the month's remaining budget and a summary of transactions, with fictional data.",
        legende: "Fictional data.",
      },
      imprevus: {
        alt: "Unexpected screen in the light green theme: one fund per device, with the failure risk level and the sum to set aside this month.",
        legende: "Fictional data.",
      },
      imprevusSombre: {
        alt: "The same Unexpected screen in the dark green theme.",
        legende: "Same screen in the dark green theme. Fictional data.",
      },
      imprevusMobile: {
        alt: "KeepSous Unexpected screen on a phone, in the light green theme: the list of devices with their funds, with fictional data.",
        legende: "Unexpected screen on a phone (PWA). Fictional data.",
      },
      previsions: {
        alt: "Forecasts screen with the purchase simulator: a purchase paid in 3 instalments and its verdict on the end-of-month balance.",
        legende: "Fictional data.",
      },
    },
  },
  footer: {
    titre: "Let's work together.",
    texte:
      "I'm looking for an internship from 18 January to 26 February 2027, then a permanent position from March. I live in Flines-lez-Raches: Lille area, Douai area, hybrid or remote.",
    basDePage: '© 2026 Nathan Marquis · built with Angular and DaisyUI',
  },
};
