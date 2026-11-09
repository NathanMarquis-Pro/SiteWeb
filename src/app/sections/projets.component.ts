import { Component, computed, inject } from '@angular/core';
import { PROJETS } from '../data/projets';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
})
export class ProjetsComponent {
  private readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly projets = PROJETS;

  private readonly format = computed(
    () =>
      new Intl.NumberFormat(this.langue.lang() === 'fr' ? 'fr-FR' : 'en-US', {
        minimumFractionDigits: 3,
      }),
  );

  protected readonly decimal = (n: number) => this.format().format(n);
}
