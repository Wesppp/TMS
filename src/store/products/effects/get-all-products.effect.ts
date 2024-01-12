import { Injectable } from '@angular/core';

import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ProductsService } from '@services/products.service';
import { Product } from '@models/product.interface';
import {
  getAllProductsAction, getAllProductsFailureAction,
  getAllProductsSuccessAction,
} from '@store/products/actions/get-all-products.action';

@Injectable()
export class GetAllProductsEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions) {
  }

  public getAllProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getAllProductsAction),
    switchMap(() => this.productsService.getProducts({}).pipe(
      map((products: Product[]) => {
        return getAllProductsSuccessAction({ products });
      }),
      catchError(() => {
        return of(getAllProductsFailureAction());
      })
    )),
  ));
}
