import React from "react";
import { cn } from "tailwind-cn";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useProductCardContext } from "./useProductCardContext";
import { useWishList } from "@/hooks/useWishList";

const ProductCardWishListButton: React.FC = () => {
  const { id } = useProductCardContext();
  const { isProductInWishList, updateWishList } = useWishList(id);

  return (
    <button
      className={cn(
        "absolute right-3 top-2 text-lg  p-2 rounded-full  shadow-lg z-20 bg-white/40 "
      )}
      onClick={updateWishList}
    >
      {!isProductInWishList ? (
        <AiOutlineHeart />
      ) : (
        <AiFillHeart className="text-pink-500 " />
      )}
    </button>
  );
};

export default ProductCardWishListButton;
