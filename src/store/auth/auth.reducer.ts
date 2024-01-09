import { createReducer, on } from '@ngrx/store';

import { AuthState, initialState } from './auth.state';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';
import { logoutAction } from './actions/logout.action';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';

export const authReducer = createReducer(
  initialState,
  on(registerAction,
    (state: AuthState) => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(registerSuccessAction,
    (state: AuthState) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true
    })
  ),
  on(registerFailureAction,
    (state: AuthState) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false
    })
  ),
  on(loginAction,
    (state: AuthState) => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(loginSuccessAction,
    (state: AuthState) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true
    })
  ),
  on(loginFailureAction,
    (state: AuthState) => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false
    })
  ),
  on(logoutAction,
    () => ({
      ...initialState
    })
  ),
);
