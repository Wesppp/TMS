import { createReducer, on } from '@ngrx/store';

import { initialState, ProductsState } from '@store/products/products.state';
import {
  getLatestProductsSuccessAction,
} from '@store/products/actions/get-latest-products.action';
import { getAllProductsSuccessAction } from '@store/products/actions/get-all-products.action';
import {
  getFeaturedProductsSuccessAction,
} from '@store/products/actions/get-featured-products.action';

export const productsReducer = createReducer(
  initialState,
  on(getLatestProductsSuccessAction,
    (state: ProductsState, { latestProducts }) => ({
      ...state,
      latestProducts
    })
  ),
  on(getAllProductsSuccessAction,
    (state: ProductsState, { products }) => ({
      ...state,
      products
    })
  ),
  on(getFeaturedProductsSuccessAction,
    (state: ProductsState, { featuredProducts }) => ({
      ...state,
      featuredProducts
    })
  ),
);
