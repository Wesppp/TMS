import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { AsyncPipe } from "@angular/common";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { GalleriaModule } from "primeng/galleria";

import { getProductAction } from "@store/products/actions/get-product.action";
import { Product } from "@models/product.interface";
import { productSelector } from "@store/products/products.selectors";
import { isProductLoadingSelector } from "@store/app-loading/app-loading.selectors";
import { ProgressSpinnerComponent } from "@components/progress-spinner/progress-spinner.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { RatingModule } from "primeng/rating";
import { SizeColorPickerComponent } from "@components/size-color-picker/size-color-picker.component";
import { CustomButtonComponent } from "@components/custom-button/custom-button.component";
import { ButtonIconPos } from "@enums/button-icon-pos.enum";
import { ButtonTheme } from "@enums/button-theme.enum";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    AsyncPipe,
    ProgressSpinnerComponent,
    GalleriaModule,
    RatingModule,
    SizeColorPickerComponent,
    CustomButtonComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  @Input() private set id(id: string) {
    this.store.dispatch(getProductAction({ id }));
  }

  public isProductLoading$!: Observable<boolean>;

  public product!: Product | null;
  public galleryOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  protected readonly buttonIconPos = ButtonIconPos;

  constructor(private readonly store: Store,
              private readonly destroyRef: DestroyRef) {
  }

  public ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.store.select(productSelector)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(product => {
        this.product = product;
    });
    this.isProductLoading$ = this.store.select(isProductLoadingSelector);
  }

  protected readonly ButtonTheme = ButtonTheme;
}
