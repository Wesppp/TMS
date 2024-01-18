import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take } from 'rxjs';

import { Product } from '@models/product.interface';
import {
  getBestSellersProductsAction,
  getBestSellersProductsFailureAction,
  getBestSellersProductsSuccessAction,
} from '@store/products/actions/get-best-sellers-products.action';
import { ProductsService } from '@services/products.service';

@Injectable()
export class GetBestSellersProductsEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions) {
  }

  public bestSellersProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getBestSellersProductsAction),
    take(1),
    switchMap(( { params } ) => this.productsService.getProducts(params).pipe(
      map((bestSellersProducts: Product[]) => {
        return getBestSellersProductsSuccessAction({ bestSellersProducts });
      }),
      catchError(() => {
        return of(getBestSellersProductsFailureAction());
      })
    )),
  ));
}
