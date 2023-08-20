import React from "react";
import Balancer from "react-wrap-balancer";

import { Product } from "@/models/Product";
import { BsStarFill } from "react-icons/bs";
import { cn } from "tailwind-cn";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useWishList } from "@/hooks/useWishList";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";

interface IProductInfoPageTemplateProps {
  product: Product;
}

const ProductInfoPageTemplate: React.FC<IProductInfoPageTemplateProps> = ({
  product,
}) => {
  const { isProductInWishList, updateWishList } = useWishList(product.id);
  return (
    <div className="w-full p-2">
      <div className=" max-w-[1440px] mx-auto p-2 space-y-1 md:space-y-0 bg-white rounded shadow sm:flex sm:space-x-5">
        <div className="relative max-w-[550px] sm:pb-7 pl-2">
          <img
            src={product.image}
            alt={`image of Prouct ${product.id}`}
            className="object-contain w-[550px] rounded-sm aspect-square border-[1px] p-2"
          />
          <button
            className={cn(
              "absolute right-3 top-2 text-2xl p-3 rounded-full shadow-lg bg-white/50"
            )}
            onClick={updateWishList}
          >
            {!isProductInWishList ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-pink-500 " />
            )}
          </button>

          <div className="hidden pt-4 sm:block">
            <ClickToAction productId={product.id} />
          </div>
        </div>

        <div style={{flexGrow: 2}}className="w-full p-2">
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
            &#x24;{product.price.toFixed(1)}
          </p>

          <p className="mt-4 text-[calc(13px+0.39vw)] sm:text-[calc(10px+0.39vw)] text-gray-500 leading-5">
            <span className="font-bold text-gray-600">Description: </span>{" "}
            <br />
            <Balancer>{product.description}</Balancer>
          </p>

          <div className="mt-16 sm:hidden">
            <ClickToAction productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPageTemplate;

const ClickToAction = ({ productId }: { productId: number }) => {
  const { isProductInCart, addToCart } = useCart(productId);

  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {!isProductInCart ? (
        <button
          className="text-[calc(10px+0.390vw)] sm:text-[calc(8px+0.39vw)] py-3.5 bg-[#485169] font-[600] text-[#fdfdfd] rounded uppercase shadow"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      ) : (
        <Link
          to="/cart"
          className="text-[calc(10px+0.390vw)] sm:text-[calc(8px+0.39vw)] py-3.5 bg-[#485169] font-[600] text-[#fdfdfd] rounded uppercase shadow text-center"
        >
          Go To Cart
        </Link>
      )}
      {/* TODO:- handle product direct checkout */}
      <Link
        to="/"
        className="text-[calc(10px+0.390vw)] sm:text-[calc(8px+0.39vw)]  py-3.5 bg-blue-800 font-[600] text-[#fdfdfd] rounded uppercase shadow text-center"
      >
        Buy Now
      </Link>
    </div>
  );
};
