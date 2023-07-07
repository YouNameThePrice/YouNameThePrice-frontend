import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../context/context";

function AddCartButton({ product }) {
  const { cartProducts, setCartProducts } = useContext(MainContext);

  const addCart = (item) => {
    const isCart = cartProducts.some((cartItem) => cartItem.id === item.id);

    if (isCart) {
      toast.error("Bu ürün zaten sepete eklenmiş.", {
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

    const newCart = [...cartProducts, item];
    setCartProducts(newCart);

    toast.success("Ürün sepete eklendi!", {
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
      <button
        className="bg-light--gray py-1 px-1 sm:px-4 rounded-full border-2 border-black sm:w-48"
        onClick={() => addCart(product)}
      >
        Sepete Ekle
      </button>
      <ToastContainer />
    </>
  );
}

export default AddCartButton;
