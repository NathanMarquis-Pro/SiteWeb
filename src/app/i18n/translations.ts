export type Langue = 'fr' | 'en';

/** Identifiants partagés entre les données (ordre, liens, logos) et les dictionnaires (textes). */
export type NavCle = 'nutriscope' | 'imsa' | 'projets' | 'parcours';
export type StatId = 'doublons' | 'inclassables' | 'vides';
export type HabitudeId = 'verifier' | 'relancer' | 'transmettre';
export type ProjetId = 'wine' | 'parcoursup' | 'kfinds' | 'universelille';
export type EtapeId = 'bac' | 'dut' | 'imsa' | 'm2i';
export type GroupeCompetencesId = 'ia' | 'qualite' | 'web';

// Une clé est ajoutée ici à chaque section (nutriscope, imsa…).
export interface Translations {
  meta: { titre: string; description: string };
  nav: Record<NavCle, string> & {
    contact: string;
    langue: string;
    ouvrirMenu: string;
  };
  hero: {
    dispo: string;
    identite: string;
    titre1: string;
    titre2: string;
    paragraphe1: string;
    paragraphe2: string;
    bouton1: string;
    bouton2: string;
    legendePhoto: string;
  };
  nutriscope: {
    surtitre: string;
    titre: string;
    intro: string;
    jalons: { nom: string; date?: string }[];
    h3: string;
    /** Peut contenir {depart} et {arrivee}, remplacés par des nombres formatés. */
    p1: string;
    p2: string;
    p3: string;
    alerte: string;
    stats: Record<StatId, { titre: string; desc: string }>;
    legendeAvant: string;
    legendeApres: string;
    boutonEtude: string;
    boutonCode: string;
  };
  imsa: {
    surtitre: string;
    titre: string;
    p1: string;
    p2: string;
    p3: string;
    badgeAvant: string;
    badgeApres: string;
    ariaAvant: string;
    ariaApres: string;
    resultats: { avant?: string; fort: string; apres?: string }[];
  };
  methode: {
    titre: string;
    intro: string;
    habitudes: Record<HabitudeId, { titre: string; texte: string; lien?: string }>;
  };
  projets: {
    titre: string;
    moyenne: string;
    xgboost: string;
    liste: Record<ProjetId, { surtitre: string; description: string }>;
  };
  parcours: {
    titre: string;
    items: Record<EtapeId, { date: string; titre: string; detail: string; lien?: string }>;
  };
  competences: {
    titre: string;
    legendePleine: string;
    legendeVide: string;
    enCoursSr: string;
    groupes: Record<GroupeCompetencesId | 'langues', string>;
    langues: string;
  };
  horsCode: { titre: string; texte: string };
  footer: { titre: string; texte: string; basDePage: string };
}
