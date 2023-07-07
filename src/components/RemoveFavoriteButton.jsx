import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../context/context";

function RemoveFavoriteButton({ item }) {
  const { favoriteProducts, setFavoriteProducts } = useContext(MainContext);

  const removeFavorite = () => {
    const updatedFavorites = favoriteProducts.filter(
      (favoriteItem) => favoriteItem.id !== item.id
    );
    setFavoriteProducts(updatedFavorites);

    toast.error("Ürün favorilerden çıkarıldı", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button
        className="bg-orange py-1 px-1 rounded-full border-2 border-black w-fit"
        onClick={removeFavorite}
      >
        Favorilerden Çıkar
      </button>
      <ToastContainer />
    </div>
  );
}

export default RemoveFavoriteButton;
