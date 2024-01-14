import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productsFeatureKey, ProductsState } from '@store/products/products.state';

export const productsFeatureSelector =
  createFeatureSelector<ProductsState>(productsFeatureKey);

export const productsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.products
);

export const latestProductsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.latestProducts
);

export const featuredProductsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.featuredProducts
);

export const bestSellersProductsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.bestSellersProducts
);

export const newArrivalsProductsSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.newArrivalsProducts
);
