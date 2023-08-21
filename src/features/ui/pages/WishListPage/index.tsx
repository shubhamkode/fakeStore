import { useSelector } from "react-redux";

import { WishListPageTemplate } from "@/ui/templates";
import { RootState } from "@/store";
import { Product } from "@/models/Product";

export default function WishListPage() {
  const { productIds } = useSelector((store: RootState) => store.wishlist);
  const { products } = useSelector((store: RootState) => store.products);

  // const wishLishListProducts: Product[] = [];
  //
  // productIds.map((productId) =>
  //   products.map((product) => {
  //     if (product.id === productId) wishLishListProducts.push(product);
  //   })
  // );

  return <WishListPageTemplate wishListProducts={products} />;
}
