import { createReducer, on } from "@ngrx/store";

import { getFavoriteProductsSuccessAction } from "@store/favorite-list/actions/get-favorites-products.action";
import { FavoriteListState, initialState } from "@store/favorite-list/favorite-list.state";
import { removeFromFavoriteSuccessAction } from "@store/favorite-list/actions/remove-from-favorite.action";
import { updateProductAction } from "@store/favorite-list/actions/update-product.action";

export const favoriteListReducer = createReducer(
  initialState,
  on(getFavoriteProductsSuccessAction,
    (state: FavoriteListState, { favoriteProducts }) => ({
      ...state,
      favoriteProducts,
    })
  ),
  on(removeFromFavoriteSuccessAction,
    (state: FavoriteListState, { productUuid }) => ({
      ...state,
      favoriteProducts: state.favoriteProducts.filter((product) => product.uuid !== productUuid),
    })
  ),
  on(updateProductAction,
    (state: FavoriteListState, { product }) => ({
      ...state,
      favoriteProducts: state.favoriteProducts.map(el => el.uuid === product.uuid ? product : el)
    })
  ),
);
