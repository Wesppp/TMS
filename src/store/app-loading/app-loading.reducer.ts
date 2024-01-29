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
import {
  getLatestProductsAction,
  getLatestProductsFailureAction,
  getLatestProductsSuccessAction,
} from '@store/products/actions/get-latest-products.action';
import {
  getNewArrivalsProductsAction, getNewArrivalsProductsFailureAction,
  getNewArrivalsProductsSuccessAction,
} from '@store/products/actions/get-new-arrivals-products.action';
import {
  getBestSellersProductsAction,
  getBestSellersProductsFailureAction,
  getBestSellersProductsSuccessAction,
} from '@store/products/actions/get-best-sellers-products.action';
import {
  getAllProductsAction,
  getAllProductsFailureAction,
  getAllProductsSuccessAction,
} from '@store/products/actions/get-all-products.action';
import {
  getFeaturedProductsAction, getFeaturedProductsFailureAction,
  getFeaturedProductsSuccessAction,
} from '@store/products/actions/get-featured-products.action';
import {
  filterProductsAction,
  filterProductsFailureAction,
  filterProductsSuccessAction
} from "@store/products/actions/filter-products.action";
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction
} from "@store/products/actions/get-product.action";

function deleteLoadingFromState(state: AppLoadingState, loadingName: AppLoadings): AppLoadingState {
  const loadings: Set<string> = new Set(state.loadings);

  loadings.delete(loadingName);

  return {
    ...state,
    loadings: loadings
  }
}

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
      return deleteLoadingFromState(state, AppLoadings.AUTH_LOADING);
    }
  ),
  on(getLatestProductsAction, getAllProductsAction,
    filterProductsAction,
    (state: AppLoadingState) => ({
      ...state,
      loadings: state.loadings.add(AppLoadings.PRODUCTS_LOADING)
    })
  ),
  on(getLatestProductsSuccessAction, getLatestProductsFailureAction,
    getAllProductsSuccessAction, getAllProductsFailureAction,
    filterProductsSuccessAction, filterProductsFailureAction,
    (state: AppLoadingState) => {
      return deleteLoadingFromState(state, AppLoadings.PRODUCTS_LOADING);
    }
  ),
  on(getFeaturedProductsAction, getBestSellersProductsAction,
    getNewArrivalsProductsAction,
    (state: AppLoadingState) => ({
      ...state,
      loadings: state.loadings.add(AppLoadings.FEATURED_PRODUCTS_LOADING)
    })
  ),
  on(getFeaturedProductsSuccessAction, getFeaturedProductsFailureAction,
    getNewArrivalsProductsSuccessAction, getNewArrivalsProductsFailureAction,
    getBestSellersProductsSuccessAction, getBestSellersProductsFailureAction,
    (state: AppLoadingState) => {
      return deleteLoadingFromState(state, AppLoadings.FEATURED_PRODUCTS_LOADING);
    }
  ),
  on(getProductAction,
    (state: AppLoadingState) => ({
      ...state,
      loadings: state.loadings.add(AppLoadings.PRODUCT_LOADING)
    })
  ),
  on(getProductSuccessAction, getProductFailureAction,
    (state: AppLoadingState) => {
      return deleteLoadingFromState(state, AppLoadings.PRODUCT_LOADING);
    }
  ),
);
