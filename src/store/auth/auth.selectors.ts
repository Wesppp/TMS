import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authFeatureKey, AuthState } from './auth.state';

export const authFeatureSelector =
  createFeatureSelector<AuthState>(authFeatureKey);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isLoggedIn
);
