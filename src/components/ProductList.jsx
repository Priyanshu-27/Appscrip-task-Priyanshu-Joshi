import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import hollowHeart from "../assets/heart.png";
import pinkHeart from "../assets/heart-p.png";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        setProducts(data); // Display all products
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
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map(
          (product) =>
            product.images.length > 0 && (
              <div key={product.id} className="product-card">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <div className="price-heart-container">
                    <p className="pricing-info">
                      <span
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
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
                        src={
                          likedProducts[product.id] ? pinkHeart : hollowHeart
                        }
                        alt="Heart"
                        className="heart-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ProductList;
