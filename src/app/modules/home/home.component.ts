import { Component, OnInit } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryCard } from './models/category-card.interface';
import { CATEGORIES } from './constants/categories';
import { ProductCardComponent } from '@components/product-card/product-card.component';
import { Product } from '@models/product.interface';
import { PRODUCTS_LONG } from '@constants/products';
import { isProductsLoadingSelector } from '@store/app-loading/app-loading.selectors';
import { productsSelector } from '@store/products/products.selectors';
import { getLatestProductsAction } from '@store/products/actions/get-latest-products.action';
import { AsyncPipe } from '@angular/common';
import { ProgressSpinnerComponent } from '@components/progress-spinner/progress-spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoryCardComponent,
    TabViewModule,
    ProductCardComponent,
    AsyncPipe,
    ProgressSpinnerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public latestProducts$!: Observable<Product[]>;
  public isProductsLoading$!: Observable<boolean>;

  public productLongCards: Product[] = PRODUCTS_LONG;
  public categoryCards: CategoryCard[] = CATEGORIES;
  public readonly Math: Math = Math;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.initializeValues();
    this.store.dispatch(getLatestProductsAction());
  }

  private initializeValues(): void {
    this.isProductsLoading$ = this.store.select(isProductsLoadingSelector);
    this.latestProducts$ = this.store.select(productsSelector);
  }
}
