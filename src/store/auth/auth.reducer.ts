import { createReducer, on } from '@ngrx/store';

import { AuthState, initialState } from './auth.state';
import {
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';
import { logoutAction } from './actions/logout.action';
import { loginFailureAction, loginSuccessAction } from './actions/login.action';
import {
  refreshTokensFailureAction,
  refreshTokensSuccessAction,
} from './actions/refresh-tokens.action';

export const authReducer = createReducer(
  initialState,
  on(registerSuccessAction, loginSuccessAction,
    (state: AuthState) => ({
      ...state,
      isLoggedIn: true
    })
  ),
  on(registerFailureAction, loginFailureAction,
    (state: AuthState) => ({
      ...state,
      isLoggedIn: false
    })
  ),
  on(refreshTokensSuccessAction,
    (state: AuthState) => ({
      ...state,
      isLoggedIn: true
    })
  ),
  on(refreshTokensFailureAction,
    (state: AuthState) => ({
      ...state,
      isLoggedIn: false
    })
  ),
  on(logoutAction,
    () => ({
      ...initialState
    })
  ),
);
