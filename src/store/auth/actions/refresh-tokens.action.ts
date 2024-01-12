import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { AuthTokens } from '@models/auth-tokens.interface';

export const refreshTokensAction = createAction(
  ActionTypes.REFRESH_TOKENS,
  props<{ refreshToken: string }>()
);

export const refreshTokensSuccessAction = createAction(
  ActionTypes.REFRESH_TOKENS_SUCCESS,
  props<{ authTokens: AuthTokens }>()
);

export const refreshTokensFailureAction = createAction(
  ActionTypes.REFRESH_TOKENS_FAILURE
);
