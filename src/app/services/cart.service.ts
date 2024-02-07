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

  public removeProductFromCart(uuid: string): Observable<string> {
    const cartProducts: CartProduct[] = JSON.parse(localStorage.getItem(Cart.PRODUCTS)!);
    const updatedCart: CartProduct[] = cartProducts.filter(product => product.uuid !== uuid);

    localStorage.setItem(Cart.PRODUCTS, JSON.stringify(updatedCart));

    return of(uuid);
  }

  public getCartProducts(products: Product[]): Observable<Product[]> {
    const existingCart: string | null = localStorage.getItem(Cart.PRODUCTS);
    const cartProducts: CartProduct[] = existingCart ? JSON.parse(existingCart) : [];
    const filteredProducts: Product[] = products.filter((product: Product) =>
      cartProducts.some((cartProduct: CartProduct) => cartProduct.uuid === product.uuid)
    );

    return of(filteredProducts);
  }
}
