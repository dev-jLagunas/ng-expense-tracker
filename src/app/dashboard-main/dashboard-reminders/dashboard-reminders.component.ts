import { Component, inject, OnInit, Pipe } from '@angular/core';
import { IncomeExpenseService } from '../../shared/services/income-expense.service';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard-reminders',
  standalone: true,
  imports: [NgFor, NgClass, DatePipe, NgIf],
  templateUrl: './dashboard-reminders.component.html',
  styleUrl: './dashboard-reminders.component.css',
})
export class DashboardRemindersComponent implements OnInit {
  reminders: any[] = [];
  incomeExpenseService = inject(IncomeExpenseService);

  ngOnInit(): void {
    this.reminders = this.incomeExpenseService.getAllReminders();
  }

  isWithinDeadline(dueDate: string): boolean {
    const currentDate = new Date();
    const due = new Date(dueDate);
    const differenceInDays =
      (due.getTime() - currentDate.getTime()) / (1000 * 3600 * 24);
    return differenceInDays <= 7 && differenceInDays >= 0;
  }
}
