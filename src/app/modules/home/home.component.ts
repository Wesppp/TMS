import { Component } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryCard } from './models/category-card.interface';
import { CATEGORIES } from './constants/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategoryCardComponent,
    TabViewModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public categoryCards: CategoryCard[] = CATEGORIES;
  public readonly Math: Math = Math;
}
