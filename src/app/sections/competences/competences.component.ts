import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { GROUPES_COMPETENCES, NomCompetence } from './competences.data';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetencesComponent {
  private readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly groupes = GROUPES_COMPETENCES;

  protected libelle(nom: NomCompetence): string {
    return typeof nom === 'string' ? nom : nom[this.langue.lang()];
  }
}
