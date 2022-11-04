import React from "react";
import "../../../assets/styles.css";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  const {
    id,
    title,
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
  } = product;

  const newPrice = price - (price * discountPercentage) / 100;

  console.log(product);
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 bg-white">
        <a data-mdb-ripple="true" data-mdb-ripple-color="orange">
          <img
            className="rounded-t-lg product-img"
            src={thumbnail}
            alt={title}
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-700 text-xl font-bold mb-2 capitalize">
            {title}
          </h5>
          <div className="text-lg font-semibold">
            <div>
              <p>${newPrice.toFixed(2)}</p>
              <div className="flex items-center gap-2 text-sm">
                <del className="text-gray-500">{price}</del>
                <p className="text-orange-600">({discountPercentage}%)</p>
              </div>
            </div>
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
          </div>
          {/* <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
