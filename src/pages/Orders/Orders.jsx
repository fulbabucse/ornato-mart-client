import React, { useContext, useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";
import CartProduct from "./CartProduct/CartProduct";

const Orders = () => {
  const { user, userSignOut } = useContext(AuthContexts);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://ornato-mart-server.vercel.app/cart?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("ornato-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userSignOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.error(err));
  }, [user?.email, userSignOut]);

  const handleDeleteProduct = (id) => {
    const agree = window.confirm("Are you sure cancel this orders");
    if (agree) {
      fetch(`https://ornato-mart-server.vercel.app/cart/${id}`, {
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
      {orders.length > 0 ? (
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row shadow-md my-10">
            <div className="w-full lg:w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Products</h1>
                <h2 className="font-semibold text-2xl">
                  {orders.length} Items
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
                {orders?.map((order) => (
                  <CartProduct
                    key={order._id}
                    order={order}
                    handleDeleteProduct={handleDeleteProduct}
                  ></CartProduct>
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

            <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {orders.length}
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
              className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
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
