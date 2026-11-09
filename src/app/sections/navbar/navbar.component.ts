import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { Langue } from '../../i18n/translations';
import { LIENS_NAV } from './navbar.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly langue = inject(LanguageService);
  protected readonly t = this.langue.t;
  protected readonly liensNav = LIENS_NAV;
  protected readonly langues: Langue[] = ['fr', 'en'];
}
