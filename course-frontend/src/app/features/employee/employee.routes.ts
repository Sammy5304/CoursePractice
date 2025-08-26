import { Routes } from '@angular/router';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'query',
    pathMatch: 'full'
  },
  {
    path: 'query',
    loadComponent: () => import('./components/employee-query/employee-query.component')
      .then(c => c.EmployeeQueryComponent),
  }
];
