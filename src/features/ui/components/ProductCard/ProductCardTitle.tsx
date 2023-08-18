import { useProductCardContext } from "./useProductCardContext";

const ProductCardTitle = () => {
  const { title } = useProductCardContext();

  return (
    <p className="px-2 text-[calc(10px+0.390vw)] font-[700] text-center line-clamp-1 ">
      {title}
    </p>
  );
};

export default ProductCardTitle;
