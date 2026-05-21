import { Injectable } from '@angular/core';
import { Education } from './education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private educationHistoryData: Education[] = [
    {
      period: '2023 - 2026',
      degree: 'BUT Informatique - Parcours A : réalisation d\'applications',
      school: 'IUT de Lille - Villeneuve-d\'Ascq',
      schoolLogo: 'assets/education/logo_iut_lille_coupe.png',
      description: "Le parcours A, réalisation d'applications : conception, développement, validation permet d'apprendre les compétences techniques et méthodologiques utiles à un développeur comme l\'algorithmique, les bases de données, le développement web et la gestion de projets. Stage de 10 semaines en entreprise.",
      link: 'https://www.univ-lille.fr/formations/fr-00082372',
      tags: ['Algorithmique', 'Réseaux', 'Bases de données', 'Développement web', 'Gestion de projet', 'Documentation technique', 'Tests unitaires']
    },
    {
      period: '2020 - 2023',
      degree: 'Baccalauréat technologique STI2D en spécialisation SIN',
      school: 'Lycée Elisa Lemonnier - Douai',
      schoolLogo: 'assets/education/logo_Elisa_Lemonnier.png',
      description: "Obtenu avec mention, le Baccalauréat technologique STI2D est construit autour de l'innovation technologique et des sciences. La spécialisation SIN est orientée vers les systèmes d'information et numériques, couvrant des domaines tels que les réseaux, la programmation, l'électronique et les systèmes embarqués.",
      link: 'https://www.lycee-elisalemonnier.fr/site/nos-formations/',
      tags: ['Mention TB', 'Réseaux', 'Programmation', 'Électronique', 'Systèmes embarqués']
    }
  ];

  constructor() { }

  getEducationHistory(): Education[] {
    return this.educationHistoryData;
  }
}
