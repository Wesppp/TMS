import { createFeatureSelector, createSelector } from '@ngrx/store';

import { appLoadingFeatureKey, AppLoadingState } from '@store/app-loading/app-loading.state';
import { AppLoadings } from '@enums/app-loading.enum';

export const appLoadingFeatureSelector =
  createFeatureSelector<AppLoadingState>(appLoadingFeatureKey);

export const isAuthLoadingSelector = createSelector(
  appLoadingFeatureSelector,
  (appLoadingState: AppLoadingState): boolean => appLoadingState.loadings.has(AppLoadings.AUTH_LOADING)
);
