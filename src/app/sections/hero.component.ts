import { Component, inject } from '@angular/core';
import { LIENS } from '../data/liens';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly liens = LIENS;
}
