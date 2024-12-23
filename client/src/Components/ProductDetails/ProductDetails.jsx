import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography, IconButton, Box } from "@mui/material";
import {
  Add,
  Remove,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

const ProductDetails = () => {
  const { product_id } = useParams(); // Get product_id from the URL params
  const [product, setProduct] = useState(null);
  const [sliderPos, setSliderPos] = useState(0);
  const [qty, setQty] = useState(1);

  const productPrice = 125;
  const totalSliderItems = 4;
  const [totalPrice, setTotalPrice] = useState(productPrice);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/admin/products/${product_id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProduct(data.data); // Set product data when fetched
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [product_id]);

  const slideToNext = () => {
    if (sliderPos < totalSliderItems - 1) {
      setSliderPos(sliderPos + 1);
    }
  };

  const slideToPrev = () => {
    if (sliderPos > 0) {
      setSliderPos(sliderPos - 1);
    }
  };

  const increaseProductQty = () => {
    setQty(qty + 1);
    setTotalPrice((qty + 1) * productPrice);
  };

  const decreaseProductQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      setTotalPrice((qty - 1) * productPrice);
    }
  };

  if (!product) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${sliderPos * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {[...Array(totalSliderItems)].map((_, index) => (
            <img
              key={index}
              src={product.productImg}
              alt={`Product Image ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </Box>

        <IconButton
          onClick={slideToPrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={slideToNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      <Box sx={{ padding: 2 }}>
        <Typography
          variant="subtitle1"
          color="green"
          sx={{ textTransform: "uppercase", fontWeight: 700 }}
        >
          {product.name}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, marginY: 2 }}>
          {product.name}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: 2 }}>
          {product.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            ₹{totalPrice}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "gray",
              marginLeft: "auto",
            }}
          >
            ₹{product.old_price}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <IconButton onClick={decreaseProductQty}>
            <Remove />
          </IconButton>
          <Typography variant="h6">{qty}</Typography>
          <IconButton onClick={increaseProductQty}>
            <Add />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          color="success"
          sx={{
            width: "10%",
            padding: "15px",
            fontWeight: 500,
            borderRadius: 2,
          }}
          startIcon={<ShoppingBag />}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
