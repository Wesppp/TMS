import { Product } from '@models/product.interface';

export interface ProductsState {
  products: Product[];
  latestProducts: Product[];
  featuredProducts: Product[];
}

export const initialState: ProductsState = {
  products: [],
  latestProducts: [],
  featuredProducts: [],
}

export const productsFeatureKey: string = 'products';
