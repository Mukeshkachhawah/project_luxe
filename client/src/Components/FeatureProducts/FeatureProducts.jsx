import { useState, useEffect } from "react";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import SingleProductCart from "../SingleProductCart/SingleProductCart";
import prodcutApi from "../../api/productApi.js";

const FeatureProducts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(prodcutApi.RANDOM_3_PRODUCT);
        console.log("Fetching data from:", prodcutApi.RANDOM_3_PRODUCT);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        FEATURED PRODUCTS
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        paragraph
      >
        Bring called seed first of third give itself now ment
      </Typography>

      <Grid container spacing={4}>
        {error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : loading ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <CircularProgress />
          </Box>
        ) : (
          data?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SingleProductCart product={item} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default FeatureProducts;
