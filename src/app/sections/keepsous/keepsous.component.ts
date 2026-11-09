import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { KEEPSOUS } from './keepsous.data';

@Component({
  selector: 'app-keepsous',
  templateUrl: './keepsous.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeepsousComponent {
  protected readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly donnees = KEEPSOUS;
}
