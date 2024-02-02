import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";

import { Product } from "@models/product.interface";
import {
  filterProductsAction,
  filterProductsFailureAction,
  filterProductsSuccessAction
} from "@store/products/actions/filter-products.action";
import { productsSelector } from "@store/products/products.selectors";
import { ProductsService } from "@services/products.service";

@Injectable()
export class FilterProductsEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions,
              private readonly store: Store) {
  }

  public filterProducts$ = createEffect(() => this.actions$.pipe(
    ofType(filterProductsAction),
    withLatestFrom(this.store.select(productsSelector)),
    switchMap(([{filters}, products]) => this.productsService.filterProducts(filters, products).pipe(
      map((products: Product[]) => {
        return filterProductsSuccessAction({ products });
      }),
      catchError(() => {
        return of(filterProductsFailureAction());
      })
    )),
  ));
}
