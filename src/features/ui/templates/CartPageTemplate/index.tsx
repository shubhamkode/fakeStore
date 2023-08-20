import React from "react";
import { Link } from "react-router-dom";

import { Product } from "@/models/Product";
import { ProductTile } from "@/ui/components";

interface ICartPageTemplateProps {
  cartProducts: Product[];
  isUserLoggedIn: boolean;
}

const CartPageTemplate: React.FC<ICartPageTemplateProps> = ({
  cartProducts,
  isUserLoggedIn,
}) => {
  return (
    <>
      {cartProducts.length === 0 ? (
        <NoItemsInCart isUserLoggedIn={isUserLoggedIn} />
      ) : (
        <ItemsInCart cartProducts={cartProducts} />
      )}
    </>
  );
};

export default CartPageTemplate;

const NoItemsInCart = ({ isUserLoggedIn }: { isUserLoggedIn: boolean }) => {
  return (
    <div className="px-4 py-2 max-w-[800px] mx-auto">
      <div className="flex flex-col items-center justify-around w-full px-4 py-8 text-gray-700 bg-white rounded-lg shadow h-[300px]">
        <h3 className="font-[500] text-[calc(22px+0.390vw)] sm:text-[calc(18px+0.390vw)]">
          {" "}
          No Products In Cart Yet...
        </h3>

        <div className="flex flex-col items-center">
          <p className="text-[calc(14px+0.39vw)] sm:text-[calc(10px+0.39vw)] font-[500] text-gray-600 px-2 py-1">
            Continue Shopping?
            <Link
              to="/"
              className="pl-1 text-[calc(12px+0.39vw)] sm:text-[calc(9px+0.39vw)] font-bold text-blue-700 text-underline"
            >
              Go Home
            </Link>
          </p>

          {!isUserLoggedIn && (
            <Link
              to="/login"
              className=" text-[calc(12px+0.39vw)] sm:text-[calc(9px+0.39vw)] font-bold text-blue-700 text-underline mt-1 "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ItemsInCart = ({ cartProducts }: { cartProducts: Product[] }) => {

  return (
    <div className="flex flex-col py-2 lg:flex-row">
      <div className="w-full px-3 mx-auto mt-5 ">
        <div className="w-full border divide-y-2 rounded-sm shadow bg-">
          {cartProducts.map((cartProduct) => (
            <ProductTile product={cartProduct} key={cartProduct.id} />
          ))}
        </div>
      </div>
      <div className="px-3">
        <div className="mt-6 lg:mt-5 ml-auto w-full max-w-[500px] lg:min-w-[500px] px-3 text-gray-700 bg-white py-2 rounded shadow ">
          <div className="px-4 py-2 divide-y divide-y-reverse">
            <h3 className="text-lg uppercase font-[600] text-gray-600">
              Price Details
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-[600] ">Price (3 Items):</p>{" "}
              <p className="font-[700] text-lg">$38,888</p>
            </div>

            <div className="flex items-center justify-between mt-0">
              <p className="text-sm font-[600] ">Discount: </p>{" "}
              <p className="font-[700]">$0</p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-[600] ">Total Amount: </p>{" "}
              <p className="font-[700]">$38,888</p>
            </div>
          </div>

          <div className="flex items-center justify-end mt-5 mb-2">
            <button className="px-6 text-white bg-blue-800 font-[600] rounded py-2 sm:py-1.5">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};