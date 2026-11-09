import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { VisuelKeepsousId } from '../../i18n/translations';
import { KEEPSOUS } from '../../sections/keepsous/keepsous.data';
import { APPAREILS, ECRANS, FICHIERS_VISUELS, MESURES, ORDRE_MESURES, SECTIONS, VERDICTS, VISUELS } from './etude-keepsous.data';

/** Étude de cas KeepSous : une application de budget auto-hébergée, code privé, données fictives. */
@Component({
  selector: 'app-etude-keepsous',
  templateUrl: './etude-keepsous.page.html',
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtudeKeepsousPage {
  protected readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly keepsous = KEEPSOUS;

  protected readonly sections = SECTIONS;
  protected readonly ecrans = ECRANS;
  protected readonly verdicts = VERDICTS;
  protected readonly appareils = APPAREILS;
  protected readonly mesures = ORDRE_MESURES.map((id) => ({ id, valeur: MESURES[id] }));

  /** Montant en euros avec la typographie de la langue (`5,84 €` / `€5.84`). */
  protected euros(centimes: number, decimales = 0): string {
    const valeur = this.langue.nombre(centimes / 100, centimes % 100 === 0 ? decimales : 2);
    return this.langue.lang() === 'fr' ? `${valeur} €` : `€${valeur}`;
  }

  protected pourcent(valeur: number): string {
    return this.langue.lang() === 'fr' ? `${valeur} %` : `${valeur}%`;
  }

  /** Fichier d'une capture, ou `null` tant qu'elle n'est pas publiée (voir `VISUELS`). */
  protected visuel(id: VisuelKeepsousId) {
    return VISUELS.includes(id) ? FICHIERS_VISUELS[id] : null;
  }
}
