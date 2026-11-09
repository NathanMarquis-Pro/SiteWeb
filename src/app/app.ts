import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero.component';
import { NavbarComponent } from './sections/navbar.component';

// Les anciens composants (header, hero, about, education, experiences,
// projects, skills, footer) sont démontés de la page mais leurs fichiers sont conservés.
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
