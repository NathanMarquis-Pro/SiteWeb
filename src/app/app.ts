import { Component } from '@angular/core';
import { CompetencesComponent } from './sections/competences.component';
import { FooterComponent } from './sections/footer.component';
import { HeroComponent } from './sections/hero.component';
import { HorsCodeComponent } from './sections/hors-code.component';
import { ImsaComponent } from './sections/imsa.component';
import { MethodeComponent } from './sections/methode.component';
import { NavbarComponent } from './sections/navbar.component';
import { NutriscopeComponent } from './sections/nutriscope.component';
import { ParcoursComponent } from './sections/parcours.component';
import { ProjetsComponent } from './sections/projets.component';

// Les anciens composants (header, hero, about, education, experiences,
// projects, skills, footer) sont démontés de la page mais leurs fichiers sont conservés.
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, HeroComponent, NutriscopeComponent, ImsaComponent, MethodeComponent, ProjetsComponent,
    ParcoursComponent, CompetencesComponent, HorsCodeComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
