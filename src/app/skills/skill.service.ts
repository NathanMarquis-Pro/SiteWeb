import { Injectable } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  getSkills(): Skill[] {
    return PORTFOLIO.skills;
  }
}
