import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) public productCard!: Product;
}
