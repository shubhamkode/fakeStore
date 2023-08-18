import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

import { Product } from "@/models/Product";
import {
  addProductToCart,
  addProductToWishList,
  removeProductFromCart,
  removeProductFromWishList,
} from "@/store/productSlice";
import { BsStarFill } from "react-icons/bs";

interface IProductInfoPageTemplateProps {
  product?: Product;
  isUserLoggedIn?: boolean;
}

const ProductInfoPageTemplate: React.FC<IProductInfoPageTemplateProps> = ({
  product,
  isUserLoggedIn,
}) => {
  const dispatch = useDispatch();

  if (product) {
    const isProductInCart = product.others.cartQuantity > 0;
    const isProductInWishList = product.others.isWhislisted;
    return (
      <div className="w-full p-4">
        <div className="px-2 max-w-[1440px] mx-auto md:grid gap-2 py-4 md:grid-cols-2 space-y-2 md:space-y-0 bg-white rounded shadow">
          <img
            src={product.image}
            alt={`image of Prouct ${product.id}`}
            className="object-contain w-[550px] rounded aspect-square"
          />

          <div className="px-2 py-5">
            <h3 className="text-[calc(12px+0.390vw)] font-[600] ">
              {product.title}
            </h3>

            <div className="flex items-center  py-0.5  mt-2">
              <BsStarFill className="mr-1 text-yellow-400" />
              <p className="mr-3 text-[calc(12px+calc(0.390vw))] font-bold ">
                {product.rating.rate.toFixed(2)}
              </p>

              <p className="px-2 text-[calc(10px+0.390vw)] font-semibold text-gray-600">
                <span className="text-[calc(10px+0.390vw)] font-bold text-black">
                  {product.rating.count}
                </span>{" "}
                review
                {product.rating.count > 1 && "s"}
              </p>
            </div>

            {/* <p className="p-2 text-[calc(10px+0.390vw)] sm:text-[calc(9px+0.390vw)]  leading-6  font-[500]">
              <span className="font-bold text-[calc(12px+0.390vw)] sm:text-[calc(9px+0.390vw)]">
                Description{" "}
              </span>
              <span>{product.description}</span>
            </p> */}

            <p className=" text-[calc(25px+0.39vw)] font-bold mt-2">&#x24;{product.price}</p>

            <div className="flex flex-col items-center justify-center w-full p-2 space-y-4 sm:space-x-2 sm:flex-row sm:space-y-0 ">
              {!isProductInCart ? (
                !isProductInWishList ? (
                  <button
                    className="w-full max-w-lg py-3 font-bold text-white duration-300 bg-yellow-400 rounded-full hover:bg-yellow-300"
                    onClick={() => dispatch(addProductToWishList(product.id))}
                  >
                    Add to Wishlist
                  </button>
                ) : (
                  <button
                    className="w-full max-w-lg py-3 font-bold text-white duration-300 bg-yellow-400 rounded-full hover:bg-yellow-300"
                    onClick={() =>
                      dispatch(removeProductFromWishList(product.id))
                    }
                  >
                    Remove from WishList
                  </button>
                )
              ) : (
                <div />
              )}

              {!isProductInCart ? (
                <button
                  className="w-full max-w-lg py-3 font-bold text-white duration-200 bg-blue-800 rounded-full hover:bg-blue-700"
                  onClick={() => dispatch(addProductToCart(product.id))}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center w-full p-2 space-y-5">
                  <div className="flex items-center justify-around w-full max-w-lg px-4 py-0.5">
                    <button
                      className="p-1 text-4xl font-bold text-blue-800 duration-200 rounded-full shadow ring-2 ring-blue-800 hover:text-white hover:bg-blue-800"
                      onClick={() =>
                        dispatch(removeProductFromCart(product.id))
                      }
                    >
                      <FiMinus />
                    </button>
                    <p className="text-2xl font-bold text-blue-800">
                      {product?.others.cartQuantity}
                    </p>
                    <button
                      className="p-1 text-4xl font-bold text-blue-800 duration-200 rounded-full shadow ring-2 ring-blue-800 hover:text-white hover:bg-blue-800"
                      onClick={() => dispatch(addProductToCart(product.id))}
                    >
                      <FiPlus />
                    </button>
                  </div>

                  {isUserLoggedIn ? (
                    <Link
                      to="/cart"
                      className="w-full max-w-lg py-3 font-bold text-white duration-200 bg-blue-800 rounded-full hover:bg-blue-700"
                    >
                      Go To Cart
                    </Link>
                  ) : (
                    <p className="text-sm font-bold text-red-400">
                      <Link to="/login" className="text-blue-800 underline">
                        Login
                      </Link>{" "}
                      to view your cart...
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Navigate to="/" />;
};

export default ProductInfoPageTemplate;
