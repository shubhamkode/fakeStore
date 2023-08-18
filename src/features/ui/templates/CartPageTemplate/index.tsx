import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Product } from "@/models/Product";
import { ProductTile } from "@/ui/components";

interface ICartPageTemplateProps {
  cartProducts: Product[];
}

const CartPageTemplate: React.FC<ICartPageTemplateProps> = ({
  cartProducts,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="container px-2 py-5 mx-auto ">
      {cartProducts.length > 0 ? (
        <>
          <h2 className="text-3xl font-[500] text-blue-800 mb-5 p-2">
            My Cart
          </h2>
          <div className="p-2 space-y-4">
            {cartProducts.map((product) => (
              <ProductTile
                product={product}
                key={product.id}
                dispatch={dispatch}
              />
            ))}
          </div>
          <div className="flex items-center justify-end px-2 py-4 max-w-[1000px] mx-auto mt-5 rounded">
            <p className="px-2 py-4 text-lg font-[500] text-blue-800">
              Total Amount:{" "}
              <span className="pl-2 text-2xl font-bold">
                $
                {cartProducts
                  .reduce(
                    (total, item) =>
                      total + item.others.cartQuantity * item.price,
                    0
                  )
                  .toFixed(2)}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-end px-2 py-1 max-w-[1000px] mx-auto mt-0 rounded">
            <button className="px-8 py-2.5  font-bold text-white bg-blue-800 rounded-full shadow-lg text-sm">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center h-[500px] justify-center flex-col ">
          <h2 className="p-4 mb-4 text-2xl font-bold text-blue-800/80">
            There are no Items in your cart...
          </h2>
          <p className="mb-4 text-sm font-bold text-center text-gray-700">
            Enjoy Shopping...
          </p>

          <Link
            to="/"
            className="px-8 py-2.5 text-lg font-bold text-white duration-200 bg-blue-800 rounded-full shadow  ring-2 ring-blue-800 mt-4"
          >
            Go Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPageTemplate;
