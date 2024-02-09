import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/favorite-list/action-types";
import { Product } from "@models/product.interface";

export const updateProductAction = createAction(
  ActionTypes.UPDATE_PRODUCT,
  props<{ product: Product }>()
);
