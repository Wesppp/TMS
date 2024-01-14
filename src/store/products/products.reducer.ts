import { createReducer, on } from '@ngrx/store';

import { initialState, ProductsState } from '@store/products/products.state';
import {
  getLatestProductsSuccessAction,
} from '@store/products/actions/get-latest-products.action';
import { getAllProductsSuccessAction } from '@store/products/actions/get-all-products.action';
import {
  getFeaturedProductsSuccessAction,
} from '@store/products/actions/get-featured-products.action';
import {
  getBestSellersProductsSuccessAction,
} from '@store/products/actions/get-best-sellers-products.action';
import {
  getNewArrivalsProductsSuccessAction
} from '@store/products/actions/get-new-arrivals-products.action';

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
  on(getBestSellersProductsSuccessAction,
    (state: ProductsState, { bestSellersProducts }) => ({
      ...state,
      bestSellersProducts
    })
  ),
  on(getNewArrivalsProductsSuccessAction,
    (state: ProductsState, { newArrivalsProducts }) => ({
      ...state,
      newArrivalsProducts
    })
  ),
);
