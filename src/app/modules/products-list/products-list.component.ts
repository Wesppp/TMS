import { Component } from '@angular/core';
import { PageTitleComponent } from "@components/page-title/page-title.component";
import { SideBarFiltersComponent } from "@modules/products-list/components/side-bar-filters/side-bar-filters.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    PageTitleComponent,
    SideBarFiltersComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  public title: string = 'Fashion';
  public titleBgImageSrc: string = '/assets/images/products-list-header-bg.png';
}
