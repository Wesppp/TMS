import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/cart/action-types";
import { CartProduct } from "@models/cart-product.interface";

export const addProductAction = createAction(
  ActionTypes.ADD_PRODUCT_TO_CART,
  props<{ cartProduct: CartProduct }>()
);

export const addProductSuccessAction = createAction(
  ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
  props<{ product: CartProduct }>()
);

export const addProductFailureAction = createAction(
  ActionTypes.ADD_PRODUCT_TO_CART_FAILURE
);
