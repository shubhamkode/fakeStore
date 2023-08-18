import React from "react";

import { ProductCardContextProvider } from "./ProductContext";
import { Product } from "@/models/Product";
import { cn } from "tailwind-cn";

interface IProductCardProps extends React.HTMLProps<HTMLDivElement> {
  product: Product;
}

const ProductCardCard: React.FC<IProductCardProps> = ({
  product,
  className,
  ...rest
}) => {
  return (
    <ProductCardContextProvider product={product}>
      <div
        className={cn(
          "relative w-[220px] sm:w-[300px] p-1 bg-white hover:shadow-sm hover:bg-[#FAFAFA] duration-200 rounded",
          className
        )}
        {...rest}
      />
    </ProductCardContextProvider>
  );
};

export default ProductCardCard;
