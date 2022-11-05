import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "../../../assets/styles.css";
import {
  FaStar,
  FaLocationArrow,
  FaTruckMoving,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { ProductsContext } from "../../../contexts/ProductsProvider/ProductsProvider";

const ProductDetails = () => {
  const { handleAddToCart } = useContext(ProductsContext);
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

  const newProduct = { ...product, newPrice };

  return (
    <div className="product-container">
      <div className="flex gap-6">
        <div className="shadow-xl rounded-md">
          <ProductCarousel product={product}></ProductCarousel>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-700 capitalize">
            {title}
          </h3>
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
              onClick={() => handleAddToCart(newProduct)}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-4 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-2 border border-gray-400 p-3 rounded-md">
          <p className="text-xl font-semibold text-gray-700">Delivery</p>
          <hr />
          <div className="flex items-center gap-1">
            <FaLocationArrow className="text-gray-7"></FaLocationArrow>
            <p className="text-sm">
              Dhaka, Dhaka North, Banani Road No. 12 - 19
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <FaTruckMoving></FaTruckMoving>
                <p>Standard Delivery</p>
              </div>
              <p className="text-xs ml-6">2-5 (days)</p>
            </div>
            <p className="text-lg font-semibold">$10</p>
          </div>
          <div className="flex items-center gap-1">
            <FaFileInvoiceDollar></FaFileInvoiceDollar>
            <p>Cash on Delivery Available</p>
          </div>

          <div className="flex items-center gap-1">
            <img
              className="w-5 h-5"
              src="https://camo.githubusercontent.com/48daaa310894c801a3d9396a53cb68f978db169c1f10ea59d82c75527d441446/68747470733a2f2f63646e322e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6d65646963696e652d352d312f3531322f73657274696669636174655f7365616c2d3531322e706e67"
              alt=""
            />
            <p>Warranty not available</p>
          </div>
        </div>
        <div className="space-y-2 border border-gray-400 rounded-md mt-4 p-3">
          <div className="-space-y-2">
            <small>Sold by</small>
            <h3 className="text-xl font-semibold text-gray-700">Ornato Mart</h3>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="text-center">
              <small>Positive Seller Rating</small>
              <h3 className="text-3xl font-semibold text-gray-700">99%</h3>
            </div>
            <div className="text-center">
              <small>Shipping on Time</small>
              <h3 className="text-3xl font-semibold text-gray-700">98%</h3>
            </div>
            <div className="text-center">
              <small>Response Rate</small>
              <h3 className="text-3xl font-semibold text-gray-700">100%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
