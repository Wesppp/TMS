import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { FavoritesService } from "@services/favorites.service";
import {
  removeFromFavoriteAction, removeFromFavoriteFailureAction,
  removeFromFavoriteSuccessAction
} from "@store/favorite-list/actions/remove-from-favorite.action";

@Injectable()
export class RemoveFromFavoriteEffect {
  constructor(private readonly favoriteService: FavoritesService,
              private readonly actions$: Actions) {
  }

  public removeFromFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(removeFromFavoriteAction),
    switchMap(({ productUuid }) => this.favoriteService.removeFromFavorite(productUuid).pipe(
      map((productUuid: string) => {
        return removeFromFavoriteSuccessAction({ productUuid });
      }),
      catchError(() => {
        return of(removeFromFavoriteFailureAction());
      })
    )),
  ));
}
