import React from "react";
import { cn } from "tailwind-cn";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProductCardContext } from "./useProductCardContext";

interface IProductWishListButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ProductCardWishListButton: React.FC<IProductWishListButtonProps> = ({
  className,
  ...rest
}) => {
  const { others } = useProductCardContext();

  const isProductInWishList = others.isWhislisted;

  return (
    <button
      {...rest}
      className={cn(
        className,
        "absolute right-3 top-2 text-lg  p-2 rounded-full  shadow-lg "
      )}
    >
      {!isProductInWishList ? (
        <AiOutlineHeart />
      ) : (
        <AiFillHeart className="text-yellow-400 " />
      )}
    </button>
  );
};

export default ProductCardWishListButton;
