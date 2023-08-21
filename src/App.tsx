import { Routes, Route } from "react-router-dom";

import {
  CartPage,
  HomePage,
  LoginPage,
  ProductInfoPage,
  WishListPage,
  ProfilePage,
} from "@/ui/pages";
import { Page } from "@/ui/components";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import {
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
} from "@/api/storeApi";

function App() {
  useGetAllCategoriesQuery(null);
  useGetAllProductsQuery(null);

  return (
    <WrapBalancerProvider>
      <Page>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductInfoPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishList" element={<WishListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Page>
    </WrapBalancerProvider>
  );
}

export default App;
