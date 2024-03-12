import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/products/ProductList";
import AddProduct from "../pages/addProduct/AddProduct";
import EditProduct from "../pages/editProduct/EditProduct";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import RegistPage from "../pages/registr/RegistPage";
import LoginPage from "../pages/Login/LoginPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/register" element={<RegistPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
