import { createFeatureSelector, createSelector } from "@ngrx/store";

import { favoriteFeatureKey, FavoriteListState } from "@store/favorite-list/favorite-list.state";

export const favoriteFeatureSelector =
  createFeatureSelector<FavoriteListState>(favoriteFeatureKey);

export const favoriteProductsSelector = createSelector(
  favoriteFeatureSelector,
  (favoriteState: FavoriteListState) => favoriteState.favoriteProducts
);
