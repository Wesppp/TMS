import { FormChoiceGroup } from "@models/form-choice-group.interface";
import { SelectControl } from "@models/select-control.interface";
import { ToggleControl } from "@modules/products-list/models/toggle-control.interface";
import { CardType } from "@enums/card-type.enum";

export const COLOR_RADIO_BUTTONS: FormChoiceGroup[] = [
  { name: 'Red', key: 'Red' },
  { name: 'Blue', key: 'Blue' },
  { name: 'Brown', key: 'Brown' },
  { name: 'Orange', key: 'Orange' },
  { name: 'Yellow', key: 'Yellow' },
  { name: 'Pink', key: 'Pink' },
];

export const SIZE_RADIO_BUTTONS: FormChoiceGroup[] = [
  { name: 'Extra Large', key: 'XL' },
  { name: 'Large', key: 'L' },
  { name: 'Medium', key: 'M' },
  { name: 'Small', key: 'S' },
  { name: 'Extra Small', key: 'Xs' },
];

export const BRAND_CHECKBOXES: FormChoiceGroup[] = [
  { name: 'Adidas', key: 'Adidas' },
  { name: 'Armani', key: 'Armani' },
  { name: 'Calvin Klein', key: 'Calvin Klein' },
  { name: 'Columbia', key: 'Columbia' },
  { name: 'Converse', key: 'Converse' },
  { name: 'Dockers', key: 'Dockers' },
];

export const MAX_PRICE: number = 10000;

export const SORT_VARIANTS: SelectControl<string>[] = [
  { label: 'Raiting', value: 'raiting' },
  { label: 'Price', value: 'price' },
  { label: 'Views', value: 'views' },
  { label: 'CreatedAt', value: 'createdAt' },
  { label: 'Brand', value: 'brand' },
];

export const TOGGLE_VARIANTS: ToggleControl[] = [
  { label: 'Grid', value: CardType.DEFAULT, icon: 'pi pi-table', },
  { label: 'Stretch', value: CardType.STRETCH, icon: 'pi pi-list', },
];
