import { createFeatureSelector, createSelector } from "@ngrx/store";

import { cartFeatureKey, CartState } from "@store/cart/cart.state";

export const cartFeatureSelector =
  createFeatureSelector<CartState>(cartFeatureKey);

export const cartProductsSelector = createSelector(
  cartFeatureSelector,
  (cartState: CartState) => cartState.cartProducts
);

export const cartProductsTotalCost = createSelector(
  cartFeatureSelector,
  (cartState: CartState) => cartState.cartProducts
    .reduce((acc, el) => acc += el.price, 0)
)
