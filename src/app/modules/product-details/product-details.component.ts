import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { AsyncPipe } from "@angular/common";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { GalleriaModule } from "primeng/galleria";
import { ToastModule } from "primeng/toast";

import { getProductAction } from "@store/products/actions/get-product.action";
import { Product } from "@models/product.interface";
import { productSelector } from "@store/products/products.selectors";
import { isProductLoadingSelector } from "@store/app-loading/app-loading.selectors";
import { ProgressSpinnerComponent } from "@components/progress-spinner/progress-spinner.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { RatingModule } from "primeng/rating";
import { SizeColorPickerComponent } from "@components/size-color-picker/size-color-picker.component";
import { CustomButtonComponent } from "@components/buttons/custom-button/custom-button.component";
import { ButtonIconPos } from "@enums/button-icon-pos.enum";
import { ButtonTheme } from "@enums/button-theme.enum";
import { AccordionControlComponent } from "@components/controls/accordion-control/accordion-control.component";
import { ADDITIONAL_INFO } from "@modules/product-details/constants/additional-info";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { TabMenuModule } from "primeng/tabmenu";
import { TAB_MENU_ITEMS } from "@modules/product-details/constants/tab-menu-items";
import { TabViewModule } from "primeng/tabview";
import { TruncateTextDirective } from "../../directives/truncate-text.directive";
import { GALLERY_OPTIONS } from "@modules/product-details/constants/gallery-options";
import { SizeColorPickerValue } from "@models/size-color-picker-value.interface";
import { CartProduct } from "@models/cart-product.interface";
import { addProductAction } from "@store/cart/actions/add-product.action";
import { addToFavoriteAction } from "@store/favorite-list/actions/add-to-favorite.action";

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
    AccordionControlComponent,
    ReactiveFormsModule,
    TabMenuModule,
    TabViewModule,
    TruncateTextDirective,
    ToastModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  @Input() private set id(id: string) {
    this.store.dispatch(getProductAction({ id }));
  }

  public isProductLoading$!: Observable<boolean>;

  public control: FormControl = new FormControl();
  public product!: Product | null;

  protected readonly buttonIconPos = ButtonIconPos;
  protected readonly ButtonTheme = ButtonTheme;
  protected readonly ADDITIONAL_INFO = ADDITIONAL_INFO;
  protected readonly TAB_MENU_ITEMS = TAB_MENU_ITEMS;
  protected readonly galleryOptions = GALLERY_OPTIONS;

  private sizeColorValue: SizeColorPickerValue | null = null;

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

  public onAddToCart(): void {
    if(!this.product) { return; }

    const cartProduct: CartProduct = {
      uuid: this.product.uuid,
      color: this.sizeColorValue?.color || '',
      size: this.sizeColorValue?.size || '',
    }

    this.store.dispatch(addProductAction({ cartProduct }));
  }

  public onColorSizePick(value: SizeColorPickerValue): void {
    this.sizeColorValue = value;
  }

  public onAddToFavorites({ uuid }: Product): void {
    this.store.dispatch(addToFavoriteAction({ productUuid: uuid }));
  }
}
