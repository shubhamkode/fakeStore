import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "tailwind-cn";
import { MdAddShoppingCart } from "react-icons/md";

import { useProductCardContext } from "./useProductCardContext";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

interface IProductCardButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const ProductCardButton: React.FC<IProductCardButton> = ({
  className,
  ...rest
}) => {
  const { others } = useProductCardContext();
  const productInCart = others.cartQuantity > 0;

  if (!productInCart) {
    return (
      <button
        {...rest}
        className={cn(
          className,
          "p-2  rounded-full whitespace-nowrap shadow-xl text-blue-800"
        )}
      >
        <MdAddShoppingCart className="text-[calc(22px+0.395vw)] sm:text-[calc(18px+0.395vw)]" />
      </button>
    );
  } else {
    return (
      <Link
        to="/cart"
        className="p-2 text-blue-800 rounded-full shadow-xl whitespace-nowrap"
      >
        <AiOutlineArrowRight className="text-[calc(22px+0.395vw)] sm:text-[calc(18px+0.395vw)] text-blue-800" />
      </Link>
    );
  }
};

export default ProductCardButton;
