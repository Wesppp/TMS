import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { AuthTokens } from '@models/auth-tokens.interface';
import { AuthForm } from "@modules/auth/models/auth-forms.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ registerRequest: AuthForm }>(),
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ authTokens: AuthTokens }>(),
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
);
