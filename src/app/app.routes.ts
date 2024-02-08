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
    loadComponent: () => import('./modules/store/store.component')
      .then(mod => mod.StoreComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./modules/home/home.component')
          .then(mod => mod.HomeComponent),
      },
      {
        path: 'products',
        loadComponent: () => import('./modules/products-list/products-list.component')
          .then(mod => mod.ProductsListComponent),
      },
      {
        path: 'products/:id',
        loadComponent: () => import('./modules/product-details/product-details.component')
          .then(mod => mod.ProductDetailsComponent),
      },
      {
        path: 'cart',
        loadComponent: () => import('./modules/cart/cart.component')
          .then(mod => mod.CartComponent),
      },
      {
        path: 'favorite',
        loadComponent: () => import('./modules/favorite-list/favorite-list.component')
          .then(mod => mod.FavoriteListComponent),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () => import('./modules/auth/auth.component')
      .then(mod => mod.AuthComponent),
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
