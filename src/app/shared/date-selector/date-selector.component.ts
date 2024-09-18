import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-selector',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-selector.component.html',
  styleUrl: './date-selector.component.css',
})
export class DateSelectorComponent {
  currentMonth = signal(new Date());

  previousMonth() {
    const newDate = new Date(
      this.currentMonth().setMonth(this.currentMonth().getMonth() - 1)
    );
    this.currentMonth.set(newDate);
  }

  nextMonth() {
    const newDate = new Date(
      this.currentMonth().setMonth(this.currentMonth().getMonth() + 1)
    );
    this.currentMonth.set(newDate);
  }
}
