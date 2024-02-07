import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { CartService } from "@services/cart.service";
import {
  removeProductFromCartAction, removeProductFromCartFailureAction,
  removeProductFromCartSuccessAction
} from "@store/cart/actions/remove-cart-product.action";

@Injectable()
export class RemoveCartProductEffect {
  constructor(private readonly cartService: CartService,
              private readonly actions$: Actions) {
  }

  public removeProductFromCart$ = createEffect(() => this.actions$.pipe(
    ofType(removeProductFromCartAction),
    switchMap(({ uuid }) => this.cartService.removeProductFromCart(uuid).pipe(
      map((uuid: string) => {
        return removeProductFromCartSuccessAction({ uuid });
      }),
      catchError(() => {
        return of(removeProductFromCartFailureAction());
      })
    )),
  ));
}
