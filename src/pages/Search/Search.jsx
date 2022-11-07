import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../shared/Product/Product";

const Search = () => {
  const searchProduct = useLoaderData().products;
  console.log(searchProduct);
  return (
    <div className="max-w-screen-xl mx-auto h-screen mt-5">
      {/* <h1>Search {searchProduct.length}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {searchProduct.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Search;
