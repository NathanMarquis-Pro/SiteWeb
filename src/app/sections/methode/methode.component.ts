import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { HABITUDES } from './methode.data';

@Component({
  selector: 'app-methode',
  templateUrl: './methode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodeComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly habitudes = HABITUDES;
}
