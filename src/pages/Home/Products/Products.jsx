import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../../shared/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center w-full mb-5">
        <h3 className="text-4xl font-bold text-gray-600">Just For You</h3>
        <p className="text-gray-700 w-full lg:w-3/5 font-semibold">
          At Ornato.com bangladesh, we carry some of the finest brands and offer
          amazing quality that is hard to find elsewhere under one roof. So wait
          no more! Choose from list of men’s clothing brands in bangladesh using
          our brand filter and find the product that best matches your styling
          taste and budget needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
