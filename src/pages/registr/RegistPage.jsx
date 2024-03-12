import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistPage = () => {
  // const { registerUsers } = useContext(Context);
  const [user, setUser] = useState({
    user: "",
    email: "",
    password: "",
    image: "",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // function onSubmit(e) {
  //   e.preventDefault();
  //   for (let key in users) {
  //     if (!users[key].trim()) {
  //       alert("some inputs are empty");
  //       return;
  //     }
  //   }
  //   registerUser(user);
  //   setUser({
  //     user: "",
  //     email: "",
  //     password: "",
  //     image: "",
  //   });
  //   console.log(user);
  //   navigate("/");
  // }
  console.log(user);
  return (
    <form onSubmit={onsubmit} className="form">
      <h2>Register</h2>
      <TextField
        id="standard-basic"
        name="user"
        value={user.username}
        onChange={handleChange}
        label="UserName"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        name="email"
        value={user.email}
        onChange={handleChange}
        label="GMail..."
        variant="standard"
      />
      <TextField
        type="text"
        id="standard-basic"
        name="password"
        value={user.password}
        onChange={handleChange}
        label="Password"
        variant="standard"
      />
      <TextField
        type="url"
        id="standard-basic"
        name="image"
        value={user.image}
        onChange={handleChange}
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
