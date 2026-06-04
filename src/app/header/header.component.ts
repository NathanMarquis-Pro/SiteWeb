import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [], // Add imports array for future standalone dependencies
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
