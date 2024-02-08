import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { FavoritesService } from "@services/favorites.service";
import {
  addToFavoriteAction,
  addToFavoriteFailureAction,
  addToFavoriteSuccessAction
} from "@store/favorite-list/actions/add-to-favorite.action";

@Injectable()
export class AddToFavoriteEffect {
  constructor(private readonly favoriteService: FavoritesService,
              private readonly actions$: Actions) {
  }

  public addToFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(addToFavoriteAction),
    switchMap(({ productUuid }) => this.favoriteService.addToFavorite(productUuid).pipe(
      map((productUuid: string) => {
        return addToFavoriteSuccessAction({ productUuid });
      }),
      catchError(() => {
        return of(addToFavoriteFailureAction());
      })
    )),
  ));
}
