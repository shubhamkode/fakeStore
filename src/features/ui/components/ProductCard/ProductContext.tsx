import { createContext } from "react";

import { Product } from "@/models/Product";

export const ProductCardContext = createContext<{ product: Product } | null>(
  null
);

export const ProductCardContextProvider = ({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) => {
  return (
    <ProductCardContext.Provider value={{ product }}>
      {children}
    </ProductCardContext.Provider>
  );
};
