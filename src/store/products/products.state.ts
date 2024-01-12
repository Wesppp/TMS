import { Product } from '@models/product.interface';

export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState = {
  products: [],
}

export const productsFeatureKey: string = 'products';
