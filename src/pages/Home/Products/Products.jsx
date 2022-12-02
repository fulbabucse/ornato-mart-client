import { useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "../../shared/Product/Product";

const Products = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="flex flex-col items-center w-full mb-5">
        <h3 className="text-4xl font-bold text-gray-600">Just For You</h3>
        <p className="text-gray-700 text-center w-full lg:w-3/5 font-semibold">
          At "Ornato Mart" bangladesh, we carry some of the finest brands and
          offer amazing quality that is hard to find elsewhere under one roof.
          So wait no more! Choose from list of men’s clothing brands in
          bangladesh using our brand filter and find the product that best
          matches your styling taste and budget needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products?.map((product) => (
          <Product key={product?._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
