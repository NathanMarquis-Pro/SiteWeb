import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common'; // Import CommonModule for *ngFor etc.
import { Skill, SkillService } from './skill.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage], // Add CommonModule here
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  public skills: Skill[] = [];
  // public skillsRow1: Skill[] = []; // Example if we split them for rows
  // public skillsRow2: Skill[] = [];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
    // Example if splitting for rows:
    // const allSkills = this.skillService.getSkills();
    // this.skillsRow1 = allSkills.slice(0, 4);
    // this.skillsRow2 = allSkills.slice(4, 8);
  }
}
