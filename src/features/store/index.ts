import { configureStore } from "@reduxjs/toolkit";

import { storeApi } from "@/api/storeApi";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import authSlice from "./authSlice";

import wishListSlice from "./wishListSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    [categorySlice.name]: categorySlice.reducer,
    [productSlice.name]: productSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [wishListSlice.name]: wishListSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
