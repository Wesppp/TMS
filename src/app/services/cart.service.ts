import { Injectable } from '@angular/core';

import { map, Observable, of } from "rxjs";
import { MessageService } from "primeng/api";

import { CartProduct } from "@models/cart-product.interface";
import { LocalStorageKeys } from "@enums/localstorage-keys.enum";
import { Product } from "@models/product.interface";
import { ProductsService } from "@services/products.service";
import { LocalStorageService } from "@services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private readonly messageService: MessageService,
              private readonly productsService: ProductsService,
              private readonly localStorageService: LocalStorageService) {
  }

  public addProductToCart(product: CartProduct): Observable<CartProduct> {
    if (!product.size || !product.color) {
      this.messageService.add({severity: 'info', summary: 'Info', detail: 'Choose the color and size of the product.'});

      return of();
    }

    return of(
      this.localStorageService.addElementToStorage(LocalStorageKeys.PRODUCTS, product)
    );
  }

  public removeProductFromCart(index: number): Observable<number> {
    const cartProducts: CartProduct[] = this.localStorageService.getStorageData(LocalStorageKeys.PRODUCTS)!;
    const updatedCart: CartProduct[] = cartProducts.filter((_, i) => i !== index);

    this.localStorageService.updateStorageElements(LocalStorageKeys.PRODUCTS, updatedCart);

    return of(index);
  }

  public getCartProducts(): Observable<Product[]> {
    const cartProducts: CartProduct[] | null = this.localStorageService.getStorageData(LocalStorageKeys.PRODUCTS);

    if (!cartProducts) { return of([]); }

    return this.productsService.getProducts({}).pipe(
      map((products) => cartProducts.map((cartProduct: CartProduct) => ({
        ...products.find((product: Product) => product.uuid === cartProduct.uuid)!,
        ...cartProduct,
      })))
    );
  }
}
