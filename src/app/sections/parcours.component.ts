import { Component, inject } from '@angular/core';
import { ETAPE_EN_COURS, ETAPES_PARCOURS } from '../data/parcours';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
})
export class ParcoursComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly etapes = ETAPES_PARCOURS;
  protected readonly enCours = ETAPE_EN_COURS;
}
