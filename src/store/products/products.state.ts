import { Product } from '@models/product.interface';
import { Categories } from "@models/categories.interface";
import { PRODUCTS } from "@constants/temp-products";

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
  products: PRODUCTS,
  filteredProducts: PRODUCTS,
  latestProducts: [],
  featuredProducts: [],
  bestSellersProducts: [],
  newArrivalsProducts: [],
  categories: [],
  product: PRODUCTS[0],
}

export const productsFeatureKey: string = 'products';
