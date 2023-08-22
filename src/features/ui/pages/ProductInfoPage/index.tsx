import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProductInfoPageTemplate } from "@/ui/templates/";
import { RootState } from "@/store";

const ProductInfoPage = () => {
  const { id } = useParams();

  const { products } = useSelector((state: RootState) => state.products);

  if (!id) {
    return null;
  }

  const product = { id, ...products[id] };

  return <ProductInfoPageTemplate product={product} />;
};

export default ProductInfoPage;
