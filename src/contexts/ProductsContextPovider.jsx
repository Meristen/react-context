import axios from "axios";
import React, { createContext } from "react";

export const productsContext = createContext();

const ProductsContextPovider = ({ children }) => {
  const PRODUCTS_API = "http://localhost:8005/products";
  function addProduct(newProduct) {
    axios.post(PRODUCTS_API, newProduct);
  }
  return (
    <productsContext.Provider
      value={{
        addProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextPovider;
