import { useSelector } from "react-redux";

import { WishListPageTemplate } from "@/ui/templates";
import { RootState } from "@/store";
import { Product } from "@/models/Product";
// import { Product } from "@/models/Product";

export default function WishListPage() {
  // const { productIds } = useSelector((store: RootState) => store.wishlist);
  const { products } = useSelector((store: RootState) => store.products);
  const { productIds } = useSelector((store: RootState) => store.wishlist);

  // const wishLishListProducts: Product[] = [];
  //
  // productIds.map((productId) =>
  //   products.map((product) => {
  //     if (product.id === productId) wishLishListProducts.push(product);
  //   })
  // );

  const wishListProducts:Product[] = [];

  productIds.map((productId)=>{
    wishListProducts.push({id: productId,...products[productId]})
  })

  return <WishListPageTemplate wishListProducts={wishListProducts} />;
}
