import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AsyncPipe } from "@angular/common";

import { InputTextModule } from "primeng/inputtext";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { RadioButtonsListControlComponent } from "@components/controls/radio-buttons-list-control/radio-buttons-list-control.component";
import { FiltersForm } from "@modules/products-list/models/filters-form.interface";
import { RangeControlComponent } from "@components/controls/range-control/range-control.component";
import { FormChoiceGroup } from "@models/form-choice-group.interface";
import {
  CheckboxListControlComponent
} from "@components/controls/checkbox-list-control/checkbox-list-control.component";
import {
  BRAND_CHECKBOXES,
  COLOR_RADIO_BUTTONS, MAX_PRICE,
  SIZE_RADIO_BUTTONS
} from "@modules/products-list/constants/filters";
import { AccordionControlComponent } from "@components/controls/accordion-control/accordion-control.component";
import { categoriesForAccordionSelector } from "@store/products/products.selectors";
import { getCategoriesAction } from "@store/products/actions/get-categories.action";
import { AccordionControlElement } from "@models/accordion-control-element.interface";

@Component({
  selector: 'app-side-bar-filters',
  standalone: true,
  imports: [
    InputTextModule,
    RadioButtonsListControlComponent,
    ReactiveFormsModule,
    RangeControlComponent,
    CheckboxListControlComponent,
    AccordionControlComponent,
    AsyncPipe,
  ],
  templateUrl: './side-bar-filters.component.html',
  styleUrl: './side-bar-filters.component.scss'
})
export class SideBarFiltersComponent implements OnInit {
  public categories$!: Observable<AccordionControlElement[] | null>;

  public filtersForm!: FormGroup<FiltersForm>;
  public colorRadioButtons: FormChoiceGroup[] = COLOR_RADIO_BUTTONS;
  public sizeRadioButtons: FormChoiceGroup[] = SIZE_RADIO_BUTTONS;
  public brandCheckboxes: FormChoiceGroup[] = BRAND_CHECKBOXES;
  public maxPrice: number = MAX_PRICE;

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.initializeValues();

    this.store.dispatch(getCategoriesAction());
  }

  private initializeValues(): void {
    this.categories$ = this.store.select(categoriesForAccordionSelector);
  }

  private createForm(): void {
    this.filtersForm = new FormGroup<FiltersForm>({
      search: new FormControl<string | null>(null),
      color: new FormControl<string | null>(null),
      size: new FormControl<string | null>(null),
      price: new FormControl<number[] | null>([0, this.maxPrice / 2]),
      brand: new FormControl<string[] | null>(null),
      category: new FormControl<string | null>(null),
    });
  }

  public onSubmit(): void {
    console.log(this.filtersForm.value)
  }
}
