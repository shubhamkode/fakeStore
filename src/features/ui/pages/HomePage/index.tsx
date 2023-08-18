import React from "react";
import { useSelector } from "react-redux";

import { HomePageTemplate } from "@/ui/templates";
import { RootState } from "@/store";

const HomePage: React.FC = () => {
  const { categories } = useSelector((state: RootState) => state.category);
  const { products } = useSelector((state: RootState) => state.products);

  const selectedCategory =
    categories.find((category) => {
      return category.selected === true;
    })?.name ?? "All";

  const selectedProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <HomePageTemplate
      products={selectedProducts}
      categories={categories}
    />
  );
};

export default HomePage;
