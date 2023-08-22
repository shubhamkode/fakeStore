import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  cartProducts: { [productId: string]: number };
}

const cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState: InitialState = {
  cartProducts,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.cartProducts = {
        ...state.cartProducts,
        [action.payload.productId]: 1,
      };
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      delete state.cartProducts[action.payload.productId];

      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },

    increaseProductInCart: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      const productExists = productId in state.cartProducts;
      if (productExists) {
        state.cartProducts[productId]++;
        localStorage.setItem("cart", JSON.stringify(state.cartProducts));
      }
    },
    decreaseProductInCart: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      const productExists = productId in state.cartProducts;

      if (productExists) {
        if (state.cartProducts[productId] >= 2) {
          state.cartProducts[productId]--;
        } else {
          delete state.cartProducts[productId];
        }
        localStorage.setItem("cart", JSON.stringify(state.cartProducts));
      }
    },
    resetCart: (state) => {
      state.cartProducts = {};
      localStorage.removeItem("cart");
    },
  },
});

export default cartSlice;

export const {
  addProductToCart,
  removeProductFromCart,
  resetCart,
  decreaseProductInCart,
  increaseProductInCart,
} = cartSlice.actions;
