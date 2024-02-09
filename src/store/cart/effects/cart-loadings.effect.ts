import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";

import { addLoadingAction, removeLoadingAction } from "@store/app-loading/actions/loading-crud.action";
import { AppLoadings } from "@enums/app-loading.enum";
import {
  getCartProductsAction,
  getCartProductsFailureAction,
  getCartProductsSuccessAction
} from "@store/cart/actions/get-cart-products.action";

@Injectable()
export class CartLoadingsEffect {

  constructor(private readonly actions$: Actions,
              private readonly store: Store) {}

  addCartLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(getCartProductsAction),
      tap(() => {
        this.store.dispatch(addLoadingAction( { loadingName: AppLoadings.CART_LOADING } ));
      })
    ),
    {dispatch: false}
  );

  removeCartLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(getCartProductsSuccessAction, getCartProductsFailureAction),
      tap(() => {
        this.store.dispatch(removeLoadingAction( { loadingName: AppLoadings.CART_LOADING } ));
      })
    ),
    {dispatch: false}
  );
}
