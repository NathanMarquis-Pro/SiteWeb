export interface LigneCode {
  texte: string;
  alerte?: boolean;
}

export const NUTRISCOPE = {
  produitsDepart: 1294426,
  produitsArrivee: 548913,
  /** Nombre de jalons livrés (les premiers de la liste). */
  jalonsFaits: 3,
  /** Valeurs des 3 statistiques, dans l'ordre d'affichage. */
  stats: [28, 654920, 90565],
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
