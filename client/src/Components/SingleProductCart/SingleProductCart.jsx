import React from "react";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  AddShoppingCart,
  Favorite,
  Visibility,
  ThumbUp,
} from "@mui/icons-material";

const SingleProductCart = ({ product }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        alt={product.name}
        height="250"
        image={product.productImg}
        sx={{ objectFit: "contain" }}
      />

      <CardContent sx={{ flex: 1 }}>
        {/* Product Title and Description */}
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.slice(0, 50)}...
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontWeight: "bold", marginTop: 1 }}
        >
          ₹{product.new_price}
        </Typography>
        {product.old_price && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            ₹{product.old_price}
          </Typography>
        )}
      </CardContent>

      {/* Action Buttons */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
      >
        <IconButton
          aria-label="view product"
          component={Link}
          to={`/productdetail/${product.id}`}
        >
          <Visibility color="action" />
        </IconButton>
        <IconButton aria-label="add to wishlist">
          <Favorite color="error" />
        </IconButton>
        <IconButton aria-label="add to cart">
          <AddShoppingCart color="primary" />
        </IconButton>
        <IconButton aria-label="thumbs up">
          <ThumbUp color="primary" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default SingleProductCart;
