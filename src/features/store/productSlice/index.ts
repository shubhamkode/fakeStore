import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/models/Product";

interface InitialState {
  products: Product[];
}

const initialState: InitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProductToCart: (state, action: PayloadAction<number>) => {
      const currentProduct = state.products.find(
        (product) => product.id === action.payload
      );

      if (currentProduct && currentProduct.others.cartQuantity >= 0) {
        // currentProduct.others.isWhislisted = false;
        currentProduct.others.cartQuantity++;
      }
      return state;
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const currentProduct = state.products.find(
        (product) => product.id === action.payload
      );

      if (currentProduct && currentProduct.others.cartQuantity >= 1) {
        currentProduct.others.isWhislisted = false;
        currentProduct.others.cartQuantity--;
      }
      return state;
    },
    addProductToWishList: (state, action: PayloadAction<number>) => {
      const currentProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (currentProduct) {
        currentProduct.others = {
          cartQuantity: 0,
          isWhislisted: true,
        };
      }
      return state;
    },
    removeProductFromWishList: (state, action: PayloadAction<number>) => {
      const currentProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (currentProduct) {
        currentProduct.others.isWhislisted = false;
      }
      return state;
    },
    resetCart: (state) => {
      state.products.map((product) => (product.others.cartQuantity = 0));
    },
  },
});

export const {
  loadProducts,
  addProductToCart,
  removeProductFromCart,
  addProductToWishList,
  removeProductFromWishList,
  resetCart,
} = productSlice.actions;

export default productSlice.reducer;
