import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";
import { MessageService } from "primeng/api";

import { CartProduct } from "@models/cart-product.interface";
import { LocalStorageKeys } from "@enums/localstorage-keys.enum";
import { Product } from "@models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private readonly messageService: MessageService) {
  }

  public addProductToCart(product: CartProduct): Observable<CartProduct> {
    const existingCart: string | null = localStorage.getItem(LocalStorageKeys.PRODUCTS);

    if(!product.size || !product.color) {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Choose the color and size of the product.' });

      return of();
    }

    const updateCart: CartProduct[] = existingCart ? [...JSON.parse(existingCart), product] : [product];

    localStorage.setItem(LocalStorageKeys.PRODUCTS, JSON.stringify(updateCart));

    return of(product);
  }

  public removeProductFromCart(index: number): Observable<number> {
    const cartProducts: CartProduct[] = JSON.parse(localStorage.getItem(LocalStorageKeys.PRODUCTS)!);
    const updatedCart: CartProduct[] = cartProducts.filter((_, i) => i !== index);

    localStorage.setItem(LocalStorageKeys.PRODUCTS, JSON.stringify(updatedCart));

    return of(index);
  }

  public getCartProducts(products: Product[]): Observable<Product[]> {
    const existingCart: string | null = localStorage.getItem(LocalStorageKeys.PRODUCTS);
    const cartProducts: CartProduct[] = existingCart ? JSON.parse(existingCart) : [];
    let filteredProducts: Product[] = [];

    if(products && products.length) {
      filteredProducts = cartProducts.map((cartProduct: CartProduct) => ({
          ...products.find((product: Product) => product.uuid === cartProduct.uuid)!,
          ...cartProduct,
        })
      );
    }

    return of(filteredProducts);
  }
}
