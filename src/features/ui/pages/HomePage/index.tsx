import React from "react";
import { useSelector } from "react-redux";

import { HomePageTemplate } from "@/ui/templates";
import { RootState } from "@/store";
import useProducts from "@/hooks/useProducts";

const HomePage: React.FC = () => {
  const { categories } = useSelector((state: RootState) => state.category);
  const { allProducts } = useProducts();

  const selectedCategory =
    categories.find((category) => {
      return category.selected === true;
    })?.name ?? "All";

  const selectedProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <HomePageTemplate products={selectedProducts} categories={categories} />
  );
};

export default HomePage;
