import { Injectable } from '@angular/core';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private skillsData: Skill[] = [
    {
      name: 'Java',
      icons: ['assets/skills/logo_Java.svg']
    },
    {
      name: 'Git',
      icons: ['assets/skills/logo_Git.png']
    },
    {
      name: 'GitLab',
      icons: ['assets/skills/logo_GitLab.png']
    },
    {
      name: 'GitHub',
      icons: ['assets/skills/logo_GitHub.svg']
    },
    {
      name: 'HTML',
      icons: ['assets/skills/logo_HTML.png']
    },
    {
      name: 'CSS',
      icons: ['assets/skills/logo_CSS.png']
    },
    {
      name: 'JavaFX',
      icons: ['assets/skills/logo_JavaFX.png']
    },
    {
      name: 'Figma',
      icons: ['assets/skills/logo_Figma.png']
    },
    {
      name: 'PostgreSQL',
      icons: ['assets/skills/logo_PostgreSQL.png']
    },
    {
      name: 'SQLite',
      icons: ['assets/skills/logo_SQLite.png']
    },
    {
      name: 'C',
      icons: ['assets/skills/logo_C.svg']
    },
    {
      name: 'Office',
      icons: ['assets/skills/logo_Office.png']
    },
    {
      name: 'Markdown',
      icons: ['assets/skills/logo_Markdown.png']
    },
    {
      name: 'Angular',
      icons: ['assets/skills/logo_Angular.png']
    },
    {
      name: 'Spring Boot',
      icons: ['assets/skills/logo_Spring_Boot.png']
    },
    {
      name: 'JavaScript',
      icons: ['assets/skills/logo_JavaScript.png']
    },
    {
      name: 'TypeScript',
      icons: ['assets/skills/logo_TypeScript.png']
    },
    {
      name: 'Docker',
      icons: ['assets/skills/logo_Docker.svg']
    },
    {
      name: 'REST API',
      icons: []
    },
    {
      name: 'Playwright',
      icons: ['assets/skills/logo_Playwright.png']
    },
    {
      name: 'CI/CD',
      icons: []
    },
    {
      name: 'JEE',
      icons: ['assets/skills/logo_JEE.png']
    },
    {
      name: 'JDBC',
      icons: ['assets/skills/logo_JDBC.svg']
    },
    {
      name: 'Bash',
      icons: ['assets/skills/logo_Bash.png']
    },
    {
      name: 'Jira',
      icons: ['assets/skills/logo_Jira.png']
    },
    {
      name:'Anglais',
      icons: ['assets/skills/logo_TOEIC.png']
    }

  ];

  constructor() { }

  getSkills(): Skill[] {
    return this.skillsData;
  }
}
