import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard-main/dashboard-main.component'),
  },
  {
    path: 'budgets',
    loadComponent: () => import('./budgets-main/budgets-main.component'),
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar-main/calendar-main.component'),
  },
  {
    path: 'challenges',
    loadComponent: () => import('./challenges-main/challenges-main.component'),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./transactions-main/transactions-main.component'),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
