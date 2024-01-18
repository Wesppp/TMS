import { Component, OnInit } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryCard } from './models/category-card.interface';
import { CATEGORIES } from './constants/categories';
import { ProductCardComponent } from '@components/product-card/product-card.component';
import { Product } from '@models/product.interface';
import { isProductsLoadingSelector } from '@store/app-loading/app-loading.selectors';
import {
  bestSellersProductsSelector,
  featuredProductsSelector,
  latestProductsSelector, newArrivalsProductsSelector,
} from '@store/products/products.selectors';
import { getLatestProductsAction } from '@store/products/actions/get-latest-products.action';
import { AsyncPipe } from '@angular/common';
import { ProgressSpinnerComponent } from '@components/progress-spinner/progress-spinner.component';
import { getFeaturedProductsAction } from '@store/products/actions/get-featured-products.action';
import { CardType } from "@enums/card-type.enum";
import { getBestSellersProductsAction } from "@store/products/actions/get-best-sellers-products.action";
import { getNewArrivalsProductsAction } from "@store/products/actions/get-new-arrivals-products.action";
import { PageTitleComponent } from "@components/page-title/page-title.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoryCardComponent,
    TabViewModule,
    ProductCardComponent,
    AsyncPipe,
    ProgressSpinnerComponent,
    PageTitleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public latestProducts$!: Observable<Product[] | null>;
  public featuredProducts$!: Observable<Product[] | null>;
  public bestSellersProducts$!: Observable<Product[] | null>;
  public newArrivalsProducts$!: Observable<Product[] | null>;
  public isProductsLoading$!: Observable<boolean>;

  public categoryCards: CategoryCard[] = CATEGORIES;
  protected readonly Math: Math = Math;
  protected readonly cardType = CardType;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.initializeValues();
    this.fetchInitialProducts();
  }

  private initializeValues(): void {
    this.isProductsLoading$ = this.store.select(isProductsLoadingSelector);
    this.latestProducts$ = this.store.select(latestProductsSelector);
    this.featuredProducts$ = this.store.select(featuredProductsSelector);
    this.bestSellersProducts$ = this.store.select(bestSellersProductsSelector);
    this.newArrivalsProducts$ = this.store.select(newArrivalsProductsSelector);
  }

  private fetchInitialProducts(): void {
    this.store.dispatch(getLatestProductsAction(
      {
        params: { count: '8' }
      }
    ));
    this.store.dispatch(getFeaturedProductsAction(
      {
        params: { count: '4' }
      }
    ));
  }

  public onSelectTab(tabIndex: number): void {
    switch (tabIndex) {
      case 1:
        this.store.dispatch(getBestSellersProductsAction(
          {
            params: { count: '4' }
          }
        ));
      break;
      case 2:
        this.store.dispatch(getNewArrivalsProductsAction(
          {
            params: { count: '4' }
          }
        ));
      break;
    }
  }
}
