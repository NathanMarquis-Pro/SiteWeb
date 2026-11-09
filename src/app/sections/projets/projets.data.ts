import { ProjetId } from '../../i18n/translations';

export interface Projet {
  /** Identifiant : clé dans les dictionnaires. */
  id: ProjetId;
  nom: string;
  /** Identifiant HTML de la carte, pour les liens internes. */
  ancre?: string;
  badges: string[];
  /** Lien GitHub du projet : à renseigner quand il est public. */
  lien?: string;
  /** Barres de comparaison (carte Wine Quality uniquement). */
  barres?: { cle: 'moyenne' | 'xgboost'; valeur: number; pourcent: number }[];
}

export const PROJETS: Projet[] = [
  {
    id: 'wine',
    nom: 'Wine Quality',
    ancre: 'wine',
    badges: ['scikit-learn', 'XGBoost', 'Optuna'],
    barres: [
      { cle: 'moyenne', valeur: 0.685, pourcent: 100 },
      { cle: 'xgboost', valeur: 0.4, pourcent: 58 },
    ],
  },
  {
    id: 'parcoursup',
    nom: 'Parcoursup',
    ancre: 'parcoursup',
    badges: ['SQL', 'PostgreSQL', 'Bash'],
    lien: 'https://github.com/NathanMarquis-Pro/ParcoursupDatabase',
  },
  {
    id: 'kfinds',
    nom: 'K_Finds',
    badges: ['Java', 'JavaFX', 'Classification'],
    lien: 'https://github.com/NathanMarquis-Pro/K_Finds',
  },
  {
    id: 'universelille',
    nom: 'UniVerseLille',
    badges: ['Java', 'JEE', 'PostgreSQL'],
    lien: 'https://github.com/NathanMarquis-Pro/UniVerseLille',
  },
];
