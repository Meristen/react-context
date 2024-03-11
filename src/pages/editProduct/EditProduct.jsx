import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContextPovider";

const EditProduct = () => {
  const { editedProduct, getOneProduct, updateProduct } =
    useContext(productsContext);
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: "",
    image: "",
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    editedProduct && setProduct(editedProduct);
  }, [editedProduct]);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }
  function onSubmit(e) {
    e.preventDefault();
    for (let key in product) {
      if (!product[key].toString().trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    updateProduct(id, product);
    setProduct({
      title: "",
      desc: "",
      price: "",
      image: "",
    });
    console.log(product);
    navigate("/");
  }
  return (
    <form onSubmit={onSubmit} className="form">
      <h2>Edit product</h2>
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
        SAVE CHANGES
      </Button>
    </form>
  );
};

export default EditProduct;
