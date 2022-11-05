import React, { useState } from "react";
import toast from "react-hot-toast";

const CartProduct = ({ product }) => {
  const [orders, setOrders] = useState([]);
  const { _id, title, brand, price, thumbnail } = product;

  const tax = (price / 100) * 10;
  const total = price + tax;

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
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={thumbnail} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <span className="font-bold text-sm capitalize">{title}</span>
          <span className="text-red-500 text-xs">{brand}</span>
          <button
            onClick={() => handleDeleteProduct(_id)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input className="mx-2 border text-center w-8" type="text" value="1" />

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${total}</span>
    </div>
  );
};

export default CartProduct;
