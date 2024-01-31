import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '@store/products/action-types';
import { ProductsRequestParams } from '@models/products-request-params.interface';
import { Product } from '@models/product.interface';

export const getNewArrivalsProductsAction = createAction(
  ActionTypes.GET_NEW_ARRIVALS_PRODUCTS,
  props<{ params: ProductsRequestParams }>()
);

export const getNewArrivalsProductsSuccessAction = createAction(
  ActionTypes.GET_NEW_ARRIVALS_PRODUCTS_SUCCESS,
  props<{ newArrivalsProducts: Product[] }>()
);

export const getNewArrivalsProductsFailureAction = createAction(
  ActionTypes.GET_NEW_ARRIVALS_PRODUCTS_FAILURE
);
