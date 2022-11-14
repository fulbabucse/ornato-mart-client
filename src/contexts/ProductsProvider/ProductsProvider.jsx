import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { AuthContexts } from "../AuthProvider/AuthProvider";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const { user } = useContext(AuthContexts);
  const [totalPrice, setTotalPrice] = useState(0);
  const email = user?.email;
  const handleAddToCart = (product) => {
    const newProduct = { ...product, email };

    fetch("https://ornato-mart-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product cart success");
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const productInfo = {
    handleAddToCart,
    totalPrice,
    setTotalPrice,
    search,
    setSearch,
  };
  return (
    <ProductsContext.Provider value={productInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
