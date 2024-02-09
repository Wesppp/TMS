import { Injectable } from '@angular/core';

import { map, Observable, of } from "rxjs";
import { MessageService } from "primeng/api";

import { LocalStorageKeys } from "@enums/localstorage-keys.enum";
import { Product } from "@models/product.interface";
import { ProductsService } from "@services/products.service";
import { LocalStorageService } from "@services/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor(private readonly messageService: MessageService,
              private readonly productsService: ProductsService,
              private readonly localStorageService: LocalStorageService) {
  }

  public addToFavorite(productUuid: string): Observable<string> {
    const existingFavorites: string[] | null = this.localStorageService.getStorageData(LocalStorageKeys.FAVORITES);

    if(existingFavorites && existingFavorites.includes(productUuid)) {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'You have already added the product to your favorites.' });

      return of();
    }

    return of(
      this.localStorageService.addElementToStorage(LocalStorageKeys.FAVORITES, productUuid)
    );
  }

  public removeFromFavorite(productUuid: string): Observable<string> {
    const favoriteProducts: string[] = this.localStorageService.getStorageData(LocalStorageKeys.FAVORITES)!;
    const updatedFavorites: string[] = favoriteProducts.filter((uuid) => uuid !== productUuid);

    this.localStorageService.updateStorageElements(LocalStorageKeys.FAVORITES, updatedFavorites);

    return of(productUuid);
  }

  public getFavoriteProducts(): Observable<Product[]> {
    const favoriteProducts: string[] | null = this.localStorageService.getStorageData(LocalStorageKeys.FAVORITES);

    if(!favoriteProducts) { return of([]); }

    return this.productsService.getProducts({}).pipe(
      map((products) => favoriteProducts.map((uuid: string) =>
        products.find((product: Product) => product.uuid === uuid)!))
    );
  }
}
