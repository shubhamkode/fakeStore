import { Link } from "react-router-dom";

import { Product } from "@/models/Product";
import { useCart } from "@/hooks/useCart";
import { BsDash, BsPlus } from "react-icons/bs";

const ProductTile: React.FC<{
  product: Product;
}> = ({ product }) => {
  const { cartQuantity, increaseQuantity, decreaseQuantity, removeProduct } =
    useCart(product.id);

  return (
    <div className="flex bg-white">
      <div className="flex flex-col py-4 pl-2 w-min">
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            className="w-[80px] h-20 p-2 rounded border-[1px] shadow"
          />
        </div>

        <div className="px-1 mt-3 border rounded w-min">
          <label htmlFor="Quantity" className="sr-only">
            Quantity{" "}
          </label>

          <div className="flex items-center p-1 space-x-1">
            <button
              type="button"
              className="p-1 text-center text-gray-600 transition rounded-full hover:opacity-75 bg-slate-100 disabled:bg-slate-200/75"
              disabled={cartQuantity <= 1}
              onClick={decreaseQuantity}
            >
              <BsDash />
            </button>

            <p className="w-10  border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none">
              {cartQuantity}
            </p>

            <button
              type="button"
              className="p-1 text-gray-600 transition rounded-full hover:opacity-75 bg-slate-100"
              onClick={increaseQuantity}
            >
              <BsPlus />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-around w-full px-2 py-4 text-gray-700">
        <div>
          <Link
            to={`/product/${product.id}`}
            className="leading-5 font-[500] line-clamp-2 "
          >
            {product.title}
          </Link>
          <p className="text-xs text-gray-600">{product.category}</p>
        </div>
        <p className="text-xl font-[600]">${product.price}</p>
        <div className="flex items-center space-x-4">
          <button className="text-[calc(10px+0.39vw)] sm:text-xs uppercase font-[600] text-slate-500">
            Save for Later
          </button>
          <button
            className="text-[calc(10px+0.39vw)] sm:text-xs uppercase font-[600] text-slate-500"
            onClick={removeProduct}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
