import {
  Component,
  HostListener,
  OnInit,
  signal,
  HostBinding,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MobileNavbarComponent } from './navigation/mobile-navbar/mobile-navbar.component';
import { DesktopSidebarComponent } from './navigation/desktop-sidebar/desktop-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MobileNavbarComponent,
    DesktopSidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isMobile!: boolean;
  darkMode = signal<boolean>(false);

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
  }

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  toggleDarkMode() {
    this.darkMode.update((mode) => !mode);
    console.log(this.darkMode());
  }
}
