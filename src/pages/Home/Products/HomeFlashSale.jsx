import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Timer from "../../../Components/Timer";
import Product from "../../shared/Product/Product";

const HomeFlashSale = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

  const sliceProducts = products.slice(7, 12);

  return (
    <div className="my-2">
      <h3 className="text-xl font-bold text-gray-600">Flash Sale</h3>
      <div className="bg-white p-4 flex flex-col justify-between items-center w-full">
        <div className="bg-white flex flex-wrap justify-between items-center w-full border-b border-b-gray-300 pb-3">
          <div className="flex gap-6 items-center">
            <p className="text-primaryColor">On Sale Now</p>
            <div className="flex items-center gap-2">
              <p>Ending in</p>
              <Timer></Timer>
            </div>
          </div>
          <div>
            <Link to="/wow/flash-sale">
              <button className="text-primaryColor bg-transparent border border-solid border-primaryColor hover:bg-primaryColor hover:text-white active:bg-primaryColor font-bold uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  active show">
                Shop More
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:mt-3">
          {sliceProducts?.map((product) => (
            <Product key={product?._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFlashSale;
