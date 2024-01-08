import { Routes } from '@angular/router';

import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { RegisterComponent } from './modules/auth/components/register/register.component';
import { authFeatureKey } from '../store/auth/auth.state';
import { authReducer } from '../store/auth/auth.reducer';
import { RegisterEffect } from '../store/auth/effects/register.effect';
import { AuthService } from './modules/auth/services/auth.service';

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
    providers: [
      provideState({ name: authFeatureKey, reducer: authReducer }),
      provideEffects(RegisterEffect),
      AuthService
    ],
    children: [
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];
