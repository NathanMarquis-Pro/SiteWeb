import { Translations } from './translations';

export const en: Translations = {
  meta: {
    titre: 'Nathan Marquis · AI Developer',
    description:
      'Trainee AI developer (level 6 qualification, March 2027). NutriScope, data cleaning, automated testing. Internship from January 2027, permanent role from March, Lille area.',
  },
  nav: {
    nutriscope: 'NutriScope',
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
  footer: {
    titre: "Let's work together.",
    texte:
      "I'm looking for an internship from 18 January to 26 February 2027, then a permanent position from March. I live in Flines-lez-Raches: Lille area, Douai area, hybrid or remote.",
    basDePage: '© 2026 Nathan Marquis · built with Angular and DaisyUI',
  },
};
