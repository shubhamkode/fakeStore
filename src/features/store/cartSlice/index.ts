import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  cartProducts: { productId: number; quantity: number }[];
}

const initialState: InitialState = {
  cartProducts: [],
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
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.productId !== action.payload.productId
      );
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

      return state;
    },
    resetCart: (state) => {
      state.cartProducts = [];
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
