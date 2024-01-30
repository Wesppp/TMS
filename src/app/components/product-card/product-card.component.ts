import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

import { CardModule } from 'primeng/card';

import { Product } from '@models/product.interface';
import { SizeColorPickerComponent } from '../size-color-picker/size-color-picker.component';
import { CardType } from "@enums/card-type.enum";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardModule,
    SizeColorPickerComponent,
    NgClass,
    RouterLink,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) public productCard!: Product;
  @Input() public productCardType: CardType = CardType.DEFAULT;
  @Input() public isHideColors: boolean = false;
  @Input() public isHideSizes: boolean = false;

  public readonly cardType = CardType;
}
