import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productsFeatureKey, ProductsState } from '@store/products/products.state';

export const productsFeatureSelector =
  createFeatureSelector<ProductsState>(productsFeatureKey);

export const productsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.products
);
