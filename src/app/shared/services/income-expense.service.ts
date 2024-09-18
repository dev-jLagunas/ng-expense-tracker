import { Injectable, inject, signal } from '@angular/core';
import { dummyData as initialDummyData } from '../dummy-data';
import { DateSelectorService } from './date-selector.service';

@Injectable({
  providedIn: 'root',
})
export class IncomeExpenseService {
  #dummyData = signal<typeof initialDummyData>(initialDummyData);
  dummyData = this.#dummyData.asReadonly();

  currentIncome = signal<number>(0);
  currentExpenses = signal<number>(0);
  currentBalance = signal<number>(0);

  dateSelectorService = inject(DateSelectorService);

  constructor() {}

  getCurrentMonthTransactions() {
    const currentDate = this.dateSelectorService.getCurrentDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return this.#dummyData().users[0].transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear &&
        transactionDate <= currentDate
      );
    });
  }

  getCurrentMonthBudgets() {
    const currentDate = this.dateSelectorService.getCurrentDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return this.#dummyData().users[0].budgets.filter((budget) => {
      const startDate = new Date(budget.startDate);
      const endDate = new Date(budget.endDate);

      return (
        startDate.getMonth() === currentMonth &&
        startDate.getFullYear() === currentYear &&
        endDate.getMonth() === currentMonth &&
        endDate.getFullYear() === currentYear
      );
    });
  }

  updateFinancialSummary() {
    const transactions = this.getCurrentMonthTransactions();

    const totalIncome = transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);

    const totalExpenses = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);

    this.currentIncome.set(totalIncome);
    this.currentExpenses.set(totalExpenses);
    this.currentBalance.set(totalIncome - totalExpenses);
  }
}
