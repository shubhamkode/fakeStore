import { RootState } from "@/store";
import {
  addProductToCart,
  removeProductFromCart,
  increaseProductInCart,
  decreaseProductInCart,
} from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const useCart = (productId: string) => {
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((store: RootState) => store.cart);

  const isProductInCart = productId in cartProducts;

  const increaseQuantity = () => dispatch(increaseProductInCart({ productId }));

  const decreaseQuantity = () => dispatch(decreaseProductInCart({ productId }));

  const removeProduct = () => dispatch(removeProductFromCart({ productId }));

  const addToCart = () => dispatch(addProductToCart({ productId }));

  return {
    isProductInCart,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    addToCart,
    cartQuantity: cartProducts[productId],
  };
};
