import { Component, inject } from '@angular/core';
import { LIENS } from '../data/liens';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly liens = LIENS;
}
