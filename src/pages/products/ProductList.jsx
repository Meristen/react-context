import React, { useContext } from "react";
import { productsContext } from "../../contexts/ProductsContextPovider";

const ProductList = () => {
  const { products, getProducts } = useContext(productsContext);
  return <div>ProductList</div>;
};

export default ProductList;
