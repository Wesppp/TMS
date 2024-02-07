import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/cart/action-types";

export const removeProductFromCartAction = createAction(
  ActionTypes.REMOVE_PRODUCT_FROM_CART,
  props<{ uuid: string }>()
);

export const removeProductFromCartSuccessAction = createAction(
  ActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,
  props<{ uuid: string }>()
);

export const removeProductFromCartFailureAction = createAction(
  ActionTypes.REMOVE_PRODUCT_FROM_CART_FAILURE
);
