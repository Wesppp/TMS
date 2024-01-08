import { Action, createReducer, on } from '@ngrx/store';

import { AuthState, initialState } from './auth.state';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

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
      isSubmitting: false
    })
  ),
  on(registerFailureAction,
    (state: AuthState) => ({
      ...state,
      isSubmitting: false
    })
  ),
);

export function reducers(state: AuthState, action: Action): AuthState {
  return authReducer(state, action)
}
