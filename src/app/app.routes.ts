import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.routes').then((c) => c.routes),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/game/landing/landing.component').then(
        (c) => c.LandingComponent
      ),
  },

  {
    path: 'logon',
    loadComponent: () =>
      import('./components/login/logon/logon.component').then(
        (c) => c.LogonComponent
      ),
  },
];
