import { FormControl } from "@angular/forms";

export interface FiltersForm {
  color: FormControl<string | null>;
  size: FormControl<string | null>;
  price: FormControl<number[] | null>;
  brand: FormControl<string[] | null>;
  category: FormControl<string | null>;
}
