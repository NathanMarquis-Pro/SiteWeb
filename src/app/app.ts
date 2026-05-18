import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Import FooterComponent
import { HeroComponent } from './hero/hero.component'; // Import IntroComponent
import { AboutComponent } from './about/about.component'; // Import AboutComponent
import { EducationComponent } from './education/education.component'; // Import EducationComponent
import { ProjectsComponent } from './projects/projects.component'; // Import ProjectsComponent
import { ExperienceComponent } from './experience/experience.component'; // Import ExperienceComponent
import { SkillComponent } from './skills/skill.component'; // Import SkillComponent

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, AboutComponent, EducationComponent, ProjectsComponent, ExperienceComponent, SkillComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
}
