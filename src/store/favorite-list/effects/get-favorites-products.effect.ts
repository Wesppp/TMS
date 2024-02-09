import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { Product } from "@models/product.interface";
import { FavoritesService } from "@services/favorites.service";
import {
  getFavoriteProductsAction, getFavoriteProductsFailureAction,
  getFavoriteProductsSuccessAction
} from "@store/favorite-list/actions/get-favorites-products.action";

@Injectable()
export class GetFavoritesProductsEffect {
  constructor(private readonly favoriteService: FavoritesService,
              private readonly store: Store,
              private readonly actions$: Actions) {
  }

  public getFavoriteProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getFavoriteProductsAction),
    switchMap(() => this.favoriteService.getFavoriteProducts().pipe(
      map((favoriteProducts: Product[]) => {
        return getFavoriteProductsSuccessAction({ favoriteProducts });
      }),
      catchError(() => {
        return of(getFavoriteProductsFailureAction());
      })
    )),
  ));
}
