import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import "./addProducts.css";
import { productsContext } from "../../contexts/ProductsContextPovider";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const { addProduct } = useContext(productsContext);
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }
  function onSubmit(e) {
    e.preventDefault();
    for (let key in product) {
      if (!product[key].trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    addProduct(product);
    setProduct({
      title: "",
      desc: "",
      price: "",
      image: "",
    });
    navigate("/");
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <h2>AddProduct</h2>
      <TextField
        id="standard-basic"
        name="title"
        value={product.title}
        onChange={handleChange}
        label="Title"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        name="desc"
        value={product.desc}
        onChange={handleChange}
        label="Description"
        variant="standard"
      />
      <TextField
        type="number"
        id="standard-basic"
        name="price"
        value={product.price}
        onChange={handleChange}
        label="Price"
        variant="standard"
      />
      <TextField
        type="url"
        id="standard-basic"
        name="image"
        value={product.image}
        onChange={handleChange}
        label="Image url"
        variant="standard"
      />
      <Button
        type="submit"
        sx={{ margin: " 10px auto" }}
        className="add-btn"
        variant="outlined"
      >
        Add product
      </Button>
    </form>
  );
};

export default AddProduct;
