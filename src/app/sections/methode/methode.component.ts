import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { HABITUDES } from './methode.data';

@Component({
  selector: 'app-methode',
  templateUrl: './methode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodeComponent {
  protected readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly habitudes = HABITUDES;
}
