import { Product } from "@models/product.interface";

export interface FavoriteListState {
  favoriteProducts: Product[];
}

export const initialState: FavoriteListState = {
  favoriteProducts: [],
}

export const favoriteFeatureKey: string = 'favorite';
