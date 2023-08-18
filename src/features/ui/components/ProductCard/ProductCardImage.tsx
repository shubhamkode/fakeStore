import { useProductCardContext } from "./useProductCardContext";

const ProductCardImage = () => {
  const { image } = useProductCardContext();
  return (
    <img
      src={image}
      className="w-full px-4 py-6 mx-auto rounded-t object-fit aspect-square"
    />
  );
};

export default ProductCardImage;
