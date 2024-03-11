import axios from "axios";
import React, { createContext, useState } from "react";

export const productsContext = createContext();

const ProductsContextPovider = ({ children }) => {
  const PRODUCTS_API = "http://localhost:8005/products";
  const [products, setProduct] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);

  // ! create
  function addProduct(newProduct) {
    axios.post(PRODUCTS_API, newProduct);
  }
  // !  read
  async function getProducts() {
    const { data } = await axios.get(PRODUCTS_API);
    setProduct(data);
  }
  // ! update
  async function getOneProduct(id) {
    const { data } = await axios.get(`${PRODUCTS_API}/${id}`);
    setEditedProduct(data);
  }
  async function updateProduct(id, editedObj) {
    await axios.patch(`${PRODUCTS_API}/${id}`, editedObj);
    getProducts();
  }
  return (
    <productsContext.Provider
      value={{
        products,
        editedProduct,
        getOneProduct,
        addProduct,
        getProducts,
        updateProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextPovider;
