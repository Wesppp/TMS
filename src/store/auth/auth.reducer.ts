import { Action, createReducer, on } from '@ngrx/store';

import { AuthState, initialState } from './auth.state';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';
import { logoutAction } from './actions/logout.action';

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
      isSubmitting: false
    })
  ),
  on(logoutAction,
    () => ({
      ...initialState
    })
  ),
);

export function reducers(state: AuthState, action: Action): AuthState {
  return authReducer(state, action)
}
