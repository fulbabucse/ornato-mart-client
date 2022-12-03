import { useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "../Product/Product";

const SimilarProducts = ({ category_name, subCategory_name }) => {
  const { data: products = [] } = useQuery({
    queryKey: ["sub_category_products", category_name, subCategory_name],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/sub_category_products?category=${category_name}&subCategory=${subCategory_name}`
      );
      const data = await res.json();
      return data;
    },
  });

  const similarProducts = products.slice(0, 2);

  return (
    <div>
      <h1 className="text-xl mb-2 text-baseColor font-medium">
        Similar Products
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {similarProducts?.map((product) => (
          <Product key={product?._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
