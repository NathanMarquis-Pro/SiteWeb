import { Injectable } from '@angular/core';
import { Experience } from './experience.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  getExperiences(): Experience[] {
    return [
      {
        period: 'Avr. 2026 — Juin 2026 · 10 semaines',
        role: 'Développeur Fullstack',
        company: 'iMSA · Stage',
        companyLogo: 'assets/experiences/imsa.jpg',
        description: 'Développement et intégration de nouvelles fonctionnalités sur une application web externe. Mise en place d\'une solution de tests automatisés avec Playwright. Participation aux code reviews, travail en méthode agile et livraison en simulations.',
        tags: ['Angular', 'Spring Boot', 'Git', 'Agile', 'TypeScript', 'Java', 'Playwright', 'CI/CD']
      }
    ];
  }
}