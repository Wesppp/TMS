import { SelectControl } from "@models/select-control.interface";

export interface ToggleControl extends SelectControl<string> {
  icon?: string;
}
