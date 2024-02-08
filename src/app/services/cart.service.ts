import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { CartProduct } from "@models/cart-product.interface";
import { Cart } from "@enums/cart.enum";
import { Product } from "@models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public addProductToCart(product: CartProduct): Observable<CartProduct> {
    const existingCart: string | null = localStorage.getItem(Cart.PRODUCTS);
    const updateCart: CartProduct[] | CartProduct = existingCart ? [...JSON.parse(existingCart), product] : [product];

    localStorage.setItem(Cart.PRODUCTS, JSON.stringify(updateCart));

    return of(product);
  }

  public removeProductFromCart(index: number): Observable<number> {
    const cartProducts: CartProduct[] = JSON.parse(localStorage.getItem(Cart.PRODUCTS)!);
    const updatedCart: CartProduct[] = cartProducts.filter((_, i) => i !== index);

    localStorage.setItem(Cart.PRODUCTS, JSON.stringify(updatedCart));

    return of(index);
  }

  public getCartProducts(products: Product[]): Observable<Product[]> {
    const existingCart: string | null = localStorage.getItem(Cart.PRODUCTS);
    const cartProducts: CartProduct[] = existingCart ? JSON.parse(existingCart) : [];
    let filteredProducts: Product[] = [];

    if(products && products.length) {
      filteredProducts = cartProducts.map((cartProduct: CartProduct) => ({
          ...products.find((product: Product) => product.uuid === cartProduct.uuid)!,
          ...cartProduct,
        })
      );
    }

    console.log(filteredProducts)

    return of(filteredProducts);
  }
}
