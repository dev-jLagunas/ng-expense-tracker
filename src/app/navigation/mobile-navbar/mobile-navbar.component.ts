import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css',
})
export class MobileNavbarComponent {
  darkModeToggle = output();

  toggleDarkMode() {
    this.darkModeToggle.emit();
  }
}
