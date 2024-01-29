import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { Product } from "@models/product.interface";
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction
} from "@store/products/actions/get-product.action";
import { ProductsService } from "@services/products.service";

@Injectable()
export class GetProductEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions) {
  }

  public getProduct$ = createEffect(() => this.actions$.pipe(
    ofType(getProductAction),
    switchMap(({ id }) => this.productsService.getProduct(id).pipe(
      map((product: Product) => {
        return getProductSuccessAction({ product });
      }),
      catchError(() => {
        return of(getProductFailureAction());
      })
    )),
  ));
}
