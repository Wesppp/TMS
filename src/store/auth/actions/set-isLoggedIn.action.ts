import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';

export const setIsLoggedInAction = createAction(
  ActionTypes.SET_ISLOGGEDIN,
  props<{ isLoggedIn: boolean }>()
);
