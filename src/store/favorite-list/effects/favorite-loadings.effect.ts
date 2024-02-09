import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";

import { addLoadingAction, removeLoadingAction } from "@store/app-loading/actions/loading-crud.action";
import { AppLoadings } from "@enums/app-loading.enum";
import {
  getFavoriteProductsAction,
  getFavoriteProductsFailureAction, getFavoriteProductsSuccessAction
} from "@store/favorite-list/actions/get-favorites-products.action";

@Injectable()
export class FavoriteLoadingsEffect {

  constructor(private readonly actions$: Actions,
              private readonly store: Store) {}

  addFavoriteLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(getFavoriteProductsAction),
      tap(() => {
        this.store.dispatch(addLoadingAction( { loadingName: AppLoadings.FAVORITE_LOADING } ));
      })
    ),
    {dispatch: false}
  );

  removeFavoriteLoading$ = createEffect(
    () => this.actions$.pipe(
      ofType(getFavoriteProductsFailureAction, getFavoriteProductsSuccessAction),
      tap(() => {
        this.store.dispatch(removeLoadingAction( { loadingName: AppLoadings.FAVORITE_LOADING } ));
      })
    ),
    {dispatch: false}
  );
}
