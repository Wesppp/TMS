import { Product } from '@models/product.interface';
import { Categories } from "@models/categories.interface";

export interface ProductsState {
  products: Product[] | null;
  latestProducts: Product[] | null;
  featuredProducts: Product[] | null;
  bestSellersProducts: Product[] | null;
  newArrivalsProducts: Product[] | null;
  categories: Categories[] | null;
}

export const initialState: ProductsState = {
  products: null,
  latestProducts: null,
  featuredProducts: null,
  bestSellersProducts: null,
  newArrivalsProducts: null,
  categories: null,
}

export const productsFeatureKey: string = 'products';
