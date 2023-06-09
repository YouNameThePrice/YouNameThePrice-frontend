import React, { useContext } from "react";
import { MainContext } from "../context/context";

function RemoveFavoriteButton({ item }) {
  const { favoriteProducts, setFavoriteProducts } = useContext(MainContext);

  const removeFavorite = () => {
    const updatedFavorites = favoriteProducts.filter(
      (favoriteItem) => favoriteItem.id !== item.id
    );
    setFavoriteProducts(updatedFavorites);
  };

  return (
    <button
      className="bg-orange py-2  rounded-full border-2 border-black w-48"
      onClick={removeFavorite}
    >
      Favorilerden Çıkar
    </button>
  );
}

export default RemoveFavoriteButton;
