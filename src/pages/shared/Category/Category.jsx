import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Category = () => {
  const products = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products?.map((product) => (
          <Product key={product?._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Category;
