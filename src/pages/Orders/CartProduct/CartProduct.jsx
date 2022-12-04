import React from "react";

const CartProduct = ({ order, handleDeleteProduct }) => {
  const { _id, product_name, brand_name, price, product_image, quantity } =
    order;

  const tax = price * 0.05;
  const total = price + tax;

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img
            className="h-10 lg:h-24 rounded-md"
            src={product_image}
            alt={product_name}
          />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <span className="font-bold text-sm capitalize">{product_name}</span>
          <span className="text-red-500 text-xs">{brand_name}</span>
          <div>
            <button
              onClick={() => handleDeleteProduct(_id)}
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-1/5">
        <p>{quantity}</p>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${total}</span>
    </div>
  );
};

export default CartProduct;
