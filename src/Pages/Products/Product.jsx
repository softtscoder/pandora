import React from "react";
import { Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import "./Products.css";
import { Link } from "react-router-dom";

const Product = ({ selectedProduct }) => {
  // return every product card
  return (
    <Col xs={12} md={4}>
      <Card sx={{ minWidth: "100%" }}>
        <CardActionArea>
          <CardMedia component='img' image={selectedProduct.image} alt='jewelry' />
          <CardContent>
            <p className='product-title'>{selectedProduct.title}</p>
            <p className='product-vendor'>{selectedProduct.vendor}</p>
            <Rating name='read-only' value={selectedProduct.rating} readOnly />
          </CardContent>
        </CardActionArea>
        <CardActions className='d-flex justify-content-between'>
          <p className='product-price'>${selectedProduct.price}</p>
          <Link to={`/product/${selectedProduct._id}`}>
            <Button variant='contained'>Order Now</Button>
          </Link>
        </CardActions>
      </Card>
    </Col>
  );
};

export default Product;
