import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '@store/products/action-types';
import { Product } from '@models/product.interface';

export const getLatestProductsAction = createAction(
  ActionTypes.GET_LATEST_PRODUCTS
);

export const getLatestProductsSuccessAction = createAction(
  ActionTypes.GET_LATEST_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const getLatestProductsFailureAction = createAction(
  ActionTypes.GET_LATEST_PRODUCTS_FAILURE
);
