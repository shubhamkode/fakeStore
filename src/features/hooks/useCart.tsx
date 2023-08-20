import { RootState } from "@/store";
import {
  addProductToCart,
  removeProductFromCart,
  increaseProductInCart,
  decreaseProductInCart,
} from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const useCart = (productId: number) => {
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((store: RootState) => store.cart);

  const productInCart = cartProducts.find(
    (cartProduct) => cartProduct.productId === productId
  );

  const increaseQuantity = () => dispatch(increaseProductInCart({ productId }));

  const decreaseQuantity = () => dispatch(decreaseProductInCart({ productId }));

  const removeProduct = () => dispatch(removeProductFromCart({ productId }));

  const addToCart = () => dispatch(addProductToCart({ productId }));

  return {
    isProductInCart: !!productInCart,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    addToCart,
    cartQuantity: productInCart? productInCart.quantity:0 ,
  };
};
