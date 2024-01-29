import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productsFeatureKey, ProductsState } from '@store/products/products.state';
import { AccordionControlElement } from "@models/accordion-control-element.interface";

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

export const categoriesSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.categories
);

export const categoriesForAccordionSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.categories ?
    productsState.categories?.map(ctg => (
      { value: ctg.translation, nestedValues: ctg.nested?.map(nestedEl => nestedEl.translation) })
    ) as AccordionControlElement[] : null
);

export const productSelector = createSelector(
  productsFeatureSelector,
  (productsState: ProductsState) => productsState.product
);
