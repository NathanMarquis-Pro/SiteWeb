import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { LIENS } from '../../shared/liens';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly t = inject(LanguageService).t;
  protected readonly liens = LIENS;
}
