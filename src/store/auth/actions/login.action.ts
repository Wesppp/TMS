import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { AuthTokens } from '@models/auth-tokens.interface';
import { AuthForm } from "@modules/auth/models/auth-forms.interface";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ loginRequest: AuthForm }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ authTokens: AuthTokens }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE
);
