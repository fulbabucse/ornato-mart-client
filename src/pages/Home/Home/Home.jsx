import React from "react";
import Banner from "../Banner/Banner";
import HomeFlashSale from "../Products/HomeFlashSale";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <HomeFlashSale />
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
