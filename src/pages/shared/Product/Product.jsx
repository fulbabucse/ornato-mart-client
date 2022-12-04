import React from "react";
import "../../../assets/styles.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const Product = ({ product }) => {
  const {
    _id,
    price,
    product_discount,
    product_image,
    product_name,
    product_rating,
  } = product;


  const newPrice = price - (price * parseInt(product_discount)) / 100;

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {product_rating >= i + 1 ? (
          <FaStar />
        ) : product_rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div>
      <Link to={`/product/${_id}`}>
        <div className="rounded-lg h-full shadow-lg hover:shadow-2xl transition-all duration-200 bg-white">
          <p
            className="product__image"
            data-mdb-ripple="true"
            data-mdb-ripple-color="orange"
          >
            <img
              className="rounded-t-lg product-img"
              src={product_image}
              alt={product_name}
            />
          </p>
          <div className="p-6">
            <h5 className="text-gray-700 text-sm font-medium mb-2 capitalize">
              {product_name.slice(0, 40)}
            </h5>
            <div className="text-lg font-semibold">
              <div>
                <p>${newPrice.toFixed(2)}</p>
                <div className="flex items-center gap-2 text-sm">
                  <del className="text-gray-500">{price}</del>
                  <p className="text-orange-600">({product_discount}%)</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-orange-300">
                <div className="flex">{ratingStar}</div>
                <p className="text-gray-700">({product_rating})</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
