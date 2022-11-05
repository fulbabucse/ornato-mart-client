import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "../../../assets/styles.css";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    id,
    title,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
  } = product;
  const newPrice = price - (price * discountPercentage) / 100;
  return (
    <div className="product-container">
      <div className="flex items-center gap-6">
        <div className="shadow-xl rounded-md">
          <ProductCarousel product={product}></ProductCarousel>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-700">{title}</h3>
          <div className="text-lg font-semibold">
            <div>
              <div className="flex items-center gap-1 text-sm text-orange-300">
                <div className="flex">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <p className="text-gray-700">({rating})</p>
              </div>
              <p className="text-gray-600">
                Brand: <span className="text-gray-800">{brand}</span>
              </p>
              <p className="text-2xl font-semibold text-orange-500">
                ${newPrice.toFixed(2)}
              </p>
              <div className="flex items-center gap-1 text-sm">
                <del className="text-gray-500">{price}</del>
                <p className="text-orange-600">(-{discountPercentage}%)</p>
              </div>
              <p className="text-sm font-semibold text-gray-600">
                Stock: Only
                <span className="text-gray-800"> {stock} items left</span>
              </p>

              <p className="text-md font-semibold text-gray-600">
                Description:
                <span className="text-gray-800"> {description}</span>
              </p>

              <p className="text-md font-semibold text-gray-600 capitalize">
                Category:
                <span className="text-gray-800"> {category}</span>
              </p>
            </div>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-4 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>Seller Details</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
