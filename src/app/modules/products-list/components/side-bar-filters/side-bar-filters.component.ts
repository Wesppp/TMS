import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

import { InputTextModule } from "primeng/inputtext";

import { RadioButtonsListComponent } from "@components/controls/radio-buttons-list/radio-buttons-list.component";
import { RadioButtonsList } from "@models/radio-buttons-list.interface";
import { FiltersForm } from "@modules/products-list/models/filters-form.interface";

@Component({
  selector: 'app-side-bar-filters',
  standalone: true,
  imports: [
    InputTextModule,
    RadioButtonsListComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './side-bar-filters.component.html',
  styleUrl: './side-bar-filters.component.scss'
})
export class SideBarFiltersComponent implements OnInit {
  public filtersForm!: FormGroup<FiltersForm>;

  public colorRadioButtons: RadioButtonsList[] = [
    { name: 'Red', key: 'Red' },
    { name: 'Blue', key: 'Blue' },
    { name: 'Brown', key: 'Brown' },
    { name: 'Orange', key: 'Orange' },
    { name: 'Yellow', key: 'Yellow' },
    { name: 'Pink', key: 'Pink' },
  ];

  public sizeRadioButtons: RadioButtonsList[] = [
    { name: 'Extra Large', key: 'XL' },
    { name: 'Large', key: 'L' },
    { name: 'Medium', key: 'M' },
    { name: 'Small', key: 'S' },
    { name: 'Extra Small', key: 'XS' },
  ];

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.filtersForm = new FormGroup<FiltersForm>({
      search: new FormControl<string | null>(null),
      color: new FormControl<string | null>(null),
      size: new FormControl<string | null>(null),
    });
  }

  public onSubmit(): void {

  }
}
