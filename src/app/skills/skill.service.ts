import { Injectable } from '@angular/core';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillsData: Skill[] = [
    {
      name: 'Langage Objet (Java)',
      icons: ['assets/skills/logo_Java.svg']
    },
    {
      name: 'Versioning (Git, GitLab)',
      icons: ['assets/skills/logo_Git.png', 'assets/skills/logo_GitLab.png']
    },
    {
      name: 'Web (HTML, CSS)',
      icons: ['assets/skills/logo_HTML.png', 'assets/skills/logo_CSS.png']
    },
    {
      name: 'Graphique, Prototypage', // JavaFX & Figma
      icons: ['assets/skills/logo_JavaFX.png', 'assets/skills/logo_Figma.png']
    },
    {
      name: 'SQL (Postgresql, SQLite)', // SQL & Postgre
      icons: ['assets/skills/logo_SQL.png', 'assets/skills/logo_Postgre.png']
    },
    {
      name: 'Bas niveau (C)',
      icons: ['assets/skills/logo_C.svg']
    },
    {
      name: 'Suite office', // Office & Office Apps
      icons: ['assets/skills/logo_Office.png', 'assets/skills/logo_Office_Apps.webp']
    },
    {
      name: 'Markdown',
      icons: ['assets/skills/logo_Markdown.png']
    }
  ];

  constructor() { }

  getSkills(): Skill[] {
    return this.skillsData;
  }
}
