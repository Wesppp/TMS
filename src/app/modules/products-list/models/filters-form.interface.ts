import { FormControl } from "@angular/forms";

export interface FiltersForm {
  search: FormControl<string | null>;
  color: FormControl<string | null>;
  size: FormControl<string | null>;
  price: FormControl<number[] | null>;
  brand: FormControl<string[] | null>;
}
