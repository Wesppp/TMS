import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';

import { Product } from '../../models/product.interface';
import { SizeColorPickerComponent } from '../size-color-picker/size-color-picker.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardModule,
    SizeColorPickerComponent,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) public productCard!: Product;
  @Input() public isHideColors: boolean = false;
  @Input() public isHideSizes: boolean = false;
}
