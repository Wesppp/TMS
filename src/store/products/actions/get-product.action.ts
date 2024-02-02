import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "@store/products/action-types";

import { Product } from "@models/product.interface";

export const getProductAction = createAction(
  ActionTypes.GET_PRODUCT,
  props<{ id: string }>()
);

export const getProductSuccessAction = createAction(
  ActionTypes.GET_PRODUCT_SUCCESS,
  props<{ product: Product }>()
);

export const getProductFailureAction = createAction(
  ActionTypes.GET_PRODUCT_FAILURE
);
