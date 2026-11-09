export type Langue = 'fr' | 'en';
/** Pages pré-rendues, chacune dans les deux langues. */
export type PageId = 'accueil' | 'nutriscope';

/** Identifiants partagés entre les données (ordre, liens, logos) et les dictionnaires (textes). */
export type NavCle = 'nutriscope' | 'imsa' | 'projets' | 'parcours';
export type StatId = 'doublons' | 'inclassables' | 'vides';
export type HabitudeId = 'verifier' | 'relancer' | 'transmettre';
export type ProjetId = 'wine' | 'parcoursup' | 'kfinds' | 'universelille';
export type EtapeId = 'bac' | 'dut' | 'imsa' | 'm2i';
export type GroupeCompetencesId = 'ia' | 'qualite' | 'web';
export type SectionEtudeId = 'contexte' | 'donnees' | 'pipeline' | 'manquants' | 'resultats' | 'stockage' | 'limites' | 'suite';
export type VolumeId = 'monde' | 'france' | 'final';
export type RegleId = 'types' | 'textes' | 'doublons' | 'unites' | 'bornes' | 'energie' | 'categories' | 'manquants';
export type DecisionId = 'nutriments' | 'labels' | 'origines' | 'additifs' | 'quantite' | 'nova' | 'scores';
export type AnomalieId = 'sucres' | 'lipides' | 'sel' | 'proteines' | 'energie' | 'macros' | 'negatives';
export type NutrimentId = 'energie' | 'sucres' | 'sel' | 'fibres';
export type RayonId =
  | 'sucres'
  | 'viandes'
  | 'laitiers'
  | 'inconnu'
  | 'cereales'
  | 'boissons'
  | 'plats'
  | 'sauces'
  | 'fruits'
  | 'sales'
  | 'alcools'
  | 'bebes';
export type RequeteId = 'agregat' | 'filtre' | 'marques';
export type UsageId = 'api' | 'analyse' | 'ml';

// Une clé est ajoutée ici à chaque section (nutriscope, imsa…).
export interface Translations {
  meta: { titre: string; poste: string; description: string };
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
  etude: EtudeNutriscope;
  footer: { titre: string; texte: string; basDePage: string };
}

/** Page d'étude de cas NutriScope. Les chiffres vivent dans `etude-nutriscope.data.ts`, les textes ici. */
export interface EtudeNutriscope {
  meta: { titre: string; description: string };
  retour: string;
  surtitre: string;
  titre: string;
  intro: string;
  /** Fiche d'identité du projet (rôle, équipe, durée…), dans l'ordre d'affichage. */
  fiche: { label: string; valeur: string }[];
  sommaire: string;
  sections: Record<SectionEtudeId, string>;
  contexte: string[];
  donnees: {
    paragraphes: string[];
    volumes: Record<VolumeId, { titre: string; desc: string }>;
  };
  pipeline: {
    intro: string;
    colonnes: { regle: string; avant: string; apres: string; touchees: string; effet: string };
    regles: Record<RegleId, string>;
    ordre: string;
    tests: string;
  };
  manquants: {
    paragraphes: string[];
    colonnes: { colonne: string; decision: string; pourquoi: string };
    decisions: Record<DecisionId, { colonne: string; pourquoi: string }>;
    alerte: string;
  };
  resultats: {
    anomaliesTitre: string;
    anomalies: Record<AnomalieId, string>;
    colonneAvant: string;
    colonneApres: string;
    manquantsTitre: string;
    manquantsNote: string;
    nutriments: Record<NutrimentId, string>;
    rayonsTitre: string;
    rayonsNote: string;
    rayons: Record<RayonId, string>;
  };
  stockage: {
    paragraphes: string[];
    colonnes: { usage: string; lit: string; pourquoi: string };
    liste: Record<UsageId, { usage: string; lit: string; pourquoi: string }>;
    benchmarkTitre: string;
    benchmarkIntro: string;
    requetes: Record<RequeteId, string>;
    benchmarkColonnes: { requete: string };
    benchmarkLimites: string[];
    exportTitre: string;
    export: string[];
  };
  limites: string[];
  suite: { paragraphe: string; boutonCode: string; credit: string };
}
