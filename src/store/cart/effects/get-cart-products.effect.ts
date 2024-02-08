import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";

import { CartService } from "@services/cart.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  getCartProductsAction,
  getCartProductsFailureAction,
  getCartProductsSuccessAction
} from "@store/cart/actions/get-cart-products.action";
import { Product } from "@models/product.interface";
import { productsSelector } from "@store/products/products.selectors";

@Injectable()
export class GetCartProductsEffect {
  constructor(private readonly cartService: CartService,
              private readonly store: Store,
              private readonly actions$: Actions) {
  }

  public getCartProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getCartProductsAction),
    withLatestFrom(this.store.select(productsSelector)),
    switchMap(([_, products]) => this.cartService.getCartProducts(products).pipe(
      map((cartProducts: Product[]) => {
        return getCartProductsSuccessAction({ cartProducts });
      }),
      catchError(() => {
        return of(getCartProductsFailureAction());
      })
    )),
  ));
}
