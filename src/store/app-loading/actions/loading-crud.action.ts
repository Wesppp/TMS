import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/app-loading/action-types";
import { AppLoadings } from "@enums/app-loading.enum";

export const addLoadingAction = createAction(
  ActionTypes.ADD_LOADING,
  props<{ loadingName: AppLoadings }>()
);

export const removeLoadingAction = createAction(
  ActionTypes.REMOVE_LOADING,
  props<{ loadingName: AppLoadings }>()
);
