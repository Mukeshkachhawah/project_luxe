import { useEffect, useState } from "react";
import { Grid, Box, Typography, CircularProgress, Alert } from "@mui/material";
import SingleProductCart from "../SingleProductCart/SingleProductCart";

const InspiredProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:8000/api/admin/products/random_8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Inspired Products
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {products.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SingleProductCart product={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default InspiredProduct;
