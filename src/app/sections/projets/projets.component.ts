import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { PROJETS } from './projets.data';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjetsComponent {
  protected readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly projets = PROJETS;
}
