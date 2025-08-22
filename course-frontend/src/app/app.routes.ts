import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { 
        path: 'main', 
        loadComponent: () => import('./layouts/main-layout/main/main.component').then(c => c.MainComponent),
        children: [
            {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
            { 
                path: 'dashboard', 
                loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
            },
            {
                path: 'job-roles',
                loadChildren: () => import('./features/job-role/job-role.routes').then(m => m.JOB_ROLE_ROUTES),
            },
        ]
    }
];
