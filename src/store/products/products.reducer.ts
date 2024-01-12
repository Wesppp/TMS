import { createReducer, on } from '@ngrx/store';

import { initialState, ProductsState } from '@store/products/products.state';
import {
  getLatestProductsSuccessAction,
} from '@store/products/actions/get-latest-products.action';
import { getAllProductsSuccessAction } from '@store/products/actions/get-all-products.action';

export const productsReducer = createReducer(
  initialState,
  on(getLatestProductsSuccessAction,
    (state: ProductsState) => ({
      ...state,
      products: state.products
    })
  ),
  on(getAllProductsSuccessAction,
    (state: ProductsState) => ({
      ...state,
      products: state.products
    })
  ),
);
