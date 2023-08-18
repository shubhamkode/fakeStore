import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/models/Product";
import { loadCategory } from "@/store/categorySlice";
import { loadProducts } from "@/store/productSlice";

export const storeApi = createApi({
  reducerPath: "/storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Omit<Product, "others">[], null>({
      query: () => ({ url: "/products" }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        const updatedProductList: Product[] = [];

        data.forEach(
          (product, index) => {
            updatedProductList.push({
              ...product,
              id: index,
              others: { isWhislisted: false, cartQuantity: 0 },
            });
          }
        );

        dispatch(loadProducts(updatedProductList));
      },
    }),

    getAllCategories: builder.query<string[], null>({
      query: () => ({ url: "/products/categories" }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const updatedCategoriesList = [{ name: "All", selected: true }];
        data.map((category) => {
          updatedCategoriesList.push({ name: category, selected: false });
        });
        dispatch(loadCategory(updatedCategoriesList));
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllCategoriesQuery } = storeApi;
