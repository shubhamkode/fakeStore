import React from "react";
import { useDispatch } from "react-redux";
import { cn } from "tailwind-cn";

import { Category } from "@/models/Category";
import {
  addProductToCart,
  addProductToWishList,
  removeProductFromWishList,
} from "@/store/productSlice";
import { updateCategory } from "@/store/categorySlice";
import { Product } from "@/models/Product";
import { ProductCard } from "@/ui/components";
import { Link } from "react-router-dom";

interface IHomePageTemplate {
  products: Product[];
  categories: Category[];
}

const HomePageTemplate: React.FC<IHomePageTemplate> = ({
  products,
  categories,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="px-3 mt-2">
      <CategoriesSection
        categories={categories}
        onCategoryUpdate={(currentCategory: string) =>
          dispatch(updateCategory(currentCategory))
        }
      />
      <div className="flex flex-wrap items-center justify-center w-full gap-1 py-4">
        {products.map((product) => (
          <ProductCard.Card key={product.id} product={product}>
            <ProductCard.WishListButton
              onClick={() => {
                if (!product.others.isWhislisted) {
                  dispatch(addProductToWishList(product.id));
                } else {
                  dispatch(removeProductFromWishList(product.id));
                }
              }}
            />
            <Link to={`/product/${product.id}`}>
              <ProductCard.Image />
              <ProductCard.Info>
                <ProductCard.Title />
                <ProductCard.Ratings />
              </ProductCard.Info>
            </Link>
            <div className="flex items-center justify-between px-2 py-1 mt-auto">
              <ProductCard.Price />
              <ProductCard.Button
                onClick={() => {
                  dispatch(addProductToCart(product.id));
                }}
              />
            </div>
          </ProductCard.Card>
        ))}
      </div>
    </div>
  );
};

export default HomePageTemplate;

const CategoriesSection = ({
  categories,
  onCategoryUpdate,
}: {
  categories: Category[];
  onCategoryUpdate: (currentCategory: string) => void;
}) => {
  return (
    <div className="px-2 bg-white py-1.5">
      <div className="flex items-center p-1 space-x-2 overflow-x-auto no-scrollbar">
        {categories.map((category, index) => (
          <button
            onClick={() => onCategoryUpdate(category.name)}
            key={index}
            className={cn(
              `px-4 text-gray-700 rounded-full bg-neutral-100 py-1.5 duration-200 hover:bg-blue-800 hover:text-white font-bold capitalize whitespace-nowrap text-[calc(10px+0.390vw)]`,
              category.selected && "bg-blue-800 text-white"
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
