import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import { CartPageTemplate } from "@/ui/templates";
import { RootState } from "@/store";
import { Product } from "@/models/Product";

const CartPage = () => {
  const { products } = useSelector((store: RootState) => store.products);
  const { cartProducts } = useSelector((store: RootState) => store.cart);
  const { token } = useSelector((state: RootState) => state.auth);

  const productsInCart: Product[] = [];

  cartProducts.forEach((cartProduct) => {
    productsInCart.push(products[cartProduct.productId - 1]);
  });

  return (
    <CartPageTemplate cartProducts={productsInCart} isUserLoggedIn={!!token} />
  );
};

export default CartPage;
