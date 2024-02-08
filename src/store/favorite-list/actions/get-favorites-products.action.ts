import { createAction, props } from "@ngrx/store";

import { Product } from "@models/product.interface";
import { ActionTypes } from "@store/favorite-list/action-types";

export const getFavoriteProductsAction = createAction(
  ActionTypes.GET_FAVORITES_PRODUCTS
);

export const getFavoriteProductsSuccessAction = createAction(
  ActionTypes.GET_FAVORITES_PRODUCTS_SUCCESS,
  props<{ favoriteProducts: Product[] }>()
);

export const getFavoriteProductsFailureAction = createAction(
  ActionTypes.GET_FAVORITES_PRODUCTS_FAILURE
);
