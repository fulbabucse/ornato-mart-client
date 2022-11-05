import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const products = useLoaderData();

  const handleDeleteProduct = (id) => {
    const agree = window.confirm("Are you sure cancel this orders");
    if (agree) {
      fetch(`http://localhost:5000/cart/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const restOrders = orders.filter((odr) => odr._id !== id);
            toast.error("Orders cancel successfully");
            setOrders(restOrders);
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div>
      {products.length > 0 ? (
        <div className="container mx-auto">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {products.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total (Tax includes)
                </h3>
              </div>

              <div>
                {products?.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img
                          className="h-24"
                          src={product.thumbnail}
                          alt={product.title}
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4">
                        <span className="font-bold text-sm capitalize">
                          {product.title}
                        </span>
                        <span className="text-red-500 text-xs">
                          {product.brand}
                        </span>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center w-1/5">
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>

                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value="1"
                      />

                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${product.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${product.price + (product.price / 100) * 10}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/"
                className="flex items-center gap-2 w-40 font-semibold text-indigo-600 text-sm mt-10"
              >
                <FaArrowLeft></FaArrowLeft>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {products.length}
                </span>
                <span className="font-semibold text-sm">590$</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>$600</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-5 mt-10">
          <h1 className="text-orange-600 text-2xl font-semibold">Empty Cart</h1>
          <Link to="/">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
