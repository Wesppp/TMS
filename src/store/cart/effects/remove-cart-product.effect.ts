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
    switchMap(({ index }) => this.cartService.removeProductFromCart(index).pipe(
      map((index) => {
        return removeProductFromCartSuccessAction({ index });
      }),
      catchError(() => {
        return of(removeProductFromCartFailureAction());
      })
    )),
  ));
}
