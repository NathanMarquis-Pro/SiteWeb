import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { SkillService } from './skill.service';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  public skills: Skill[] = [];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }
}
