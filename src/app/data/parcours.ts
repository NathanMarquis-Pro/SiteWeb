export interface EtapeParcours {
  /** Logo affiché en 40 px ; absent = emplacement vide signalé dans la carte. */
  logo?: string;
  /** Lien de la carte : ancre d'une section ou page externe (le libellé est dans les dictionnaires). */
  href?: string;
  externe?: boolean;
}

/** Même ordre que `parcours.items` des dictionnaires : de la plus ancienne à la plus récente. */
export const ETAPES_PARCOURS: EtapeParcours[] = [
  {
    logo: 'assets/education/logo_Elisa_Lemonnier.png',
    href: 'https://www.lycee-elisalemonnier.fr/site/nos-formations/',
    externe: true,
  },
  {
    logo: 'assets/education/logo_iut_lille_coupe.png',
    href: 'https://formation.univ-lille.fr/fr/offre-de-formation/but-BUT/bachelor-universitaire-de-technologie-informatique-MG082352.html',
    externe: true,
  },
  { logo: 'assets/experiences/imsa.jpg', href: '#imsa' },
  { logo: 'assets/education/logo_m2i_320.jpg', href: '#nutriscope' },
];

/** Index de l'étape en cours (point vert) : la dernière. */
export const ETAPE_EN_COURS = ETAPES_PARCOURS.length - 1;
