import { ProductsSortValues } from '@enums/products-sort-values.enum';

export interface ProductsRequestParams {
  page?: string;
  count?: string;
  sort?: ProductsSortValues;
  [key: string]: string | undefined;
}
