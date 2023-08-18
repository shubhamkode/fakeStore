import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Product } from "@/models/Product";
import { addProductToCart, removeProductFromCart } from "@/store/productSlice";

const ProductTile: React.FC<{
  product: Product;
  dispatch: Dispatch<AnyAction>;
}> = ({ product, dispatch }) => {
  return (
    <div className="flex items-center p-2 mx-auto rounded shadow-lg  max-w-[1200px] ring-2 ring-blue-800/50 justify-between min-w-[400px]">
      <img
        src={product.image}
        className="w-[80px] h-20 p-2 rounded shadow-lg "
      />

      <Link
        className="p-1 mx-2 space-y-2 w-[200px] sm:w-[500px]"
        to={`/product/${product.id}`}
      >
        <h3 className="text-sm font-bold text-blue-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-[.65rem] font-bold text-gray-600 capitalize">
          {product.category}
        </p>
      </Link>

      <div className="flex flex-col items-center justify-center p-1 mx-2 space-y-2 w-[100px] sm:w-[200px]">
        <p className="font-semibold text-center text-blue-800 ">
          ${product.price}
        </p>

        <div className="flex items-center justify-around  space-x-2  min-w-[100px] max-w-min">
          <button
            className="p-1 text-lg font-bold text-blue-800 duration-200 rounded-full shadow ring-2 ring-blue-800 hover:text-white hover:bg-blue-800"
            onClick={() => dispatch(removeProductFromCart(product.id))}
          >
            <FiMinus />
          </button>
          <p className="px-2 text-sm font-bold text-blue-800">
            {product?.others.cartQuantity}
          </p>
          <button
            className="p-1 text-lg font-bold text-blue-800 duration-200 rounded-full shadow ring-2 ring-blue-800 hover:text-white hover:bg-blue-800"
            onClick={() => dispatch(addProductToCart(product.id))}
          >
            <FiPlus />
          </button>
        </div>
      </div>

      <p className="w-[100px] max-w-[100px] py-2 font-bold text-center text-blue-800">
        ${(product.others.cartQuantity * product.price).toFixed(2)}
      </p>
    </div>
  );
};

export default ProductTile;
