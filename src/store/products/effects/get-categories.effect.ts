import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, of, switchMap } from "rxjs";

import {
  getCategoriesAction,
  getCategoriesFailureAction,
  getCategoriesSuccessAction
} from "@store/products/actions/get-categories.action";
import { Categories } from "@models/categories.interface";
import { ProductsService } from "@services/products.service";

@Injectable()
export class GetCategoriesEffect {
  constructor(private readonly productsService: ProductsService,
              private readonly actions$: Actions) {
  }

  public getCategories$ = createEffect(() => this.actions$.pipe(
    ofType(getCategoriesAction),
    switchMap(() => this.productsService.getProductsCategories().pipe(
      map((categories: Categories[]) => {
        return getCategoriesSuccessAction({ categories });
      }),
      catchError(() => {
        return of(getCategoriesFailureAction());
      })
    )),
  ));
}
