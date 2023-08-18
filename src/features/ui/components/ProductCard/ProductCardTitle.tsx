import { useProductCardContext } from "./useProductCardContext";

const ProductCardTitle = () => {
  const { title } = useProductCardContext();

  return (
    <p className="px-1 text-[calc(11px+0.390vw)] sm:text-[calc(9px+0.390vw)] font-[700]  line-clamp-1 text-gray-700">
      {title}
    </p>
  );
};

export default ProductCardTitle;
