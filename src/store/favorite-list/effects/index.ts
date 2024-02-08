import { RemoveFromFavoriteEffect } from "@store/favorite-list/effects/remove-from-favorite.effect";
import { AddToFavoriteEffect } from "@store/favorite-list/effects/add-to-favorite.effect";
import { GetFavoritesProductsEffect } from "@store/favorite-list/effects/get-favorites-products.effect";

const AllFavoriteEffects = [RemoveFromFavoriteEffect, AddToFavoriteEffect, GetFavoritesProductsEffect];

export default AllFavoriteEffects;
