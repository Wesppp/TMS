import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { PageTitleComponent } from "@components/page-title/page-title.component";
import { SideBarFiltersComponent } from "@modules/products-list/components/side-bar-filters/side-bar-filters.component";
import { TopBarFiltersComponent } from "@modules/products-list/components/top-bar-filters/top-bar-filters.component";
import { Product } from "@models/product.interface";
import { isProductsLoadingSelector } from "@store/app-loading/app-loading.selectors";
import { productsSelector } from "@store/products/products.selectors";
import { getAllProductsAction } from "@store/products/actions/get-all-products.action";
import { AsyncPipe } from "@angular/common";
import { ProductCardComponent } from "@components/product-card/product-card.component";
import { PaginatorModule, PaginatorState } from "primeng/paginator";
import { ProgressSpinnerComponent } from "@components/progress-spinner/progress-spinner.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    PageTitleComponent,
    SideBarFiltersComponent,
    TopBarFiltersComponent,
    AsyncPipe,
    ProductCardComponent,
    PaginatorModule,
    ProgressSpinnerComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  public title: string = 'Fashion';
  public titleBgImageSrc: string = '/assets/images/products-list-header-bg.png';
  public first: number = 0;
  public rows: number = 6;

  public products$!: Observable<Product[] | null>;
  public isProductsLoading$!: Observable<boolean>;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.initializeValues();

    this.store.dispatch(getAllProductsAction({}));
  }

  private initializeValues(): void {
    this.isProductsLoading$ = this.store.select(isProductsLoadingSelector);
    this.products$ = this.store.select(productsSelector);
  }

  public onPageChange({ first, rows }: PaginatorState): void {
    this.first = first!;
    this.rows = rows!;

    console.log(this.first, this.rows)
  }
}
