import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero.component';
import { ImsaComponent } from './sections/imsa.component';
import { NavbarComponent } from './sections/navbar.component';
import { NutriscopeComponent } from './sections/nutriscope.component';

// Les anciens composants (header, hero, about, education, experiences,
// projects, skills, footer) sont démontés de la page mais leurs fichiers sont conservés.
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, NutriscopeComponent, ImsaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
