import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '@store/products/action-types';
import { Product } from '@models/product.interface';
import { ProductsRequestParams } from "@models/products-request-params.interface";

export const getAllProductsAction = createAction(
  ActionTypes.GET_ALL_PRODUCTS,
  props<{ params?: ProductsRequestParams }>()
);

export const getAllProductsSuccessAction = createAction(
  ActionTypes.GET_ALL_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const getAllProductsFailureAction = createAction(
  ActionTypes.GET_ALL_PRODUCTS_FAILURE
);
