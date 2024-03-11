import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../contexts/ProductsContextPovider";

const MyCard = ({ data }) => {
  const { deleteProduct } = useContext(productsContext);
  //   console.log(deleteProduct, "deletePr");
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={data.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title:{data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Desc:{data.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price:{data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/edit/${data.id}`}>
          <Button size="small">Edit</Button>
        </Link>
        <Button
          onClick={() => deleteProduct(data.id)}
          color="error"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
