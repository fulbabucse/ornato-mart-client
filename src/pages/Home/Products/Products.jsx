import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import Spinner from "../../../Components/Spinner";
import Product from "../../shared/Product/Product";

const Products = () => {
  const [isSort, setIsSort] = useState(false);
  const [showMore, setShowMore] = useState(10);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", isSort],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products?order=${isSort}`);
      const data = await res.json();
      return data;
    },
  });

  const sliceProducts = products.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-gray-600">Just For You</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm">Sort by:</p>
          <div className="w-32">
            <select
              onChange={(e) => setIsSort(e.target.value)}
              class="form-select focus:shadow-none appearance-none
      block
      px-3
      py-1.5
      text-sm
      w-full
      cursor-pointer
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
              aria-label="Default select example"
            >
              <option value="low">High to Low</option>
              <option value="high">Low to High</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {sliceProducts?.map((product) => (
          <Product key={product?._id} product={product}></Product>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => handleShowMore()}
          className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold px-4 py-2 rounded-md  text-sm text-opacity-90 hover:text-opacity-100 w-40"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Products;
