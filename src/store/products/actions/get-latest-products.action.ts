import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '@store/products/action-types';
import { Product } from '@models/product.interface';
import { ProductsRequestParams } from '@models/products-request-params.interface';

export const getLatestProductsAction = createAction(
  ActionTypes.GET_LATEST_PRODUCTS,
  props<{ params: ProductsRequestParams }>()
);

export const getLatestProductsSuccessAction = createAction(
  ActionTypes.GET_LATEST_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const getLatestProductsFailureAction = createAction(
  ActionTypes.GET_LATEST_PRODUCTS_FAILURE
);
