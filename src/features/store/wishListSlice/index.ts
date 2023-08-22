import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  productIds: string[];
}

const productIds = JSON.parse(localStorage.getItem("wishList") ?? "[]");

const initialState: InitialState = {
  productIds,
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleProductinWishList: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const productExists = state.productIds.find(
        (productId) => productId === action.payload.productId
      );
      if (productExists) {
        state.productIds = state.productIds.filter(
          (productId) => productId !== action.payload.productId
        );
      } else {
        state.productIds.push(action.payload.productId);
      }
      localStorage.setItem("wishList", JSON.stringify(state.productIds));
    },
    clearWishList: (state) => {
      state.productIds = [];
      localStorage.removeItem("wishList");
    },
  },
});

export default wishListSlice;

export const { toggleProductinWishList, clearWishList } = wishListSlice.actions;
