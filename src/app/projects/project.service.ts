import { Injectable } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjects(): Project[] {
    return PORTFOLIO.projects;
  }
}
