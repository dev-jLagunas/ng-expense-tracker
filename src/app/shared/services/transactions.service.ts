import { Injectable } from '@angular/core';
import { dummyData } from '../dummy-data';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor() {}

  getTransactions() {
    return dummyData.users[0].transactions;
  }

  getRecentTransactions() {
    return this.getTransactions()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }
}
