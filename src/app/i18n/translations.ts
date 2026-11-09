export type Langue = 'fr' | 'en';

// Une clé est ajoutée ici à chaque section (nutriscope, imsa…).
export interface Translations {
  meta: { titre: string };
  nav: {
    nutriscope: string;
    imsa: string;
    projets: string;
    parcours: string;
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
    stats: { titre: string; desc: string }[];
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
}
