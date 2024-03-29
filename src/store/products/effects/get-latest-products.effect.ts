import { Injectable } from '@angular/core';

import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ProductsService } from '@services/products.service';
import {
  getLatestProductsAction, getLatestProductsFailureAction,
  getLatestProductsSuccessAction,
} from '@store/products/actions/get-latest-products.action';
import { Product } from '@models/product.interface';

@Injectable()
export class GetLatestProductsEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions) {
  }

  public getLatestProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getLatestProductsAction),
    switchMap(( { params } ) => this.productsService.getProducts(params).pipe(
      map((latestProducts: Product[]) => {
        return getLatestProductsSuccessAction({ latestProducts });
      }),
      catchError(() => {
        return of(getLatestProductsFailureAction());
      })
    )),
  ));
}
