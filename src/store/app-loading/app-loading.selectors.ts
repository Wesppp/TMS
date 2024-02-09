import { createFeatureSelector, createSelector } from '@ngrx/store';

import { appLoadingFeatureKey, AppLoadingState } from '@store/app-loading/app-loading.state';
import { AppLoadings } from '@enums/app-loading.enum';

export const appLoadingFeatureSelector =
  createFeatureSelector<AppLoadingState>(appLoadingFeatureKey);

export const isAuthLoadingSelector = createSelector(
  appLoadingFeatureSelector,
  (appLoadingState: AppLoadingState): boolean => appLoadingState.loadings.has(AppLoadings.AUTH_LOADING)
);

export const isProductsLoadingSelector = createSelector(
  appLoadingFeatureSelector,
  (appLoadingState: AppLoadingState): boolean => appLoadingState.loadings.has(AppLoadings.PRODUCTS_LOADING)
);

export const isFeaturedProductsLoadingSelector = createSelector(
  appLoadingFeatureSelector,
  (appLoadingState: AppLoadingState): boolean => appLoadingState.loadings.has(AppLoadings.FEATURED_PRODUCTS_LOADING)
);

export const isProductLoadingSelector = createSelector(
  appLoadingFeatureSelector,
  (appLoadingState: AppLoadingState): boolean => appLoadingState.loadings.has(AppLoadings.PRODUCT_LOADING)
);

export const isCartLoadingSelector = createSelector(
  appLoadingFeatureSelector,
  (appLoadingState: AppLoadingState): boolean => appLoadingState.loadings.has(AppLoadings.CART_LOADING)
);

export const isFavoriteLoadingSelector = createSelector(
  appLoadingFeatureSelector,
  (appLoadingState: AppLoadingState): boolean => appLoadingState.loadings.has(AppLoadings.FAVORITE_LOADING)
);
