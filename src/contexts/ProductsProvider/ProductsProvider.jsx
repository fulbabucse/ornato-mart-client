import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const initialState = 1;
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    } else if (action.type === "Decrement") {
      return state - 1;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const productInfo = {
    state,
    dispatch,
  };
  return (
    <ProductsContext.Provider value={productInfo}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
