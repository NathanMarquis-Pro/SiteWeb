import { EtapeId } from '../../i18n/translations';

export interface EtapeParcours {
  id: EtapeId;
  /** Logo affiché en 40 px de haut. */
  logo: string;
  /** Lien de la carte : ancre d'une section ou page externe (le libellé est dans les dictionnaires). */
  href: string;
  externe?: boolean;
}

/** De la plus ancienne à la plus récente. Les textes sont dans les dictionnaires, par identifiant. */
export const ETAPES_PARCOURS: EtapeParcours[] = [
  {
    id: 'bac',
    logo: 'assets/education/logo_Elisa_Lemonnier.png',
    href: 'https://www.lycee-elisalemonnier.fr/site/nos-formations/',
    externe: true,
  },
  {
    id: 'dut',
    logo: 'assets/education/logo_iut_lille_coupe.png',
    href: 'https://formation.univ-lille.fr/fr/offre-de-formation/but-BUT/bachelor-universitaire-de-technologie-informatique-MG082352.html',
    externe: true,
  },
  { id: 'imsa', logo: 'assets/experiences/imsa.jpg', href: '#imsa' },
  { id: 'm2i', logo: 'assets/education/logo_m2i_320.jpg', href: '#nutriscope' },
];

/** Étape en cours (point vert). */
export const ETAPE_EN_COURS: EtapeId = 'm2i';
