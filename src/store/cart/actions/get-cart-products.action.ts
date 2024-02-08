import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/cart/action-types";
import { Product } from "@models/product.interface";

export const getCartProductsAction = createAction(
  ActionTypes.GET_CART_PRODUCTS
);

export const getCartProductsSuccessAction = createAction(
  ActionTypes.GET_CART_PRODUCTS_SUCCESS,
  props<{ cartProducts: Product[] }>()
);

export const getCartProductsFailureAction = createAction(
  ActionTypes.GET_CART_PRODUCTS_FAILURE
);
