import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../shared/Product/Product";

const Search = () => {
  const searchProduct = useLoaderData().products;
  return (
    <div className="px-3 lg:px-20 mt-3">
      {searchProduct.length > 0 ? (
        <>
          <h1 className="text-center mb-3 font-semibold text-xl text-orange-500">
            {searchProduct.length} Products found your Criteria
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-2">
            {searchProduct.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </>
      ) : (
        <h1 className="text-center mb-3 font-semibold text-xl text-orange-500">
          No Products Matched Your Search Criteria
        </h1>
      )}
    </div>
  );
};

export default Search;
