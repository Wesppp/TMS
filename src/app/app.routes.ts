import { Routes } from '@angular/router';
import { RegisterComponent } from './modules/auth/components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./modules/auth/auth.component').then(mod => mod.AuthComponent),
    children: [
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];
