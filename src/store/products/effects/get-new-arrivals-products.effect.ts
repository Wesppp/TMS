import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { Product } from '@models/product.interface';
import {
  getNewArrivalsProductsAction,
  getNewArrivalsProductsFailureAction,
  getNewArrivalsProductsSuccessAction,
} from '@store/products/actions/get-new-arrivals-products.action';
import { ProductsService } from '@services/products.service';

@Injectable()
export class GetNewArrivalsProductsEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions) {
  }

  public newArrivalsProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getNewArrivalsProductsAction),
    switchMap(( { params } ) => this.productsService.getProducts(params).pipe(
      map((newArrivalsProducts: Product[]) => {
        return getNewArrivalsProductsSuccessAction({ newArrivalsProducts });
      }),
      catchError(() => {
        return of(getNewArrivalsProductsFailureAction());
      })
    )),
  ));
}
