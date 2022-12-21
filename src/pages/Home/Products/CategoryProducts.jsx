import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../../Components/Spinner";
import Product from "../../shared/Product/Product";

const CategoryProducts = () => {
  const subCategoryName = useLoaderData();
  const { category_name, sub_category } = subCategoryName;

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["sub_category_products", category_name, sub_category],
    queryFn: async () => {
      const res = await fetch(
        `https://ornato-mart-server.vercel.app/sub_category_products?category=${category_name}&subCategory=${sub_category}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="max-w-screen-xl mx-auto mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {products?.map((product) => (
          <Product key={product?._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
