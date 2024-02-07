import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from './auth/auth.state';
import { authReducer } from './auth/auth.reducer';
import { AppLoadingState } from '@store/app-loading/app-loading.state';
import { appLoadingReducer } from '@store/app-loading/app-loading.reducer';
import { ProductsState } from '@store/products/products.state';
import { productsReducer } from '@store/products/products.reducer';
import { HeaderState } from "@store/header/header.state";
import { headerReducer } from "@store/header/header.reducer";
import { CartState } from "@store/cart/cart.state";
import { cartReducer } from "@store/cart/cart.reducer";

export interface AppState {
  auth: AuthState;
  appLoading: AppLoadingState;
  products: ProductsState;
  header: HeaderState;
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  appLoading: appLoadingReducer,
  products: productsReducer,
  header: headerReducer,
  cart: cartReducer,
}
