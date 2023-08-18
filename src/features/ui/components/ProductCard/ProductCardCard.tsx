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
          "relative w-[220px] sm:w-[300px] p-1 bg-white rounded-sm pb-3",
          className
        )}
        {...rest}
      />
    </ProductCardContextProvider>
  );
};

export default ProductCardCard;
