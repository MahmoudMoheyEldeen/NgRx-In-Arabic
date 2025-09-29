import { Routes } from '@angular/router';
import { Auth } from './auth/state/pages/auth/auth';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    title: 'Login',
    path: 'auth',
    component: Auth,
  },
];
