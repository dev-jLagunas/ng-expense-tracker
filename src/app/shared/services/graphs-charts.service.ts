import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IncomeExpenseService } from './income-expense.service';

@Injectable({
  providedIn: 'root',
})
export class GraphsChartsService {
  /**
   * Note: In this service, we are using BehaviorSubject and Observables rather than Signals.
   *
   * Reason: ngx-echarts (or other charting libraries) may not be fully compatible with Signals yet.
   * Observable streams are a well-supported pattern for managing asynchronous data updates in Angular,
   * and BehaviorSubject ensures the last known value is available to any new subscribers.
   *
   * I could be wrong though! Here is a note just in case.
   */
  incomeExpenseService = inject(IncomeExpenseService);

  private categoryDataSubject = new BehaviorSubject<any[]>([]);
  categoryData$: Observable<any[]> = this.categoryDataSubject.asObservable();

  constructor() {
    this.updateCategoryData();
  }

  updateCategoryData() {
    const transactions =
      this.incomeExpenseService.getCurrentMonthTransactions();
    const categoryMap: { [category: string]: number } = {};

    transactions.forEach((transaction) => {
      if (transaction.type === 'expense') {
        if (!categoryMap[transaction.category]) {
          categoryMap[transaction.category] = 0;
        }
        categoryMap[transaction.category] += transaction.amount;
      }
    });

    const data = Object.keys(categoryMap).map((category) => ({
      name: category,
      value: categoryMap[category],
    }));

    this.categoryDataSubject.next(data);
  }
}
