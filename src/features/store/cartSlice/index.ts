import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  cartProducts: { productId: number; quantity: number }[];
}

const cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState: InitialState = {
  cartProducts,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<{ productId: number }>) => {
      state.cartProducts.push({
        productId: action.payload.productId,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.productId !== action.payload.productId
      );

      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },

    increaseProductInCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      const currentProduct = state.cartProducts.find(
        (cartProduct) => cartProduct.productId === action.payload.productId
      );

      if (currentProduct) {
        currentProduct.quantity++;
      }

      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
      return state;
    },
    decreaseProductInCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      const currentProduct = state.cartProducts.find(
        (cartProduct) => cartProduct.productId === action.payload.productId
      );

      if (currentProduct) {
        if (currentProduct.quantity >= 2) {
          currentProduct.quantity--;
        } else {
          state.cartProducts = state.cartProducts.filter(
            (product) => product.productId !== action.payload.productId
          );
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));

      return state;
    },
    resetCart: (state) => {
      state.cartProducts = [];
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
