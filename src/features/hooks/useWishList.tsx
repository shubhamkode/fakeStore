import { RootState } from "@/store";

import { useSelector, useDispatch } from "react-redux";
import { toggleProductinWishList } from "@/store/wishListSlice";

export const useWishList = (productId: string) => {
  const dispatch = useDispatch();

  const { productIds } = useSelector((store: RootState) => store.wishlist);

  const productExists = productIds.find((id) => id === productId);

  const isProductInWishList = !!productExists;

  const updateWishList = () => dispatch(toggleProductinWishList({ productId }));

  return { isProductInWishList, updateWishList };
};
