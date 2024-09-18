import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-desktop-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './desktop-sidebar.component.html',
  styleUrl: './desktop-sidebar.component.css',
})
export class DesktopSidebarComponent {}
