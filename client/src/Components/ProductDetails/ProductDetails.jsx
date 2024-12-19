import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // Initialize state to store the selected product

  const getApiData = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      console.log(data.products);

      // Find the product by ID
      const filteredProduct = data.products.find(
        (product) => product.id === parseInt(id)
      );
      console.log("Filtered Product:", filteredProduct);

      setProduct(filteredProduct); // Update state with the selected product
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getApiData(); // Fetch data when the component mounts or ID changes
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>; // Show loading text while the product is being fetched
  }

  return (
    <>
      <div className="main">
        <div className="main1">
          <div className="main11">
            <img src={product.productImg} alt={product.productName} />
          </div>
        </div>
        <div className="main1">
          <div className="innermain1">
            <h2>{product.name}</h2>
            <br />
            <h2 style={{ color: "lightgreen" }}>${product.new_price}</h2>
            <br />
            <div className="innermain2">
              <div className="innermain22">
                <p>Category</p>
                <br />
                <p>Availability</p>
                <br />
                <div className="innermain23">
                  <p>: {product.category}</p>
                  <br />
                  <p>: {product.availability ? "In stock" : "Out of stock"}</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="line1">
              <p>{product.description}</p>
              <br />
              <br />
              <br />
            </div>
            <div className="quantity">
              <label htmlFor="quantity" style={{ color: "rgb(58, 57, 57)" }}>
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="100"
                defaultValue="1" // defaultValue used to avoid controlled input warning
              />
              <br />
              <br />
              <br />
            </div>
            <div className="cart">
              <div className="s1">
                <button type="submit">Add to Cart</button>
              </div>
              <div className="s2">
                <i className="fa-solid fa-diamond"></i>
              </div>
              <div className="s2">
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
