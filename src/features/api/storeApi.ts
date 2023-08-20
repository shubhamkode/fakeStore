import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/models/Product";
import { loadCategory } from "@/store/categorySlice";
import { loadProducts } from "@/store/productSlice";
import { login } from "@/store/authSlice";

export const storeApi = createApi({
  reducerPath: "/storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], null>({
      query: () => ({ url: "/products" }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(loadProducts(data));
      },
    }),

    getAllCategories: builder.query<string[], null>({
      query: () => ({ url: "/products/categories" }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(loadCategory(data));
      },
    }),
    login: builder.mutation<
      { token: string },
      { username: string; password: string }
    >({
      query: (formData) => ({
        url: "/auth/login",
        body: { ...formData },
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(login(data));
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useLoginMutation,
} = storeApi;
