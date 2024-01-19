import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "@environments/environment";
import { Categories } from "@models/categories.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private readonly http: HttpClient) { }

  public getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${environment.apiUrl}/categories`);
  }
}
