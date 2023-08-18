import React from "react";

const ProductCardInfo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between ">
      {children}
    </div>
  );
};

export default ProductCardInfo;
