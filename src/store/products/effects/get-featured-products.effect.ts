import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { Product } from '@models/product.interface';
import {
  getFeaturedProductsAction, getFeaturedProductsFailureAction,
  getFeaturedProductsSuccessAction,
} from '@store/products/actions/get-featured-products.action';
import { ProductsService } from '@services/products.service';

@Injectable()
export class GetFeaturedProductsEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions) {
  }

  public getFeaturedProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getFeaturedProductsAction),
    switchMap(( { params } ) => this.productsService.getProducts(params).pipe(
      map((featuredProducts: Product[]) => {
        return getFeaturedProductsSuccessAction({ featuredProducts });
      }),
      catchError(() => {
        return of(getFeaturedProductsFailureAction());
      })
    )),
  ));
}
