import { Component, inject, OnInit } from '@angular/core';
import { IncomeExpenseService } from '../../shared/services/income-expense.service';

@Component({
  selector: 'app-dashboard-budgets',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-budgets.component.html',
  styleUrl: './dashboard-budgets.component.css',
})
export class DashboardBudgetsComponent implements OnInit {
  budgets: any[] = [];
  incomeExpenseService = inject(IncomeExpenseService);

  ngOnInit(): void {
    this.budgets = this.incomeExpenseService
      .getCurrentMonthBudgets()
      .slice(0, 3);
  }

  calculatePercentage(currentSpending: number, limit: number): number {
    return (currentSpending / limit) * 100;
  }
}
