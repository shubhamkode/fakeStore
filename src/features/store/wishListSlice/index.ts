import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  productIds: number[];
}

const initialState: InitialState = {
  productIds: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleProductinWishList: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      const productExists = state.productIds.find(
        (productId) => productId === action.payload.productId
      );
      if (productExists) {
        state.productIds.filter(
          (productId) => productId !== action.payload.productId
        );
      } else {
        state.productIds.push(action.payload.productId);
      }
    },
  },
});

export default wishListSlice;

export const { toggleProductinWishList } = wishListSlice.actions;
