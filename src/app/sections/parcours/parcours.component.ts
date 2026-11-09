import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { ETAPE_EN_COURS, ETAPES_PARCOURS } from './parcours.data';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParcoursComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly etapes = ETAPES_PARCOURS;
  protected readonly enCours = ETAPE_EN_COURS;
}
