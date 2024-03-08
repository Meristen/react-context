import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/products/ProductList";
import AddProduct from "../pages/addProduct/AddProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/add" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
