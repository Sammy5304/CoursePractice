import { Routes } from '@angular/router';

export const DEPARTMENT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'query',
    pathMatch: 'full'
  },
  {
    path: 'query',
    loadComponent: () => import('./components/department-query/department-query.component').then(c => c.DepartmentQueryComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./components/department-create/department-create.component').then(c => c.DepartmentCreateComponent)
  }
]