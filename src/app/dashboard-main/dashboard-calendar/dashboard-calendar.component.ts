import { Component, OnInit, inject } from '@angular/core';
import { DateSelectorService } from '../../shared/services/date-selector.service';
import { IncomeExpenseService } from '../../shared/services/income-expense.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard-calendar',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, DatePipe],
  templateUrl: './dashboard-calendar.component.html',
  styleUrl: './dashboard-calendar.component.css',
})
export class DashboardCalendarComponent implements OnInit {
  lastTwoWeeks: Date[] = [];
  transactionsByDate: { [key: string]: any[] } = {};
  dateSelectorService = inject(DateSelectorService);
  incomeExpenseService = inject(IncomeExpenseService);
  currentMonth!: Date;

  constructor() {
    this.currentMonth = this.dateSelectorService.getCurrentMonth();
  }

  ngOnInit(): void {
    this.lastTwoWeeks = this.dateSelectorService.getLastTwoWeeks();
    this.populateTransactions();
  }

  populateTransactions(): void {
    this.lastTwoWeeks.forEach((date) => {
      const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      this.transactionsByDate[formattedDate] =
        this.incomeExpenseService.getTransactionsByDate(date);
    });
  }

  getFormattedDate(date: Date): string {
    return date.toDateString();
  }
}
