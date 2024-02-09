import { SizeColorPickerValue } from "@models/size-color-picker-value.interface";

export interface Product extends Partial<SizeColorPickerValue> {
  uuid: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  sizes: string[];
  views: number;
  colors: string[];
  brand: string;
  raiting: number;
  category: string;
  count: number;
}
