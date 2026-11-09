import { Component, inject } from '@angular/core';
import { CODE_APRES, CODE_AVANT } from '../data/imsa';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-imsa',
  templateUrl: './imsa.component.html',
})
export class ImsaComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly codeAvant = CODE_AVANT;
  protected readonly codeApres = CODE_APRES;
}
