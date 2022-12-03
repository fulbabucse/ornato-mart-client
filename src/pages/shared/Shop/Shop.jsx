import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiBell } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Shop = () => {
  const shop = useLoaderData();
  const { seller_name } = shop;

  const { data: products } = useQuery({
    queryKey: ["shop_products", seller_name],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/shop_products?shopName=${seller_name}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto">
      <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500 pb-1 pt-4 pl-4 mb-5">
        <div className="flex items-center gap-5 bg-white p-3 lg:w-2/5">
          <div className="">
            <img
              className="border-r border-r-gray-400 w-20 h-20 pr-3"
              src="https://iconarchive.com/download/i77853/custom-icon-design/pretty-office-11/shop.ico"
              alt=""
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="text-baseColor">
              <h4 className="font-medium">{seller_name}</h4>
              <p className="text-sm">500 Followers</p>
              <p className="text-sm">95% Positive Seller Rating</p>
            </div>
            <div>
              <button className="text-primaryColor flex flex-col items-center font-medium">
                <BiBell className="text-4xl text-center"></BiBell>
                <p className="text-center">Follow</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products?.map((product) => (
          <Product key={product?._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
