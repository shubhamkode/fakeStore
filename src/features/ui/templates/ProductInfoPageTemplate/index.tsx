import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import Balancer from "react-wrap-balancer";

import { Product } from "@/models/Product";
import { addProductToWishList } from "@/store/productSlice";
import { BsStarFill } from "react-icons/bs";
import { cn } from "tailwind-cn";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface IProductInfoPageTemplateProps {
  product?: Product;
  isUserLoggedIn?: boolean;
}

const ProductInfoPageTemplate: React.FC<IProductInfoPageTemplateProps> = ({
  product,
  // isUserLoggedIn,
}) => {
  const dispatch = useDispatch();

  if (product) {
    // const isProductInCart = product.others.cartQuantity > 0;
    const isProductInWishList = product.others.isWhislisted;
    return (
      <div className="w-full p-2">
        <div className=" max-w-[1440px] mx-auto p-2 space-y-1 md:space-y-0 bg-white rounded shadow sm:flex sm:space-x-5">
          <div className="relative max-w-[550px] w-full sm:pb-7">
            <img
              src={product.image}
              alt={`image of Prouct ${product.id}`}
              className="object-contain w-[550px] rounded-sm aspect-square border-[1px] p-2"
            />
            <button
              className={cn(
                "absolute right-3 top-2 text-2xl p-3 rounded-full shadow-lg"
              )}
              onClick={() => dispatch(addProductToWishList(product.id))}
            >
              {!isProductInWishList ? (
                <AiOutlineHeart />
              ) : (
                <AiFillHeart className="text-yellow-400 " />
              )}
            </button>

            <div className="hidden sm:block">
              <ClickToAction />
            </div>
          </div>

          <div className="w-full p-2">
            <h3 className="text-[calc(12px+0.390vw)] font-[600] text-gray-800">
              <Balancer>{product.title}</Balancer>
            </h3>

            <div className="flex items-center py-0.5  mt-2">
              <BsStarFill className="mr-1 text-yellow-400" />
              <p className="mr-3 text-[calc(12px+calc(0.390vw))] font-bold ">
                {product.rating.rate.toFixed(2)}
              </p>

              <p className="px-2 text-[calc(9px+0.390vw)] font-semibold text-gray-600">
                <span className="text-[calc(11px+0.390vw)] font-bold text-gray-700">
                  {product.rating.count}
                </span>{" "}
                review
                {product.rating.count > 1 && "s"}
              </p>
            </div>

            <p className=" text-[calc(25px+0.39vw)] font-bold mt-2">
              &#x24;{product.price}
            </p>

            <p className="mt-2 text-[calc(13px+0.39vw)] sm:text-[calc(10px+0.39vw)] text-gray-500 ">
              <span className="font-bold text-gray-600">Description: </span>{" "}
              <br />
              <Balancer>{product.description}</Balancer>
            </p>

            <div className="mt-16 sm:hidden">
              <ClickToAction />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default ProductInfoPageTemplate;

const ClickToAction = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      <button className="text-[calc(10px+0.390vw)] sm:text-[calc(8px+0.39vw)] py-3.5 bg-[#485169] font-[600] text-[#fdfdfd] rounded uppercase shadow">
        Add to Cart
      </button>
      <button className="text-[calc(10px+0.390vw)] sm:text-[calc(8px+0.39vw)]  py-3.5 bg-blue-800 font-[600] text-[#fdfdfd] rounded uppercase shadow">
        Buy Now
      </button>
    </div>
  );
};
