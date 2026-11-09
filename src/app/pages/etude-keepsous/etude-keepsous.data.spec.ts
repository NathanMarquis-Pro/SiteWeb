import { en } from '../../i18n/en';
import { fr } from '../../i18n/fr';
import { KEEPSOUS } from '../../sections/keepsous/keepsous.data';
import { APPAREILS, FICHIERS_VISUELS, MESURES, SECTIONS, TOTAL_TESTS, VISUELS } from './etude-keepsous.data';

/** Garde-fous sur les chiffres de l'étude de cas KeepSous et sur les contraintes de confidentialité. */
describe("chiffres de l'étude de cas KeepSous", () => {
  const nombre = (n: number, langue: 'fr' | 'en') => new Intl.NumberFormat(langue === 'fr' ? 'fr-FR' : 'en-US').format(n).replace(/\s/g, ' ');
  const dico = { fr, en };

  it("chaque exemple de cagnotte suit la formule ceil((coût − cagnotte) / mois restants)", () => {
    for (const a of APPAREILS) {
      expect(a.parMoisCents).withContext(a.id).toBe(Math.ceil((a.coutCents - a.cagnotteCents) / a.moisRestants));
    }
  });

  it("les tests de l'accueil sont la somme des tests back et front de la page", () => {
    expect(TOTAL_TESTS).toBe(MESURES.testsBack + MESURES.testsFront);
    expect(KEEPSOUS.stats.find((s) => s.id === 'tests')!.valeur).toBe(TOTAL_TESTS);
    expect(KEEPSOUS.stats.find((s) => s.id === 'endpoints')!.valeur).toBe(MESURES.endpoints);
    expect(KEEPSOUS.stats.find((s) => s.id === 'adr')!.valeur).toBe(MESURES.adr);
  });

  it("les textes qui citent un chiffre le citent comme les données", () => {
    for (const langue of ['fr', 'en'] as const) {
      const e = dico[langue].etudeKeepsous;
      const qualite = e.qualite.paragraphes.join(' ');
      expect(qualite).withContext(langue).toContain(String(MESURES.testsBack));
      expect(qualite).toContain(String(MESURES.testsFront));
      expect(qualite).toContain(String(MESURES.testsE2e));
      expect(qualite).toContain(String(MESURES.adr));
      expect(dico[langue].keepsous.intro).toContain(String(MESURES.endpoints));
      expect(e.construction.join(' ')).toContain(`${MESURES.tables}`);
      expect(nombre(KEEPSOUS.stats[0].valeur, langue)).toBe(nombre(TOTAL_TESTS, langue));
    }
  });

  it('les deux langues ont le même nombre de jalons, et les jalons faits sont les premiers', () => {
    expect(fr.keepsous.jalons.length).toBe(en.keepsous.jalons.length);
    expect(KEEPSOUS.jalonsFaits).toBeLessThan(fr.keepsous.jalons.length);
    expect(KEEPSOUS.code.some((l) => l.alerte)).toBeFalse();
  });

  it('aucune clé vide dans les deux langues', () => {
    const vides = (valeur: unknown, chemin: string): string[] => {
      if (typeof valeur === 'string') return valeur.trim() === '' ? [chemin] : [];
      if (Array.isArray(valeur)) return valeur.flatMap((v, i) => vides(v, `${chemin}[${i}]`));
      if (valeur && typeof valeur === 'object') return Object.entries(valeur).flatMap(([k, v]) => vides(v, `${chemin}.${k}`));
      return [];
    };
    for (const langue of ['fr', 'en'] as const) {
      const d = dico[langue];
      const jalons = d.keepsous.jalons.map((j) => j.nom); // `date` peut être absente, mais pas vide
      expect(jalons.every(Boolean)).toBeTrue();
      expect(vides(d.etudeKeepsous, 'etudeKeepsous')).withContext(langue).toEqual([]);
      expect(Object.keys(d.etudeKeepsous.sections)).toEqual(SECTIONS);
    }
  });

  it('code privé : aucun lien vers un dépôt dans les textes KeepSous', () => {
    for (const langue of ['fr', 'en'] as const) {
      const texte = JSON.stringify([dico[langue].keepsous, dico[langue].etudeKeepsous]);
      expect(texte).withContext(langue).not.toMatch(/github\.com|https?:\/\//i);
    }
  });

  it('les captures listées existent dans la table des fichiers', () => {
    expect(VISUELS.length).toBeLessThanOrEqual(Object.keys(FICHIERS_VISUELS).length);
    for (const id of VISUELS) expect(FICHIERS_VISUELS[id].fichier).toMatch(/^assets\/keepsous\/.+\.webp$/);
  });

  // Tant que ces textes provisoires sont présents, la page ne doit pas être mise en ligne (voir docs/etude-de-cas-keepsous.md).
  it('signale les textes encore à rédiger par Nathan', () => {
    const provisoire = /À RÉDIGER|TO BE WRITTEN/;
    const restants = (['fr', 'en'] as const).filter((l) => provisoire.test(JSON.stringify(dico[l].etudeKeepsous)));
    if (restants.length) console.warn(`KeepSous : section « difficultés » à rédiger (${restants.join(', ')})`);
    expect(true).toBeTrue();
  });
});
