import { Product } from '@models/product.interface';

export interface ProductsState {
  products: Product[];
  latestProducts: Product[];
  featuredProducts: Product[];
  bestSellersProducts: Product[];
  newArrivalsProducts: Product[];
}

export const initialState: ProductsState = {
  products: [],
  latestProducts: [],
  featuredProducts: [],
  bestSellersProducts: [],
  newArrivalsProducts: [],
}

export const productsFeatureKey: string = 'products';
