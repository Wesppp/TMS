import { FormChoiceGroup } from "@models/form-choice-group.interface";

export interface FilterFormValues {
  color: FormChoiceGroup | string | null;
  size: string | null;
  price: number[] | null;
  brand: string[] | null;
  category: string | null;
}
