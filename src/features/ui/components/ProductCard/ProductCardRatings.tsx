import { BsStarFill } from "react-icons/bs";

import { useProductCardContext } from "./useProductCardContext";

const ProductCardRatings = () => {
  const { rating } = useProductCardContext();
  const { count, rate } = rating;

  return (
    <div className="flex items-center py-0.5 px-1">
      <BsStarFill className="mr-1 text-yellow-400" />
      <p className="mr-3 text-[calc(12px+calc(0.390vw))] font-bold sm:text-[calc(9px+0.39vw)] text-gray-700">
        {rate.toFixed(2)}
      </p>

      <p className=" text-[calc(8px+0.390vw)] font-semibold text-gray-700 sm:text-[calc(6px+0.39vw)]">
        <span className="text-[calc(10px+0.390vw)] font-bold text-black sm:text-[calc(7px+0.390vw)]">
          {count}
        </span>{" "}
        review
        {count > 1 && "s"}
      </p>
    </div>
  );
};

export default ProductCardRatings;
