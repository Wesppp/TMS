import { Component } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryCard } from './models/category-card.interface';
import { CATEGORIES } from './constants/categories';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product.interface';
import { PRODUCTS_DEFAULT, PRODUCTS_LONG } from '../../constants/products';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CategoryCardComponent,
        TabViewModule,
        ProductCardComponent,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public productLongCards: Product[] = PRODUCTS_LONG;
  public productDefaultsCards: Product[] = PRODUCTS_DEFAULT;
  public categoryCards: CategoryCard[] = CATEGORIES;
  public readonly Math: Math = Math;
}
