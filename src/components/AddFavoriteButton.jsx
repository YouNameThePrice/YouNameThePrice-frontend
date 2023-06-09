import React, { useContext } from "react";
import { IoStarSharp } from "react-icons/io5";
import { MainContext } from "../context/context";

function AddFavoriteButton({ product }) {
  const { favoriteProducts, setFavoriteProducts } = useContext(MainContext);

  const addFavorite = (item) => {
    // Kontrol: Ürün daha önce favorilere eklenmiş mi?
    const isFavorite = favoriteProducts.some(
      (favoriteItem) => favoriteItem.id === item.id
    );

    if (isFavorite) {
      alert("Bu ürün zaten favorilere eklenmiş.");
      return;
    }

    const newFavorites = [...favoriteProducts, item];
    setFavoriteProducts(newFavorites);
  };

  return (
    <button className="ml-2" onClick={() => addFavorite(product)}>
      <IoStarSharp className="text-orange" size={50} />
    </button>
  );
}

export default AddFavoriteButton;
