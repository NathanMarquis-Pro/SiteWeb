import { AppareilId, EcranId, MesureId, SectionKeepsousId, VerdictId, VisuelKeepsousId } from '../../i18n/translations';

/**
 * Chiffres de l'étude de cas KeepSous, comptés dans le dépôt privé le 9 novembre 2026.
 * Les textes sont dans les dictionnaires, indexés par les mêmes identifiants.
 */

/** Ordre des sections, donc du sommaire. */
export const SECTIONS: SectionKeepsousId[] = ['contexte', 'ecrans', 'imprevus', 'previsions', 'construction', 'qualite', 'ia', 'difficultes', 'suite'];

export const ECRANS: EcranId[] = ['accueil', 'operations', 'enveloppes', 'imprevus', 'previsions', 'parametres'];
export const VERDICTS: VerdictId[] = ['possible', 'serre', 'horsDePortee'];

/** Mesures du tableau récapitulatif, dans l'ordre d'affichage. */
export const MESURES: Record<MesureId, number> = {
  ecrans: 6,
  tables: 9,
  endpoints: 44,
  adr: 23,
  testsBack: 462,
  testsFront: 372,
  testsE2e: 19,
  themes: 3,
  commits: 102,
};
export const ORDRE_MESURES: MesureId[] = ['ecrans', 'tables', 'endpoints', 'adr', 'testsBack', 'testsFront', 'testsE2e', 'themes', 'commits'];
/** Tests back + front, sans les scénarios de bout en bout. */
export const TOTAL_TESTS = MESURES.testsBack + MESURES.testsFront;

/**
 * Exemples de cagnottes (appareils fictifs), calculés avec `monthly_need_cents` le 9 novembre 2026,
 * pour le mois de novembre 2026. `vieUtilisee` est en pourcents (100 = 100 % ou plus).
 */
export const APPAREILS: { id: AppareilId; vieUtilisee: number; coutCents: number; cagnotteCents: number; moisRestants: number; parMoisCents: number }[] = [
  { id: 'lavelinge', vieUtilisee: 40, coutCents: 60000, cagnotteCents: 18000, moisRestants: 72, parMoisCents: 584 },
  { id: 'voiture', vieUtilisee: 59, coutCents: 800000, cagnotteCents: 300000, moisRestants: 56, parMoisCents: 8929 },
  { id: 'telephone', vieUtilisee: 100, coutCents: 40000, cagnotteCents: 10000, moisRestants: 1, parMoisCents: 30000 },
];

/**
 * Captures publiées, par ordre d'ajout. Les fichiers vont dans `public/assets/keepsous/` ;
 * tant qu'un identifiant n'est pas listé ici, sa figure n'est pas rendue (aucun lien cassé).
 */
export const VISUELS: VisuelKeepsousId[] = [];
export const FICHIERS_VISUELS: Record<VisuelKeepsousId, { fichier: string; largeur: number; hauteur: number }> = {
  accueil: { fichier: 'assets/keepsous/keepsous-accueil.webp', largeur: 1600, hauteur: 1000 },
  imprevus: { fichier: 'assets/keepsous/keepsous-imprevus.webp', largeur: 1600, hauteur: 1000 },
  imprevusSombre: { fichier: 'assets/keepsous/keepsous-imprevus-sombre.webp', largeur: 1600, hauteur: 1000 },
  imprevusMobile: { fichier: 'assets/keepsous/keepsous-imprevus-mobile.webp', largeur: 800, hauteur: 1600 },
  previsions: { fichier: 'assets/keepsous/keepsous-previsions-simulation.webp', largeur: 1600, hauteur: 1000 },
};
