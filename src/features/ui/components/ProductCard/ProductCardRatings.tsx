import { BsStarFill } from "react-icons/bs";

import { useProductCardContext } from "./useProductCardContext";

const ProductCardRatings = () => {
  const { rating } = useProductCardContext();
  const { count, rate } = rating;

  return (
    <div className="flex items-center justify-center px-4 py-0.5 ">
      <BsStarFill className="mr-1 text-yellow-400" />
      <p className="mr-3 text-[calc(8px+calc(0.390vw))] font-bold ">
        {rate.toFixed(2)}
      </p>

      <p className="px-2 text-[calc(6px+0.390vw)] font-semibold text-gray-700">
        <span className="text-[calc(8px+0.390vw)] font-bold text-black">{count}</span> review
        {count > 1 && "s"}
      </p>
    </div>
  );
};

export default ProductCardRatings;
