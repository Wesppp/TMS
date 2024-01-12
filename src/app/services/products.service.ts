import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { Product } from '@models/product.interface';
import { environment } from '@environments/environment';
import { GetProductsResponse } from '@models/getProductsResponse.interface';

const mapProductsResponse = (response: GetProductsResponse): Product[] => {
  return response.items
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private readonly http: HttpClient) { }

  public getLatestProducts(): Observable<Product[]> {
    return this.http.get<GetProductsResponse>(`${environment.apiUrl}/products/search?count=8`)
      .pipe(
        map(mapProductsResponse)
      );
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<GetProductsResponse>(`${environment.apiUrl}/products/search`)
      .pipe(
        map(mapProductsResponse)
      );
  }
}
