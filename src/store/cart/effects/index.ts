import { AddProductEffect } from "@store/cart/effects/add-product.effect";
import { GetCartProductsEffect } from "@store/cart/effects/get-cart-products.effect";
import { CartLoadingsEffect } from "@store/cart/effects/cart-loadings.effect";
import { RemoveCartProductEffect } from "@store/cart/effects/remove-cart-product.effect";

const AllCartEffects = [
  AddProductEffect,
  GetCartProductsEffect,
  CartLoadingsEffect,
  RemoveCartProductEffect,
];

export default AllCartEffects;
