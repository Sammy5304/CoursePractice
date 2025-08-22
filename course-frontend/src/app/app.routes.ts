import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { 
        path: 'main', 
        loadComponent: () => import('./layouts/main-layout/main/main.component').then(c => c.MainComponent),
        children: [
            {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
            {
                path:'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
        ]
    }
];
