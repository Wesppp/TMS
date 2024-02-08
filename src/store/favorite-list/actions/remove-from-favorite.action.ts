import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/favorite-list/action-types";

export const removeFromFavoriteAction = createAction(
  ActionTypes.REMOVE_FROM_FAVORITE,
  props<{ productUuid: string }>()
);

export const removeFromFavoriteSuccessAction = createAction(
  ActionTypes.REMOVE_FROM_FAVORITE_SUCCESS,
  props<{ productUuid: string }>()
);

export const removeFromFavoriteFailureAction = createAction(
  ActionTypes.REMOVE_FROM_FAVORITE_FAILURE
);
