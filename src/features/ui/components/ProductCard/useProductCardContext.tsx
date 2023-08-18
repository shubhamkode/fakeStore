import { useContext } from "react";
import { ProductCardContext } from "./ProductContext";

export const useProductCardContext = () => {
  const context = useContext(ProductCardContext);

  if (!context) {
    throw new Error("Product Card must be used in case of product");
  }
  return context.product;
};
