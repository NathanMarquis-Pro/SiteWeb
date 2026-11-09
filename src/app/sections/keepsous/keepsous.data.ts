import { StatKeepsousId } from '../../i18n/translations';
import { MESURES, TOTAL_TESTS } from '../../pages/etude-keepsous/etude-keepsous.data';
import { LigneCode } from '../nutriscope/nutriscope.data';

export const KEEPSOUS = {
  /** Nombre d'étapes livrées (les premières de la liste). */
  jalonsFaits: 5,
  /** Statistiques, dans l'ordre d'affichage (textes dans les dictionnaires, par identifiant). */
  stats: [
    { id: 'tests', valeur: TOTAL_TESTS },
    { id: 'endpoints', valeur: MESURES.endpoints },
    { id: 'adr', valeur: MESURES.adr },
  ] as { id: StatKeepsousId; valeur: number }[],
  fonctionExtraite: 'monthly_need_cents',
  /** Extrait de `calculator.py` (docstrings retirées), à ne pas modifier. */
  code: [
    { texte: 'def remaining_months(month: date, eol: date) -> int:' },
    { texte: '    return max(1, (eol.year - month.year) * 12 + eol.month - month.month)' },
    { texte: '' },
    { texte: '' },
    { texte: 'def monthly_need_cents(spec: ApplianceSpec, balance: int, month: date, today: date) -> int:' },
    { texte: '    if spec.is_misc:' },
    { texte: '        return spec.fixed_monthly_cents or 0' },
    { texte: '    missing = spec.replacement_cost_cents - balance' },
    { texte: '    eol = end_of_life(spec, today)' },
    { texte: '    if missing <= 0 or eol is None:' },
    { texte: '        return 0' },
    { texte: '    return _ceil_div(missing, remaining_months(month, eol))' },
  ] as LigneCode[],
};
