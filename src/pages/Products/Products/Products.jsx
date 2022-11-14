import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../../shared/Product/Product";

const Products = () => {
  const products = useLoaderData().products;
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
