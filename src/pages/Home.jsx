import React from "react";
import ProductCard from "../components/ProductCard";
import Subcategory from "../components/Subcategory";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const showSubcategory = location.pathname !== "/";

  return (
    <div className="flex h-[83.2vh] max-h-screen">
      {showSubcategory && <Subcategory />}

      <div className="flex flex-wrap overflow-y-scroll">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
