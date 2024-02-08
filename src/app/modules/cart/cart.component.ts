import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from "@angular/common";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { PaymentComponent } from "@modules/cart/components/payment/payment.component";
import { Product } from "@models/product.interface";
import { cartProductsSelector, cartProductsTotalCost } from "@store/cart/cart.selectors";
import { ProductCardComponent } from "@components/product-card/product-card.component";
import { CardType } from "@enums/card-type.enum";
import { ProgressSpinnerComponent } from "@components/progress-spinner/progress-spinner.component";
import { getCartProductsAction } from "@store/cart/actions/get-cart-products.action";
import { ButtonModule } from "primeng/button";
import { removeProductFromCartAction } from "@store/cart/actions/remove-cart-product.action";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    PaymentComponent,
    AsyncPipe,
    ProductCardComponent,
    ProgressSpinnerComponent,
    ButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  public cartProducts$!: Observable<Product[]>;
  public totalCost$!: Observable<number>;

  protected readonly CardType = CardType;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.initializeValues();

    this.store.dispatch(getCartProductsAction());
  }

  private initializeValues(): void {
    this.cartProducts$ = this.store.select(cartProductsSelector);
    this.totalCost$ = this.store.select(cartProductsTotalCost);
  }

  public onRemoveProduct(index: number): void {
    this.store.dispatch(removeProductFromCartAction({ index }));
  }
}
