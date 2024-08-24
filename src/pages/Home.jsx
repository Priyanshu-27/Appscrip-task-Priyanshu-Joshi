import React from "react";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FilterAndRecommend from "../components/FilterAndRecommend";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <FilterAndRecommend />

      <div className="content">
        <Sidebar />
       
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
