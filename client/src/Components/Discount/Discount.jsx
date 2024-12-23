import { Box, Typography, Button, Paper } from "@mui/material";

const Discount = () => {
  return (
    <Paper
      sx={{
        backgroundImage:
          'url("https://unsplash.com/photos/man-holding-black-suit-jacket-rnH5ITofDAM")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: 4,
        textAlign: "center",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          ALL MEN’S COLLECTION
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", my: 2 }}>
          50% OFF
        </Typography>
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          DISCOVER NOW
        </Button>
        <Typography variant="body1" sx={{ fontStyle: "italic" }}>
          Limited Time Offer
        </Typography>
      </Box>
    </Paper>
  );
};

export default Discount;
