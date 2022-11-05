import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const handleAddToCart = (product) => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const productInfo = { handleAddToCart, totalPrice, setTotalPrice };
  return (
    <ProductsContext.Provider value={productInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
