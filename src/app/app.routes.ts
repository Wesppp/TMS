import { Routes } from '@angular/router';

import { RegisterComponent } from '@modules/auth/components/register/register.component';
import { LoginComponent } from '@modules/auth/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/store/home',
    pathMatch: 'full'
  },
  {
    path: 'store',
    loadComponent: () => import('./modules/store/store.component').then(mod => mod.StoreComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./modules/home/home.component').then(mod => mod.HomeComponent),
      },
      {
        path: 'products',
        loadComponent: () => import('./modules/products-list/products-list.component').then(mod => mod.ProductsListComponent),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () => import('./modules/auth/auth.component').then(mod => mod.AuthComponent),
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];
