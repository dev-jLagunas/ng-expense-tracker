import { Component, inject, OnInit } from '@angular/core';
import { DateSelectorComponent } from '../shared/date-selector/date-selector.component';
import { IncomeExpenseService } from '../shared/services/income-expense.service';
import { CurrencyPipe } from '@angular/common';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [DateSelectorComponent, CurrencyPipe, DashboardChartComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css',
})
export default class DashboardMainComponent implements OnInit {
  incomeExpenseService = inject(IncomeExpenseService);

  ngOnInit(): void {
    this.incomeExpenseService.updateFinancialSummary();
  }
}
