import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

import { Product } from "@/models/Product";
import { ProductTile } from "@/ui/components";
// import { ProductTile } from "@/ui/components";

interface ICartPageTemplateProps {
  cartProducts: Product[];
}

const CartPageTemplate: React.FC<ICartPageTemplateProps> = ({
  cartProducts,
}) => {
  //TODOOO:- Complete Cart PAGE

  return (
    <>
      {cartProducts.length === 0 ? (
        <NoItemsInCart />
      ) : (
        <ItemsInCart cartProducts={cartProducts} />
      )}
    </>
  );
};

export default CartPageTemplate;

const NoItemsInCart = () => {
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

          <Link
            to="/login"
            className=" text-[calc(12px+0.39vw)] sm:text-[calc(9px+0.39vw)] font-bold text-blue-700 text-underline mt-1 "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const ItemsInCart = ({ cartProducts }: { cartProducts: Product[] }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full px-3 mx-auto mt-5 ">
        <div className="w-full border divide-y-2 rounded-sm shadow bg-">
          {cartProducts.map((cartProduct) => (
            <ProductTile product={cartProduct} />
          ))}
        </div>
      </div>
      <div className="px-3">
        
      <div className="mt-6 lg:mt-5 max-w-[500px] lg:w-[500px] w-full mx-auto px-3 text-gray-700 bg-white py-2 rounded shadow">
        <div className="px-4 py-2 divide-y divide-y-reverse">
          <h3 className="text-lg uppercase font-[600] text-gray-600">
            Price Details
          </h3>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm font-[600] ">Price (3 Items):</p>{" "}
            <p className="font-[700] text-lg">$38,888</p>
          </div>

          <div className="flex items-center justify-between mt-0">
            <p className="text-sm font-[600] ">Discount: </p>{" "}
            <p className="font-[700]">$0</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm font-[600] ">Total Amount: </p>{" "}
            <p className="font-[700]">$38,888</p>
          </div>
        </div>

          <div className="flex items-center justify-end mt-8 mb-2">
            <button className="px-6 text-white bg-blue-800 font-[600] rounded py-2 sm:py-1.5">checkout</button>
          </div>
      </div>
    </div>
      </div>
  );
};

// return (
//   <div className="container px-2 py-5 mx-auto ">
//     {cartProducts.length > 0 ? (
//       <>
//         <h2 className="text-3xl font-[500] text-blue-800 mb-5 p-2">
//           My Cart
//         </h2>
//         <div className="p-2 space-y-4">
//           {cartProducts.map((product) => (
//             <ProductTile
//               product={product}
//               key={product.id}
//               dispatch={dispatch}
//             />
//           ))}
//         </div>
//         <div className="flex items-center justify-end px-2 py-4 max-w-[1000px] mx-auto mt-5 rounded">
//           <p className="px-2 py-4 text-lg font-[500] text-blue-800">
//             Total Amount:{" "}
//             <span className="pl-2 text-2xl font-bold">
//               $
//               {cartProducts
//                 .reduce((total, item) => total + 0 * item.price, 0)
//                 .toFixed(2)}
//             </span>
//           </p>
//         </div>

//         <div className="flex items-center justify-end px-2 py-1 max-w-[1000px] mx-auto mt-0 rounded">
//           <button className="px-8 py-2.5  font-bold text-white bg-blue-800 rounded-full shadow-lg text-sm">
//             Checkout
//           </button>
//         </div>
//       </>
//     ) : (
//       <div className="flex items-center h-[500px] justify-center flex-col ">
//         <h2 className="p-4 mb-4 text-2xl font-bold text-blue-800/80">
//           There are no Items in your cart...
//         </h2>
//         <p className="mb-4 text-sm font-bold text-center text-gray-700">
//           Enjoy Shopping...
//         </p>

//         <Link
//           to="/"
//           className="px-8 py-2.5 text-lg font-bold text-white duration-200 bg-blue-800 rounded-full shadow  ring-2 ring-blue-800 mt-4"
//         >
//           Go Home
//         </Link>
//       </div>
//     )}
//   </div>
// );
