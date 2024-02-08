import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/favorite-list/action-types";

export const addToFavoriteAction = createAction(
  ActionTypes.ADD_TO_FAVORITE,
  props<{ productUuid: string }>()
);

export const addToFavoriteSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITE_SUCCESS,
  props<{ productUuid: string }>()
);

export const addToFavoriteFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITE_FAILURE
);
