import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import { CartPageTemplate } from "@/ui/templates";
import { RootState } from "@/store";
import { CartProduct } from "@/models/Product";

const CartPage = () => {
  const { products } = useSelector((store: RootState) => store.products);
  const { cartProducts } = useSelector((store: RootState) => store.cart);
  const { token } = useSelector((state: RootState) => state.auth);

  const productsInCart: CartProduct[] = [];

  Object.keys(cartProducts).map((productId) => {
    productsInCart.push({
      id: productId,
      ...products[productId],
      cartQuantity: cartProducts[productId],
    });
  });

  return (
    <CartPageTemplate cartProducts={productsInCart} isUserLoggedIn={!!token} />
  );
};

export default CartPage;
