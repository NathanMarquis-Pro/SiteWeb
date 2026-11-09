import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { CODE_APRES, CODE_AVANT } from './imsa.data';

@Component({
  selector: 'app-imsa',
  templateUrl: './imsa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImsaComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly codeAvant = CODE_AVANT;
  protected readonly codeApres = CODE_APRES;
}
