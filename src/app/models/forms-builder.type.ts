import { FormControl } from "@angular/forms";

export type FormsBuilder<T> = {
  [key in keyof T]: FormControl<T[key] | null>
}
