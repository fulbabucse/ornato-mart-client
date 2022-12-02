import React from "react";
import "../../../assets/styles.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    _id,
    price,
    brand_name,
    category_name,
    location,
    product_color,
    product_discount,
    product_image,
    product_main_materials,
    product_name,
    product_rating,
    product_size,
    product_stock_size,
    product_warranty,
    seller_name,
    service_type,
    subCategory_name,
  } = product;

  console.log(product);
  const newPrice = price - (price * parseInt(product_discount)) / 100;

  return (
    <div>
      <Link to={`/category/product/${_id}`}>
        <div className="rounded-lg h-full shadow-lg hover:shadow-2xl transition-all duration-200 bg-white">
          <a
            className="product__image"
            data-mdb-ripple="true"
            data-mdb-ripple-color="orange"
          >
            <img
              className="rounded-t-lg product-img"
              src={product_image}
              alt={product_name}
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-700 text-md font-bold mb-2 capitalize">
              {product_name}
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
                <div className="flex">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
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
