import { Injectable } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { Experience } from './experience.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  getExperiences(): Experience[] {
    return PORTFOLIO.experiences;
  }
}
