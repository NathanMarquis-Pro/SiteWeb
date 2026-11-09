import { StatId } from '../../i18n/translations';

export interface LigneCode {
  texte: string;
  alerte?: boolean;
}

export const NUTRISCOPE = {
  produitsDepart: 1294426,
  produitsArrivee: 548913,
  /** Nombre de jalons livrés (les premiers de la liste). */
  jalonsFaits: 3,
  /** Statistiques, dans l'ordre d'affichage (textes dans les dictionnaires, par identifiant). */
  stats: [
    { id: 'doublons', valeur: 28 },
    { id: 'inclassables', valeur: 654920 },
    { id: 'vides', valeur: 90565 },
  ] as { id: StatId; valeur: number }[],
  fonctionExtraite: 'missing_values_strategy',
  /** Extrait réel de cleaning.py, à ne pas modifier. */
  code: [
    { texte: 'match decision:' },
    { texte: '    case "keep":' },
    { texte: '        continue' },
    { texte: '    case "flag":' },
    { texte: '        res, nb = _apply_flag(res, column)' },
    { texte: '    case "mode":' },
    { texte: '        res, nb = _apply_mode(res, column)' },
    { texte: '    ...' },
    { texte: '    case _:' },
    { texte: `        raise ValueError(f"Décision inconnue '{decision}'")`, alerte: true },
  ] as LigneCode[],
};
