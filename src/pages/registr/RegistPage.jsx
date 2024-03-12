import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegistPage = () => {
  // const { registerUsers } = useContext(productsContext);
  // const [users, setUsers] = useState({
  //   title: "",
  //   desc: "",
  //   price: "",
  //   image: "",
  // });

  const navigate = useNavigate();

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setUsers({ ...users, [name]: value });
  // }
  // function onSubmit(e) {
  //   e.preventDefault();
  //   for (let key in users) {
  //     if (!users[key].trim()) {
  //       alert("some inputs are empty");
  //       return;
  //     }
  //   }
  //   registerUsers(users);
  //   setUsers({
  //     title: "",
  //     desc: "",
  //     price: "",
  //     image: "",
  //   });
  //   console.log(users);
  //   navigate("/");
  // }
  return (
    <form className="form">
      <h2>Register</h2>
      <TextField
        id="standard-basic"
        name="title"
        // value={product.title}
        // onChange={handleChange}
        label="Name"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        name="desc"
        // value={product.desc}
        // onChange={handleChange}
        label="GMail..."
        variant="standard"
      />
      <TextField
        type="number"
        id="standard-basic"
        name="price"
        // value={product.price}
        // onChange={handleChange}
        label="Password"
        variant="standard"
      />
      <TextField
        type="url"
        id="standard-basic"
        name="image"
        // value={product.image}
        // onChange={handleChange}
        label="Image url..."
        variant="standard"
      />
      <Button
        type="submit"
        sx={{ margin: " 10px auto" }}
        className="add-btn"
        variant="outlined"
      >
        Register
      </Button>
    </form>
  );
};

export default RegistPage;
