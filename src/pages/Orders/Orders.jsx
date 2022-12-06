import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";
import CartProduct from "./CartProduct/CartProduct";
import ModalForm from "./ModalForm";

const Orders = () => {
  const { user } = useContext(AuthContexts);

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/cart?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("ornatoToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: databaseUser = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteProduct = (id) => {
    const agree = window.confirm("Are you sure cancel this orders");
    if (agree) {
      fetch(`http://localhost:5000/cart/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("ornatoToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {})
        .catch((err) => console.error(err));
    }
  };

  const price = [];
  orders.map((order) => {
    return price.push(parseInt(order.price));
  });

  const withOutTax = price?.reduce((total, value) => {
    return total + value;
  }, 0);

  const shipping = 50;
  const tax = withOutTax * 0.05;

  const subTotal = tax + withOutTax;

  const totalPrice = withOutTax + shipping + tax;

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const { address, area, city, phone, province } = databaseUser;

  return (
    <div className="text-baseColor">
      {orders?.length > 0 ? (
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row shadow-md my-10">
            <div className="w-full lg:w-3/4 bg-white px-10 py-10">
              {!databaseUser && (
                <button
                  className="text-blue-500 bg-transparent w-full border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active show"
                  data-bs-toggle="modal"
                  data-bs-target="#shippingBillingModalForm"
                >
                  Add Shipping & Billing Address
                </button>
              )}
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
                className="flex items-center gap-2 w-40 font-semibold text-primaryColor text-sm mt-10"
              >
                <FaArrowLeft></FaArrowLeft>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              {databaseUser && (
                <>
                  <p>Billing Address: </p>
                  <p className="text-sm">
                    {address}, {area}, {city}, {province}, Bangladesh
                  </p>
                </>
              )}
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {orders.length}
                </span>
                <span className="font-semibold text-sm">৳{subTotal}</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 focus:outline-none border focus:border-primaryColor text-gray-600 w-full text-sm">
                  <option>Standard shipping - ৳{shipping}</option>
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
                  <span>৳{totalPrice}</span>
                </div>
                <button className="bg-primaryColor/80 font-semibold hover:bg-primaryColor py-3 text-sm text-white uppercase w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
            <ModalForm />
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
