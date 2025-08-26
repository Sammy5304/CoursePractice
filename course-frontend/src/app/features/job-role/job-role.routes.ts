import { Routes } from '@angular/router';
export const JOB_ROLE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'query',
    pathMatch: 'full'
  },
  {
    path: 'query',
    loadComponent: () => import('./components/job-role-query/job-role-query.component')
      .then(c => c.JobRoleQueryComponent),
  },
  {
    path: 'create',
    loadComponent: () => import('./components/job-role-create/job-role-create.component')
      .then(c => c.JobRoleCreateComponent)
  }
];
