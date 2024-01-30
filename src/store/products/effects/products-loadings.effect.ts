import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";

import { addLoadingAction, removeLoadingAction } from "@store/app-loading/actions/loading-crud.action";
import { AppLoadings } from "@enums/app-loading.enum";
import {
  filterProductsAction,
  filterProductsFailureAction,
  filterProductsSuccessAction
} from "@store/products/actions/filter-products.action";
import {
  getAllProductsAction,
  getAllProductsFailureAction,
  getAllProductsSuccessAction
} from "@store/products/actions/get-all-products.action";
import {
  getLatestProductsAction, getLatestProductsFailureAction,
  getLatestProductsSuccessAction
} from "@store/products/actions/get-latest-products.action";
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction
} from "@store/products/actions/get-product.action";

@Injectable()
export class ProductsLoadingsEffect {

  constructor(private readonly actions$: Actions,
              private readonly store: Store) {}

  addProductsLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(filterProductsAction, getAllProductsAction, getLatestProductsAction),
      tap(() => {
        this.store.dispatch(addLoadingAction( { loadingName: AppLoadings.PRODUCTS_LOADING } ));
      })
    ),
    {dispatch: false}
  );

  removeProductsLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(filterProductsSuccessAction, filterProductsFailureAction, getAllProductsSuccessAction,
        getAllProductsFailureAction, getLatestProductsSuccessAction, getLatestProductsFailureAction),
      tap(() => {
        this.store.dispatch(removeLoadingAction( { loadingName: AppLoadings.PRODUCTS_LOADING } ));
      })
    ),
    {dispatch: false}
  );

  addProductLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(getProductAction),
      tap(() => {
        this.store.dispatch(addLoadingAction( { loadingName: AppLoadings.PRODUCT_LOADING } ));
      })
    ),
    {dispatch: false}
  );

  removeProductLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(getProductSuccessAction, getProductFailureAction),
      tap(() => {
        this.store.dispatch(removeLoadingAction( { loadingName: AppLoadings.PRODUCT_LOADING } ));
      })
    ),
    {dispatch: false}
  );
}
