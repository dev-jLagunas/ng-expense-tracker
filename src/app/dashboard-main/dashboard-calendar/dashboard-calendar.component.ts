import { Component, OnInit, inject } from '@angular/core';
import { DateSelectorService } from '../../shared/services/date-selector.service';
import { IncomeExpenseService } from '../../shared/services/income-expense.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-calendar',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './dashboard-calendar.component.html',
  styleUrls: ['./dashboard-calendar.component.css'],
})
export class DashboardCalendarComponent implements OnInit {
  currentWeekDays: Date[] = [];
  transactionsByDate: { [key: string]: any[] } = {};
  activeTabIndex: number = 0;

  dateSelectorService = inject(DateSelectorService);
  incomeExpenseService = inject(IncomeExpenseService);

  ngOnInit(): void {
    this.currentWeekDays = this.getCurrentWeekDays();
    this.populateTransactions();
  }

  // Method to calculate current week (Monday to Friday)
  getCurrentWeekDays(): Date[] {
    const currentDate = this.dateSelectorService.getCurrentDate();
    const startOfWeek = currentDate.getDate() - currentDate.getDay() + 1; // Get Monday
    const weekDays = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date(currentDate);
      day.setDate(startOfWeek + i); // Monday to Friday
      weekDays.push(day);
    }
    return weekDays;
  }

  // Method to populate transactions by date
  populateTransactions(): void {
    this.currentWeekDays.forEach((date) => {
      const formattedDate = this.formatDate(date);
      this.transactionsByDate[formattedDate] =
        this.incomeExpenseService.getTransactionsByDate(date);
    });
  }

  // Method to set the active tab index
  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  // Simplify date formatting for template usage
  formatDate(date: Date): string {
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }

  // Get transactions for the currently selected tab
  getTransactionsForActiveTab(): any[] {
    const activeDate = this.formatDate(
      this.currentWeekDays[this.activeTabIndex]
    );
    return this.transactionsByDate[activeDate] || [];
  }

  // Check if there are transactions for the active tab
  hasTransactionsForActiveTab(): boolean {
    return this.getTransactionsForActiveTab().length > 0;
  }
}
