import { Injectable } from '@angular/core';

import { map, Observable, of } from "rxjs";
import { MessageService } from "primeng/api";

import { LocalStorageKeys } from "@enums/localstorage-keys.enum";
import { Product } from "@models/product.interface";
import { ProductsService } from "@services/products.service";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private readonly messageService: MessageService,
              private readonly productsService: ProductsService) {
  }

  public addToFavorite(productUuid: string): Observable<string> {
    const existingFavorites: string | null = localStorage.getItem(LocalStorageKeys.FAVORITES);

    if(existingFavorites && JSON.parse(existingFavorites).includes(productUuid)) {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'You have already added the product to your favorites.' });

      return of();
    }

    const updateFavorite: string[] = existingFavorites ? [...JSON.parse(existingFavorites), productUuid] : [productUuid];

    localStorage.setItem(LocalStorageKeys.FAVORITES, JSON.stringify(updateFavorite));

    return of(productUuid);
  }

  public removeFromFavorite(productUuid: string): Observable<string> {
    const favoriteProducts: string[] = JSON.parse(localStorage.getItem(LocalStorageKeys.FAVORITES)!);
    const updatedFavorites: string[] = favoriteProducts.filter((uuid) => uuid === productUuid);

    localStorage.setItem(LocalStorageKeys.FAVORITES, JSON.stringify(updatedFavorites));

    return of(productUuid);
  }

  public getFavoriteProducts(): Observable<Product[]> {
    const existingCart: string | null = localStorage.getItem(LocalStorageKeys.FAVORITES);
    const favoriteProducts: string[] = existingCart ? JSON.parse(existingCart) : [];

    return this.productsService.getProducts({}).pipe(
      map((products) => favoriteProducts.map((uuid: string) =>
        products.find((product: Product) => product.uuid === uuid)!))
    );
  }
}
