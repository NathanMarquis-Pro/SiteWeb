import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CompetencesComponent } from '../../sections/competences/competences.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { HorsCodeComponent } from '../../sections/hors-code/hors-code.component';
import { ImsaComponent } from '../../sections/imsa/imsa.component';
import { MethodeComponent } from '../../sections/methode/methode.component';
import { NutriscopeComponent } from '../../sections/nutriscope/nutriscope.component';
import { ParcoursComponent } from '../../sections/parcours/parcours.component';
import { ProjetsComponent } from '../../sections/projets/projets.component';

/** Page d'accueil : toutes les sections, reliées par des ancres. */
@Component({
  selector: 'app-accueil',
  imports: [HeroComponent, NutriscopeComponent, ImsaComponent, MethodeComponent, ProjetsComponent, ParcoursComponent, CompetencesComponent, HorsCodeComponent],
  template: `
    <main>
      <app-hero></app-hero>
      <app-nutriscope></app-nutriscope>
      <app-imsa></app-imsa>
      <app-methode></app-methode>
      <app-projets></app-projets>
      <app-parcours></app-parcours>
      <app-competences></app-competences>
      <app-hors-code></app-hors-code>
    </main>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilPage {}
