import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { LIENS } from '../../shared/liens';
import { NUTRISCOPE } from './nutriscope.data';

@Component({
  selector: 'app-nutriscope',
  templateUrl: './nutriscope.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutriscopeComponent {
  protected readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly donnees = NUTRISCOPE;
  protected readonly liens = LIENS;

  protected readonly paragraphe1 = computed(() =>
    this.t()
      .nutriscope.p1.replace('{depart}', this.langue.nombre(NUTRISCOPE.produitsDepart))
      .replace('{arrivee}', this.langue.nombre(NUTRISCOPE.produitsArrivee)),
  );
}
