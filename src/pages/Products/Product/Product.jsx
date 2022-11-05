import React from "react";
import "../../../assets/styles.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <Link to={`/category/product/${id}`}>
        <div className="rounded-lg h-full shadow-lg hover:shadow-2xl transition-all duration-200 bg-white">
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
