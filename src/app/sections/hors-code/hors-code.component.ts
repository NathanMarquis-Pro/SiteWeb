import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-hors-code',
  templateUrl: './hors-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorsCodeComponent {
  protected readonly t = inject(LanguageService).t;
}
