import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/products/action-types";
import { Categories } from "@models/categories.interface";

export const getCategoriesAction = createAction(
  ActionTypes.GET_CATEGORIES
);

export const getCategoriesSuccessAction = createAction(
  ActionTypes.GET_CATEGORIES_SUCCESS,
  props<{ categories: Categories[] }>()
);

export const getCategoriesFailureAction = createAction(
  ActionTypes.GET_CATEGORIES_FAILURE
);
