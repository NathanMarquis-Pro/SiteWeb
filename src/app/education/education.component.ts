import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from './education.service';
import { Education } from './education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educations: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educations = this.educationService.getEducationHistory();
  }
}
