import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from './auth/auth.state';
import { authReducer } from './auth/auth.reducer';
import { AppLoadingState } from '@store/app-loading/app-loading.state';
import { appLoadingReducer } from '@store/app-loading/app-loading.reducer';
import { ProductsState } from '@store/products/products.state';
import { productsReducer } from '@store/products/products.reducer';

export interface AppState {
  auth: AuthState;
  appLoading: AppLoadingState;
  products: ProductsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  appLoading: appLoadingReducer,
  products: productsReducer,
}
