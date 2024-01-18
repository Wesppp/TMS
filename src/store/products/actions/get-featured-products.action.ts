import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '@store/products/action-types';
import { ProductsRequestParams } from '@models/products-request-params.interface';
import { Product } from '@models/product.interface';

export const getFeaturedProductsAction = createAction(
  ActionTypes.GET_FEATURED_PRODUCTS,
  props<{ params: ProductsRequestParams }>()
);

export const getFeaturedProductsSuccessAction = createAction(
  ActionTypes.GET_FEATURED_PRODUCTS_SUCCESS,
  props<{ featuredProducts: Product[] }>()
);

export const getFeaturedProductsFailureAction = createAction(
  ActionTypes.GET_FEATURED_PRODUCTS_FAILURE
);
