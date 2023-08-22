import { Product } from "@/models/Product";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function useProducts() {
  const { products } = useSelector((store: RootState) => store.products);

  const allProducts: Product[] = [];

  Object.keys(products).forEach((id) => {
    allProducts.push({ id: id, ...products[id] });
  });

  return { allProducts };
}
