import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/models/Product";

interface InitialState {
  products: { [id: string]: Omit<Product, "id"> };
}

const initialState: InitialState = {
  products: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<Product[]>) => {
      action.payload.map((product) => {
        const { id, ...newProduct } = product;
        state.products[id] = { ...newProduct };
      });
    },
  },
});

export const { loadProducts } = productSlice.actions;

export default productSlice;
