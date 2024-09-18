import { Component } from '@angular/core';
import { DateSelectorComponent } from '../shared/date-selector/date-selector.component';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [DateSelectorComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css',
})
export default class DashboardMainComponent {}
