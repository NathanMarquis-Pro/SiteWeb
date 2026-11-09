import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './sections/footer/footer.component';
import { NavbarComponent } from './sections/navbar/navbar.component';

/** Coque commune : barre de navigation, page de la route, pied de page. */
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
