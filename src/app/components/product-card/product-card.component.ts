import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from "@angular/common";

import { CardModule } from 'primeng/card';
import { Store } from "@ngrx/store";

import { Product } from '@models/product.interface';
import { SizeColorPickerComponent } from '../size-color-picker/size-color-picker.component';
import { CardType } from "@enums/card-type.enum";
import { RouterLink } from "@angular/router";
import { SizeColorPickerValue } from "@models/size-color-picker-value.interface";
import { addToFavoriteAction } from "@store/favorite-list/actions/add-to-favorite.action";
import { updateProductAction } from "@store/favorite-list/actions/update-product.action";

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
export class ProductCardComponent implements OnInit {
  @Input({ required: true }) public productCard!: Product;
  @Input() public productCardType: CardType = CardType.DEFAULT;
  @Input() public isHideColors: boolean = false;
  @Input() public isHideSizes: boolean = false;
  @Input() public isHideFavoriteBtn: boolean = false;

  public readonly cardType = CardType;
  public sizeColor!: SizeColorPickerValue;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.sizeColor = {
      color: this.productCard.color || '',
      size: this.productCard.size || '',
    };
  }

  public onFavoriteAdd({ uuid }: Product, event: MouseEvent): void {
    event.stopPropagation();

    this.store.dispatch(addToFavoriteAction({ productUuid: uuid }));
  }

  public onPickEvent(sizeColor: SizeColorPickerValue): void {
    const product: Product = {
      ...this.productCard,
      ...sizeColor,
    };

    this.store.dispatch(updateProductAction({ product }));
  }
}
