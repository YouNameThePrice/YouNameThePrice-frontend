import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Subcategory from "../components/Subcategory";
import { useLocation, useParams } from "react-router-dom";
import { MainContext } from "../context/context";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const location = useLocation();
  const showSubcategory = location.pathname !== "/";
  const { category, subcategory } = useParams();
  const { product } = useContext(MainContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setSelectedCategory(category);
    setSelectedSubCategory(subcategory);

    if (location.search) {
      const searchQuery = decodeURIComponent(location.search.split("=")[1]);
      const filtered = product.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      const filtered = product.filter((product) => {
        if (selectedSubCategory) {
          return (
            product.subCategory.toLowerCase() ===
            selectedSubCategory.toLowerCase()
          );
        } else if (selectedCategory) {
          return (
            product.category.toLowerCase() === selectedCategory.toLowerCase()
          );
        }
        return true;
      });
      setFilteredProducts(filtered);
    }
  }, [
    category,
    subcategory,
    location.search,
    selectedCategory,
    selectedSubCategory,
    product,
  ]);

  return (
    <div className="flex w-screen">
      {showSubcategory && <Subcategory />}

      <div className="flex flex-wrap w-full overflow-y-scroll">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
