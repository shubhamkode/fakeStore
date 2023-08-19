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
    addProductToCart: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      state.cartProducts.push(action.payload);
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      state.cartProducts.filter(
        (product) => product.productId !== action.payload.productId
      );
    },
  },
});

export default cartSlice;

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
