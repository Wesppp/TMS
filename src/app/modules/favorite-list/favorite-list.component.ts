import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from "@angular/common";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Product } from "@models/product.interface";
import { favoriteProductsSelector } from "@store/favorite-list/favorite-list.selectors";
import { getFavoriteProductsAction } from "@store/favorite-list/actions/get-favorites-products.action";
import { ProgressSpinnerComponent } from "@components/progress-spinner/progress-spinner.component";
import { ButtonModule } from "primeng/button";
import { CardType } from "@enums/card-type.enum";
import { ProductCardComponent } from "@components/product-card/product-card.component";
import { removeFromFavoriteAction } from "@store/favorite-list/actions/remove-from-favorite.action";
import { addProductAction } from "@store/cart/actions/add-product.action";
import { CartProduct } from "@models/cart-product.interface";
import { isFavoriteLoadingSelector } from "@store/app-loading/app-loading.selectors";

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [
    AsyncPipe,
    ProgressSpinnerComponent,
    ButtonModule,
    ProductCardComponent
  ],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent implements OnInit {
  public favoriteProducts$!: Observable<Product[]>;
  public isFavoriteLoafing$!: Observable<boolean>;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.initializeValues();

    this.store.dispatch(getFavoriteProductsAction());
  }

  private initializeValues(): void {
    this.favoriteProducts$ = this.store.select(favoriteProductsSelector);
    this.isFavoriteLoafing$ = this.store.select(isFavoriteLoadingSelector);
  }

  protected readonly CardType = CardType;

  public onRemoveProduct({ uuid }: Product): void {
    this.store.dispatch(removeFromFavoriteAction({ productUuid: uuid }));
  }

  public onCartAdd(product: Product): void {
    const cartProduct: CartProduct = {
      uuid: product.uuid,
      color: product.color || '',
      size: product.size || '',
    };

    this.store.dispatch(addProductAction({ cartProduct }));
  }
}
