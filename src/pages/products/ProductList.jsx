import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductsContextPovider";
import MyCard from "../../ui/MyCard";
import "./products.css";
const ProductList = () => {
  const { products, getProducts } = useContext(productsContext);
  useEffect(() => {
    console.log(products);
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="products">
      {products.map((card) => (
        <MyCard key={card.id} data={card} />
      ))}
    </div>
  );
};

export default ProductList;
