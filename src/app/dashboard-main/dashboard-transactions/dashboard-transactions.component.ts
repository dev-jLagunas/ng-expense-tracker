import { Component, inject, OnInit } from '@angular/core';
import { TransactionsService } from '../../shared/services/transactions.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard-transactions',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dashboard-transactions.component.html',
  styleUrl: './dashboard-transactions.component.css',
})
export class DashboardTransactionsComponent implements OnInit {
  transactions: any[] = [];

  transactionService = inject(TransactionsService);

  ngOnInit(): void {
    this.transactions = this.transactionService.getRecentTransactions();
  }
}
