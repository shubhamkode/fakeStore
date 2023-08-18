import { configureStore } from "@reduxjs/toolkit";

import { storeApi } from "@/api/storeApi";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    category: categorySlice,
    products: productSlice,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
