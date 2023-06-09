import React, { useContext } from "react";
import { IoStarSharp } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../context/context";

function AddFavoriteButton({ product }) {
  const { favoriteProducts, setFavoriteProducts } = useContext(MainContext);

  const addFavorite = (item) => {
    // Kontrol: Ürün daha önce favorilere eklenmiş mi?
    const isFavorite = favoriteProducts.some(
      (favoriteItem) => favoriteItem.id === item.id
    );

    if (isFavorite) {
      toast.error("Bu ürün zaten favorilere eklenmiş.", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const newFavorites = [...favoriteProducts, item];
    setFavoriteProducts(newFavorites);

    toast.success("Ürün favorilere eklendi!", {
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
    <>
      <button className="ml-2" onClick={() => addFavorite(product)}>
        <IoStarSharp className="text-orange" size={50} />
      </button>
      <ToastContainer />
    </>
  );
}

export default AddFavoriteButton;
