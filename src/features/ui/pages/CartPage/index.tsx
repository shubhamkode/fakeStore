import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartPageTemplate } from "@/ui/templates";
import { RootState } from "@/store";

const CartPage = () => {
  const navigate = useNavigate();
  const { products } = useSelector((store: RootState) => store.products);
  const { token } = useSelector((store: RootState) => store.auth);

  // React.useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, [token, navigate]);

  const cartProducts = products.filter(
    (product) => product.others.cartQuantity > 0
  );

  return <CartPageTemplate cartProducts={cartProducts} />;
};

export default CartPage;
