import { NUTRISCOPE } from '../../sections/nutriscope/nutriscope.data';
import { en } from '../../i18n/en';
import { fr } from '../../i18n/fr';
import { ANOMALIES, BENCHMARK, MANQUANTS, RAYONS, REGLES, TOTAL_APRES, TOTAL_AVANT, VOLUMES } from './etude-nutriscope.data';

/**
 * Garde-fous contre une faute de frappe dans les chiffres recopiés du rapport de nettoyage :
 * ils doivent s'enchaîner, se recouper et rester alignés sur ceux de la section de l'accueil.
 */
describe("chiffres de l'étude de cas", () => {
  const volume = (id: string) => VOLUMES.find((v) => v.id === id)!.valeur;

  it("les règles s'enchaînent : les lignes après l'une sont les lignes avant la suivante", () => {
    REGLES.slice(1).forEach((regle, i) => {
      expect(regle.avant).withContext(regle.nom).toBe(REGLES[i].apres);
    });
    expect(REGLES.length).toBe(8);
  });

  it("part du périmètre France et aboutit au catalogue final de l'accueil", () => {
    expect(REGLES[0].avant).toBe(volume('france'));
    expect(REGLES[REGLES.length - 1].apres).toBe(volume('final'));
    expect(volume('france')).toBe(NUTRISCOPE.produitsDepart);
    expect(volume('final')).toBe(NUTRISCOPE.produitsArrivee);
    expect(TOTAL_AVANT).toBe(NUTRISCOPE.produitsDepart);
    expect(TOTAL_APRES).toBe(NUTRISCOPE.produitsArrivee);
  });

  it("les lignes supprimées recoupent les statistiques de l'accueil", () => {
    const regle = (nom: string) => REGLES.find((r) => r.nom === nom)!;
    const supprimees = (nom: string) => regle(nom).avant - regle(nom).apres;
    const stat = (id: string) => NUTRISCOPE.stats.find((s) => s.id === id)!.valeur;
    expect(supprimees('deduplicate_codes')).toBe(stat('doublons'));
    expect(supprimees('handle_empty_categories')).toBe(stat('inclassables'));
    expect(supprimees('missing_values_strategy')).toBe(stat('vides'));
  });

  it('les produits par rayon font le catalogue final, du plus fourni au moins fourni', () => {
    expect(RAYONS.reduce((somme, r) => somme + r.produits, 0)).toBe(TOTAL_APRES);
    const tries = [...RAYONS].sort((a, b) => b.produits - a.produits);
    expect(RAYONS.map((r) => r.id)).toEqual(tries.map((r) => r.id));
  });

  it('les contrôles et les manquants ne montent jamais après nettoyage, sauf en proportion', () => {
    for (const a of ANOMALIES) expect(a.apres).withContext(a.id).toBeLessThanOrEqual(a.avant);
    for (const m of MANQUANTS) {
      expect(m.apres / TOTAL_APRES).withContext(m.id).toBeLessThan(m.avant / TOTAL_AVANT);
    }
  });

  it("le benchmark désigne DuckDB comme le plus rapide, comme l'affirment les textes", () => {
    for (const ligne of BENCHMARK) {
      expect(ligne.duckdb).withContext(ligne.id).toBeLessThan(Math.min(ligne.pandas, ligne.postgres));
    }
    expect(fr.etude.stockage.benchmarkIntro).toContain('DuckDB');
    expect(en.etude.stockage.benchmarkIntro).toContain('DuckDB');
  });

  it("les textes qui citent un chiffre le citent comme les données (français et anglais)", () => {
    const nombre = (n: number, langue: 'fr' | 'en') => new Intl.NumberFormat(langue === 'fr' ? 'fr-FR' : 'en-US').format(n).replace(/\s/g, ' ');
    const pipeline = (langue: 'fr' | 'en') => Object.values((langue === 'fr' ? fr : en).etude.pipeline.regles).join(' ').replace(/\s/g, ' ');
    for (const langue of ['fr', 'en'] as const) {
      const regles = pipeline(langue);
      for (const n of [90565, 654920, 114995, 13463, 5032, 15859, 90636]) {
        expect(regles).withContext(`${langue} ${n}`).toContain(nombre(n, langue));
      }
    }
  });
});
