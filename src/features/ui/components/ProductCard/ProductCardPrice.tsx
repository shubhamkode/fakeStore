import { useProductCardContext } from "./useProductCardContext";

const ProductCardPrice = () => {
  const { price } = useProductCardContext();
  return <p className="text-[calc(13px+0.390vw)] sm:text-[calc(18px+0.39vw)] font-bold px-1">${price.toFixed(1)}</p>;
};

export default ProductCardPrice;
