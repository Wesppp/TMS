import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import {
  addProductAction,
  addProductFailureAction,
  addProductSuccessAction
} from "@store/cart/actions/add-product.action";
import { CartService } from "@services/cart.service";
import { CartProduct } from "@models/cart-product.interface";

@Injectable()
export class AddProductEffect {
  constructor(private readonly cartService: CartService,
              private readonly actions$: Actions) {
  }

  public addProductToCart$ = createEffect(() => this.actions$.pipe(
    ofType(addProductAction),
    switchMap(({ cartProduct }) => this.cartService.addProductToCart(cartProduct).pipe(
      map((product: CartProduct) => {
        return addProductSuccessAction({ product });
      }),
      catchError(() => {
        return of(addProductFailureAction());
      })
    )),
  ));
}
