import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProductInfoPageTemplate } from "@/ui/templates/";
import { RootState } from "@/store";

const ProductInfoPage = () => {
  const { id } = useParams();

  const { products } = useSelector((state: RootState) => state.products);

  const currentProduct = products.find(
    (product) => product.id == (id as unknown as number)
  );

  if (currentProduct)
    return <ProductInfoPageTemplate product={currentProduct} />;
};

export default ProductInfoPage;
