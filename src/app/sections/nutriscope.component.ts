import { Component, computed, inject } from '@angular/core';
import { LIENS } from '../data/liens';
import { NUTRISCOPE } from '../data/nutriscope';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-nutriscope',
  templateUrl: './nutriscope.component.html',
})
export class NutriscopeComponent {
  private readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly donnees = NUTRISCOPE;
  protected readonly liens = LIENS;

  /** Format des nombres selon la langue active : espace en français, virgule en anglais. */
  private readonly format = computed(
    () => new Intl.NumberFormat(this.langue.lang() === 'fr' ? 'fr-FR' : 'en-US'),
  );

  protected readonly nombre = (n: number) => this.format().format(n);

  protected readonly paragraphe1 = computed(() =>
    this.t()
      .nutriscope.p1.replace('{depart}', this.format().format(NUTRISCOPE.produitsDepart))
      .replace('{arrivee}', this.format().format(NUTRISCOPE.produitsArrivee)),
  );
}
