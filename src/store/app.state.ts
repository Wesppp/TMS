import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from './auth/auth.state';
import { authReducer } from './auth/auth.reducer';
import { AppLoadingState } from '@store/app-loading/app-loading.state';
import { appLoadingReducer } from '@store/app-loading/app-loading.reducer';

export interface AppState {
  auth: AuthState;
  appLoading: AppLoadingState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  appLoading: appLoadingReducer
}
