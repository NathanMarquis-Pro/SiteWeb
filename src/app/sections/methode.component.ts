import { Component, inject } from '@angular/core';
import { LIENS_METHODE } from '../data/projets';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-methode',
  templateUrl: './methode.component.html',
})
export class MethodeComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly cibles = LIENS_METHODE;
}
