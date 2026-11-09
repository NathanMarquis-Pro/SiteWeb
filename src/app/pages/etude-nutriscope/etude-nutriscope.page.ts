import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { LIENS } from '../../shared/liens';
import { NUTRISCOPE } from '../../sections/nutriscope/nutriscope.data';
import { ANOMALIES, BENCHMARK, DECISIONS, MANQUANTS, RAYONS, REGLES, SECTIONS, TOTAL_APRES, TOTAL_AVANT, USAGES, VOLUMES } from './etude-nutriscope.data';

/** Étude de cas NutriScope : de l'export brut d'Open Food Facts au catalogue que l'application peut lire. */
@Component({
  selector: 'app-etude-nutriscope',
  templateUrl: './etude-nutriscope.page.html',
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtudeNutriscopePage {
  protected readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly liens = LIENS;
  protected readonly nutriscope = NUTRISCOPE;

  protected readonly sections = SECTIONS;
  protected readonly volumes = VOLUMES;
  protected readonly regles = REGLES;
  protected readonly decisions = DECISIONS;
  protected readonly anomalies = ANOMALIES;
  protected readonly usages = USAGES;
  protected readonly benchmark = BENCHMARK;

  /** Part de produits manquants, avec la typographie de la langue (`29,3 %` / `29.3%`). */
  protected pourcent(manquants: number, total: number): string {
    const valeur = this.langue.nombre((manquants / total) * 100, 1);
    return this.langue.lang() === 'fr' ? `${valeur} %` : `${valeur}%`;
  }

  protected readonly manquants = computed(() =>
    MANQUANTS.map((m) => ({
      id: m.id,
      avant: this.langue.nombre(m.avant),
      avantPart: this.pourcent(m.avant, TOTAL_AVANT),
      apres: this.langue.nombre(m.apres),
      apresPart: this.pourcent(m.apres, TOTAL_APRES),
    })),
  );

  /** Largeur de chaque barre, relative au rayon le plus fourni. */
  protected readonly rayons = RAYONS.map((r) => ({ ...r, largeur: `${(r.produits / RAYONS[0].produits) * 100}%` }));

  /** Temps le plus court de chaque requête : mis en avant dans le tableau. */
  protected rapide(ligne: { pandas: number; duckdb: number; postgres: number }, valeur: number): boolean {
    return valeur === Math.min(ligne.pandas, ligne.duckdb, ligne.postgres);
  }

  protected temps(secondes: number): string {
    return this.langue.nombre(secondes, 2);
  }
}
