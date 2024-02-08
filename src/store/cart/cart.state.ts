import { Product } from "@models/product.interface";

export interface CartState {
  cartProducts: Product[];
}

export const initialState: CartState = {
  cartProducts: [],
}

export const cartFeatureKey: string = 'cart';
