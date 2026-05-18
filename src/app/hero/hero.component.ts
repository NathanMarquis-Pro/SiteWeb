import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

}
