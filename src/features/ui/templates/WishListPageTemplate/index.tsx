import { Product } from "@/models/Product";
import { Link } from "react-router-dom";
import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { useWishList } from "@/hooks/useWishList";
import Balancer from "react-wrap-balancer";
import { useCart } from "@/hooks/useCart";

interface IWishListPageTemplateProps {
  wishListProducts: Product[];
}

const WishListPageTemplate: FC<IWishListPageTemplateProps> = ({
  wishListProducts,
}) => {
  return (
    <div className="container w-full py-4 mt-5 rounded">
      <div className="w-full divide-y rounded">
        {wishListProducts.map((product) => (
          <WishListProductTile product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default WishListPageTemplate;

const WishListProductTile = ({ product }: { product: Product }) => {
  const { isProductInWishList, updateWishList } = useWishList(product.id);
  const { isProductInCart, addToCart } = useCart(product.id);

  const sendToCart = () => {
    updateWishList();
    if (!isProductInCart) {
      addToCart();
    }
  };

  if (isProductInWishList)
    return (
      <div className="flex bg-white pl-3 relative items-center space-x-2 h-[130px] text-gray-700 first:rounded-t last:rounded-b max-w-[700px] w-full">
        <img
          src={product.image}
          className="min-w-[80px] max-w-[80px] h-20 p-2  rounded border-[1px] shadow"
        />

        <div className="flex flex-col w-full px-2 py-2 text-gray-700">
          <div className="mb-2">
            <Link
              to={`/product/${product.id}`}
              className="leading-5 font-[500] line-clamp-2"
            >
              <Balancer>{product.title}</Balancer>
            </Link>
            <p className="text-xs text-gray-600">{product.category}</p>
          </div>

          <p className="text-xl font-[600]">${product.price}</p>

          <button
            className=" mt-2 w-min whitespace-nowrap text-xs font-[600] uppercase "
            onClick={sendToCart}
          >
            Send to Cart
          </button>
        </div>
        <div className="flex self-start p-2">
          <button className="p-2" onClick={updateWishList}>
            <FaTrash className="text-gray-500" />
          </button>
        </div>
      </div>
    );
  return null;
};
