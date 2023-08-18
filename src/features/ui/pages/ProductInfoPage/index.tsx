import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProductInfoPageTemplate } from "@/ui/templates/";
import { RootState } from "@/store";

const ProductInfoPage = () => {
  const { id } = useParams();

  const { products } = useSelector((state: RootState) => state.products);
  const { token } = useSelector((state: RootState) => state.auth);

  const currentProduct = products.find(
    (product) => product.id == (id as unknown as number)
  );

  return (
      <ProductInfoPageTemplate
        product={currentProduct}
        isUserLoggedIn={!!token}
      />
  );
};

export default ProductInfoPage;
