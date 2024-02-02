import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "@store/products/action-types";
import { Product } from "@models/product.interface";
import { FilterFormValues } from "@models/filter-form-values.interface";

export const filterProductsAction = createAction(
  ActionTypes.FILTER_PRODUCTS,
  props<{ filters: Partial<FilterFormValues> }>()
);

export const filterProductsSuccessAction = createAction(
  ActionTypes.FILTER_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const filterProductsFailureAction = createAction(
  ActionTypes.FILTER_PRODUCTS_FAILURE
);
