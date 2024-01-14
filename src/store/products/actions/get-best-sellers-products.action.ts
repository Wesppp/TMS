import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '@store/products/action-types';
import { ProductsRequestParams } from '@models/products-request-params.interface';
import { Product } from '@models/product.interface';

export const getBestSellersProductsAction = createAction(
  ActionTypes.GET_BEST_SELLERS_PRODUCTS,
  props<{ params: ProductsRequestParams }>()
);

export const getBestSellersProductsSuccessAction = createAction(
  ActionTypes.GET_BEST_SELLERS_PRODUCTS_SUCCESS,
  props<{ bestSellersProducts: Product[] }>()
);

export const getBestSellersProductsFailureAction = createAction(
  ActionTypes.GET_BEST_SELLERS_PRODUCTS_FAILURE
);
