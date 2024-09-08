import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      { path: '', redirectTo: 'quizes', pathMatch: 'full' },
      {
        path: 'quizes',
        loadComponent: () =>
          import('./quiz-list/quiz-list.component').then(
            (c) => c.QuizListComponent
          ),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./admin/admin.component').then((c) => c.AdminComponent),
      },
    ],
  },
];
