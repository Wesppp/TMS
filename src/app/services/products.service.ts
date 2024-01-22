import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { Product } from '@models/product.interface';
import { environment } from '@environments/environment';
import { GetProductsResponse } from '@models/get-products-response.interface';
import { ProductsRequestParams } from '@models/products-request-params.interface';
import { Categories } from "@models/categories.interface";

const mapGetProductsResponse = (response: GetProductsResponse): Product[] => {
  return response.items
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private readonly http: HttpClient) { }

  public getProducts(params: ProductsRequestParams): Observable<Product[]> {
    let queryParams: HttpParams = new HttpParams();

    for(const key in params) {
      queryParams = params[key] ? queryParams.set(key, params[key] as string) : queryParams;
    }

    return this.http.get<GetProductsResponse>(`${environment.apiUrl}/products/search`, {
      params: queryParams
    }).pipe(
        map(mapGetProductsResponse)
    );
  }

  public getProductsCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${environment.apiUrl}/categories`);
  }
}
