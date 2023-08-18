import { Routes, Route } from "react-router-dom";

import { CartPage, HomePage, LoginPage, ProductInfoPage } from "@/ui/pages";
import { Page } from "@/ui/components";

import {
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
} from "@/api/storeApi";

function App() {
  useGetAllCategoriesQuery(null);
  useGetAllProductsQuery(null);

  return (
    <Page>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductInfoPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Page>
  );
}

export default App;
