import { useProductCardContext } from "./useProductCardContext";

const ProductCardPrice = () => {
  const { price } = useProductCardContext();
  return <p className="text-[calc(13px+0.390vw)] font-bold">${price.toFixed(1)}</p>;
};

export default ProductCardPrice;
