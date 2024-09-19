import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileNavbarComponent } from './navigation/mobile-navbar/mobile-navbar.component';
import { DesktopSidebarComponent } from './navigation/desktop-sidebar/desktop-sidebar.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MobileNavbarComponent,
    DesktopSidebarComponent,
    MobileHeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isMobile!: boolean;

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth < 768;
  }
}
