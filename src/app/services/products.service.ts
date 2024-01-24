import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, Observable, of } from 'rxjs';

import { Product } from '@models/product.interface';
import { environment } from '@environments/environment';
import { GetProductsResponse } from '@models/get-products-response.interface';
import { ProductsRequestParams } from '@models/products-request-params.interface';
import { Categories } from "@models/categories.interface";
import { FilterFormValues } from "@models/filter-form-values.interface";

const mapGetProductsResponse = (response: GetProductsResponse): Product[] => {
  return response.items
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private readonly http: HttpClient) { }

  public getProducts(params?: ProductsRequestParams): Observable<Product[]> {
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

  public filterProducts(filters: Partial<FilterFormValues>, products: Product[] | null): Observable<Product[]> {
    if (products) {
      return of(products.filter(product =>
        (!filters.search || product.title.toLowerCase().includes(filters.search.toLowerCase())) &&
        (!filters.color || product.colors.includes(filters.color)) &&
        (!filters.size || product.sizes.includes(filters.size)) &&
        (!filters.price || (product.price >= filters.price[0] && product.price <= filters.price[1])) &&
        (!filters.brand || filters.brand.includes(product.brand)) &&
        (!filters.category || filters.category === product.category)));
    }

    return of([])
  }
}
