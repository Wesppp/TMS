import { Product } from '@models/product.interface';

export interface ProductsState {
  products: Product[] | null;
  latestProducts: Product[] | null;
  featuredProducts: Product[] | null;
  bestSellersProducts: Product[] | null;
  newArrivalsProducts: Product[] | null;
}

export const initialState: ProductsState = {
  products: null,
  latestProducts: null,
  featuredProducts: null,
  bestSellersProducts: null,
  newArrivalsProducts: null,
}

export const productsFeatureKey: string = 'products';
