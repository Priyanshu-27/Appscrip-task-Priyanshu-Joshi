import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import axios from "axios";
import hollowHeart from "../assets/heart.png";
import pinkHeart from "../assets/heart-p.png";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const toggleLike = (id) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [id]: !prevLikedProducts[id],
    }));
  };

  return (
    
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <div className="price-heart-container">
                {/* <p className="product-price">${product.price}</p> */}
                <p className="pricing-info">
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Sign in
                  </span>{" "}
                  or Create an account to see pricing
                </p>
                <button
                  className="heart-button"
                  onClick={() => toggleLike(product.id)}
                >
                  <img
                    src={likedProducts[product.id] ? pinkHeart : hollowHeart}
                    alt="Heart"
                    className="heart-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default ProductList;
