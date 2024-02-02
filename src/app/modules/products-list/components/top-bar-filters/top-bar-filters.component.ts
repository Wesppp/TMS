import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { DropdownChangeEvent, DropdownModule } from "primeng/dropdown";
import { SelectButtonModule, SelectButtonOptionClickEvent } from "primeng/selectbutton";

import { SORT_VARIANTS, TOGGLE_VARIANTS } from "@modules/products-list/constants/filters";
import { SelectControl } from "@models/select-control.interface";
import { ToggleControl } from "@modules/products-list/models/toggle-control.interface";
import { Store } from "@ngrx/store";
import { getAllProductsAction } from "@store/products/actions/get-all-products.action";
import { CardType } from "@enums/card-type.enum";

@Component({
  selector: 'app-top-bar-filters',
  standalone: true,
  imports: [
    DropdownModule,
    ReactiveFormsModule,
    SelectButtonModule
  ],
  templateUrl: './top-bar-filters.component.html',
  styleUrl: './top-bar-filters.component.scss'
})
export class TopBarFiltersComponent {
  @Output() public toggleCardTypeEvent = new EventEmitter<CardType>();

  public sortVariants: SelectControl<string>[] = SORT_VARIANTS;
  public toggleVariants: ToggleControl[] = TOGGLE_VARIANTS;

  public sortControl: FormControl = new FormControl<SelectControl<string> | null>(null);
  public toggleControl: FormControl = new FormControl<ToggleControl | null>(null);

  constructor(private readonly store: Store) {
  }

  public onSelect({ value }: DropdownChangeEvent): void {
    this.store.dispatch(getAllProductsAction({
      params: {
        sort: value.value
      }
    }));
  }

  public onToggle({ option }: SelectButtonOptionClickEvent): void {
    this.toggleCardTypeEvent.emit(option.value);
  }
}
