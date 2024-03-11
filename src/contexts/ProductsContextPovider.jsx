import axios from "axios";
import React, { createContext, useState } from "react";

export const productsContext = createContext();

const ProductsContextPovider = ({ children }) => {
  const PRODUCTS_API = "http://localhost:8005/products";
  const [products, setProduct] = useState([]);

  // ! create
  function addProduct(newProduct) {
    axios.post(PRODUCTS_API, newProduct);
  }
  // !  read
  async function getProducts() {
    const { data } = await axios.get(PRODUCTS_API);
    setProduct(data);
  }

  return (
    <productsContext.Provider
      value={{
        products,
        addProduct,
        getProducts,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextPovider;
