import { createReducer, on } from '@ngrx/store';

import { AppLoadingState, initialState } from '@store/app-loading/app-loading.state';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@store/auth/actions/register.action';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '@store/auth/actions/login.action';
import { AppLoadings } from '@enums/app-loading.enum';

export const appLoadingReducer = createReducer(
  initialState,
  on(registerAction, loginAction,
    (state: AppLoadingState) => ({
      ...state,
      loadings: state.loadings.add(AppLoadings.AUTH_LOADING)
    })
  ),
  on(registerSuccessAction, loginSuccessAction, registerFailureAction, loginFailureAction,
    (state: AppLoadingState) => {
      const loadings = new Set(state.loadings);

      loadings.delete(AppLoadings.AUTH_LOADING);

      return {
        ...state,
        loadings: loadings
      }
    }
  ),
);
