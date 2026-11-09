import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CompetencesComponent } from './sections/competences/competences.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { HorsCodeComponent } from './sections/hors-code/hors-code.component';
import { ImsaComponent } from './sections/imsa/imsa.component';
import { MethodeComponent } from './sections/methode/methode.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { NutriscopeComponent } from './sections/nutriscope/nutriscope.component';
import { ParcoursComponent } from './sections/parcours/parcours.component';
import { ProjetsComponent } from './sections/projets/projets.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    NutriscopeComponent,
    ImsaComponent,
    MethodeComponent,
    ProjetsComponent,
    ParcoursComponent,
    CompetencesComponent,
    HorsCodeComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
