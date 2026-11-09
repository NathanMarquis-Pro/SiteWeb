import { AnomalieId, DecisionId, NutrimentId, RayonId, RegleId, RequeteId, SectionEtudeId, UsageId, VolumeId } from '../../i18n/translations';

/**
 * Chiffres de l'étude de cas, repris à l'identique de `docs/data/rapport_nettoyage.md` (nettoyage du
 * 2026-11-04), de `docs/data/benchmark.md` et de `docs/data/synthese` du dépôt NutriScope.
 * Les textes sont dans les dictionnaires, indexés par les mêmes identifiants.
 */

/** Ordre des sections, donc du sommaire. */
export const SECTIONS: SectionEtudeId[] = ['contexte', 'donnees', 'pipeline', 'manquants', 'resultats', 'stockage', 'limites', 'suite'];

const PRODUITS_FRANCE = 1294426;
const PRODUITS_FINAUX = 548913;

export const VOLUMES: { id: VolumeId; valeur: number }[] = [
  { id: 'monde', valeur: 4636471 },
  { id: 'france', valeur: PRODUITS_FRANCE },
  { id: 'final', valeur: PRODUITS_FINAUX },
];

/** Les huit règles, dans l'ordre de `CLEANING_RULES` (src/pipeline.py). `nom` est le nom de la fonction. */
export const REGLES: { id: RegleId; nom: string; avant: number; apres: number; touchees: number }[] = [
  { id: 'types', nom: 'set_column_types', avant: 1294426, apres: 1294426, touchees: 0 },
  { id: 'textes', nom: 'normalize_texts', avant: 1294426, apres: 1294426, touchees: 1267475 },
  { id: 'doublons', nom: 'deduplicate_codes', avant: 1294426, apres: 1294398, touchees: 28 },
  { id: 'unites', nom: 'normalize_units', avant: 1294398, apres: 1294398, touchees: 128128 },
  { id: 'bornes', nom: 'limit_nutriments', avant: 1294398, apres: 1294398, touchees: 3116 },
  { id: 'energie', nom: 'fix_energy', avant: 1294398, apres: 1294398, touchees: 5629 },
  { id: 'categories', nom: 'handle_empty_categories', avant: 1294398, apres: 639478, touchees: 730189 },
  { id: 'manquants', nom: 'missing_values_strategy', avant: 639478, apres: 548913, touchees: 624437 },
];

/** Décisions par colonne (`DEFAULT_STRATEGY`, src/strategy.py). */
export const DECISIONS: { id: DecisionId; decision: string }[] = [
  { id: 'nutriments', decision: 'flag' },
  { id: 'labels', decision: 'constant:none' },
  { id: 'origines', decision: 'constant:unknown' },
  { id: 'additifs', decision: 'constant:none' },
  { id: 'quantite', decision: 'drop_column' },
  { id: 'nova', decision: 'mode' },
  { id: 'scores', decision: 'keep' },
];

/** Contrôles métier avant / après nettoyage (rapport, section 3). */
export const ANOMALIES: { id: AnomalieId; avant: number; apres: number }[] = [
  { id: 'sucres', avant: 45, apres: 0 },
  { id: 'lipides', avant: 45, apres: 0 },
  { id: 'sel', avant: 55, apres: 0 },
  { id: 'proteines', avant: 35, apres: 0 },
  { id: 'energie', avant: 113, apres: 0 },
  { id: 'macros', avant: 2738, apres: 1275 },
  { id: 'negatives', avant: 8, apres: 7 },
];

/** Valeurs manquantes avant (sur `PRODUITS_FRANCE`) et après (sur `PRODUITS_FINAUX`) nettoyage (rapport, section 4). */
export const MANQUANTS: { id: NutrimentId; avant: number; apres: number }[] = [
  { id: 'energie', avant: 379793, apres: 20849 },
  { id: 'sucres', avant: 387206, apres: 25988 },
  { id: 'sel', avant: 444280, apres: 39928 },
  { id: 'fibres', avant: 897022, apres: 267386 },
];
export const TOTAL_AVANT = PRODUITS_FRANCE;
export const TOTAL_APRES = PRODUITS_FINAUX;

/** Produits par rayon après nettoyage, du plus fourni au moins fourni (rapport, section 5). */
export const RAYONS: { id: RayonId; produits: number }[] = [
  { id: 'sucres', produits: 105501 },
  { id: 'viandes', produits: 84335 },
  { id: 'laitiers', produits: 57899 },
  { id: 'inconnu', produits: 55054 },
  { id: 'cereales', produits: 54291 },
  { id: 'boissons', produits: 44288 },
  { id: 'plats', produits: 37435 },
  { id: 'sauces', produits: 36136 },
  { id: 'fruits', produits: 34419 },
  { id: 'sales', produits: 28742 },
  { id: 'alcools', produits: 8362 },
  { id: 'bebes', produits: 2451 },
];

/** Qui lit quoi (docs/data/architecture.md, section 2). */
export const USAGES: UsageId[] = ['api', 'analyse', 'ml'];

/** Temps médians (secondes) sur trois exécutions, une machine (docs/data/benchmark.md). */
export const BENCHMARK: { id: RequeteId; pandas: number; duckdb: number; postgres: number }[] = [
  { id: 'agregat', pandas: 0.09, duckdb: 0.03, postgres: 0.25 },
  { id: 'filtre', pandas: 0.17, duckdb: 0.04, postgres: 0.24 },
  { id: 'marques', pandas: 0.52, duckdb: 0.06, postgres: 0.83 },
];
