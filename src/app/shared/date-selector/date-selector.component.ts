import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateSelectorService } from '../services/date-selector.service';
import { IncomeExpenseService } from '../services/income-expense.service';

@Component({
  selector: 'app-date-selector',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-selector.component.html',
  styleUrl: './date-selector.component.css',
})
export class DateSelectorComponent {
  dateSelectorService = inject(DateSelectorService);
  incomeExpenseService = inject(IncomeExpenseService);
  currentMonth!: Date;

  constructor() {
    this.currentMonth = this.dateSelectorService.getCurrentMonth();
  }

  previousMonth() {
    this.dateSelectorService.previousMonth();
    this.currentMonth = this.dateSelectorService.getCurrentMonth();
    this.incomeExpenseService.updateFinancialSummary();
  }

  nextMonth() {
    this.dateSelectorService.nextMonth();
    this.currentMonth = this.dateSelectorService.getCurrentMonth();
    this.incomeExpenseService.updateFinancialSummary();
  }
}
