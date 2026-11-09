import { Translations } from './translations';

export const en: Translations = {
  meta: { titre: 'Nathan Marquis · AI Developer' },
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
    stats: [
      { titre: 'Duplicates', desc: 'same barcode' },
      { titre: 'Unclassifiable', desc: 'no category, no aisle' },
      { titre: 'Empty', desc: 'no nutrients' },
    ],
    legendeAvant: 'Excerpt from ',
    legendeApres: ': every column gets an explicit decision, and an unknown decision stops the pipeline.',
    boutonEtude: 'Read the case study',
    boutonCode: 'See the code on GitHub',
  },
};
