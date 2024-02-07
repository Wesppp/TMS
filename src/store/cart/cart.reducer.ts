import { createReducer, on } from "@ngrx/store";

import { CartState, initialState } from "@store/cart/cart.state";
import { getCartProductsSuccessAction } from "@store/cart/actions/get-cart-products.action";
import { removeProductFromCartAction } from "@store/cart/actions/remove-cart-product.action";

export const cartReducer = createReducer(
  initialState,
  on(getCartProductsSuccessAction,
    (state: CartState, { cartProducts }) => ({
      ...state,
      cartProducts,
    })
  ),
  on(removeProductFromCartAction,
    (state: CartState, { uuid }) => ({
      ...state,
      cartProducts: state.cartProducts.filter(product => product.uuid !== uuid),
    })
  ),
)
