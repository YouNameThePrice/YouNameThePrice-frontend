import React from "react";
import ProductCard from "../components/ProductCard";
import Subcategory from "../components/Subcategory";
import { useLocation } from "react-router-dom";
import product from "../json/data.json";

function Home() {
  const location = useLocation();
  const showSubcategory = location.pathname !== "/";

  return (
    <div className="flex h-[83.2vh] max-h-screen">
      {showSubcategory && <Subcategory />}

      <div className="flex flex-wrap overflow-y-scroll">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
