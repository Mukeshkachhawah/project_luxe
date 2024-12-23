import React, { useState } from "react";
import MenProducts from "./../MenProducts/MenProducts";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  Slider,
  Select,
  MenuItem,
} from "@mui/material";

const filterOptions = {
  Category: ["Men", "Women", "Kids", "Accessories", "Footwear"],
  Brand: ["Nike", "Adidas", "Puma", "Levi's", "Zara", "H&M"],
};

const Section = ({
  title,
  pagePath,
  handleFilter,
  handleSort,
  handlePriceFilter,
  CardComponent,
}) => {
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range

  const handleCheckboxChange = (filterKey, option) => {
    setFilters((prevFilters) => {
      const existingOptions = prevFilters[filterKey] || [];
      const updatedOptions = existingOptions.includes(option)
        ? existingOptions.filter((item) => item !== option)
        : [...existingOptions, option];

      return { ...prevFilters, [filterKey]: updatedOptions };
    });

    handleFilter(filterKey, option);
  };

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);
    handleSort(selectedSort);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    handlePriceFilter(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", padding: 2 }}>
      {/* Sidebar Filters */}
      <Box
        sx={{
          width: 300, // Fixed width for filter sidebar
          padding: 2,
          borderRight: "1px solid #ccc",
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "12px", marginBottom: 4, color: "text.secondary" }}
        >
          {pagePath}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "16px", marginBottom: 2 }}
        >
          Filters
        </Typography>
        {Object.keys(filterOptions).map((filterKey) => (
          <Box key={filterKey} sx={{ marginBottom: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", fontSize: "14px" }}
            >
              {filterKey}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {filterOptions[filterKey].map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={
                        filters[filterKey] &&
                        filters[filterKey].includes(option)
                      }
                      onChange={() => handleCheckboxChange(filterKey, option)}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "14px" }}>{option}</Typography>
                  }
                />
              ))}
            </Box>
            <Divider sx={{ marginTop: 2 }} />
          </Box>
        ))}
      </Box>

      {/* Main Section for Sorting and Products */}
      <Box sx={{ flex: 1, paddingLeft: 4 }}>
        <Box
          sx={{
            marginBottom: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            All Products
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "medium",
                fontSize: "14px",
                color: "text.secondary",
              }}
            >
              SORT BY
            </Typography>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              displayEmpty
              sx={{
                minWidth: 120,
                height: "40px",
                fontSize: "12px",
                fontStyle: "normal",
                border: "1px solid black",
                boxShadow: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiSelect-select": {
                  backgroundColor: "transparent",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <MenuItem value="">Relevance</MenuItem>
              <MenuItem value="low-to-high" sx={{ fontSize: "12px" }}>
                Price: Low to High
              </MenuItem>
              <MenuItem value="high-to-low" sx={{ fontSize: "12px" }}>
                Price: High to Low
              </MenuItem>
            </Select>
          </Box>
        </Box>
        {/* Render MenProducts Component here */}
        {CardComponent}
      </Box>
    </Box>
  );
};

export default Section;
