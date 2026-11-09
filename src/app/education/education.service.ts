import { Injectable } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { Education } from './education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  getEducationHistory(): Education[] {
    return PORTFOLIO.education;
  }
}
