import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { AuthFormValue } from '../../../app/modules/auth/models/auth-forms.interface';
import { AuthTokens } from '../../../app/models/auth-tokens.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ registerRequest: AuthFormValue }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ authTokens: AuthTokens }>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE
)
