import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { AuthFormValue } from '../../../app/modules/auth/models/auth-forms.interface';
import { AuthTokens } from '../../../app/models/auth-tokens.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ loginRequest: AuthFormValue }>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ authTokens: AuthTokens }>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE
)
