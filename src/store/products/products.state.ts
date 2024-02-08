import { Product } from '@models/product.interface';
import { Categories } from "@models/categories.interface";

export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  latestProducts: Product[];
  featuredProducts: Product[];
  bestSellersProducts: Product[];
  newArrivalsProducts: Product[];
  categories: Categories[];
  product: Product | null;
}

export const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  latestProducts: [],
  featuredProducts: [],
  bestSellersProducts: [],
  newArrivalsProducts: [],
  categories: [],
  product: null,
}

export const productsFeatureKey: string = 'products';
