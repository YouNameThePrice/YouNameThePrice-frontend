import React, { useContext } from "react";
import { MainContext } from "../context/context";

function AddCartButton({ product }) {
  const { cartProducts, setCartProducts } = useContext(MainContext);

  const addCart = (item) => {
    const isCart = cartProducts.some((cartItem) => cartItem.id === item.id);

    if (isCart) {
      alert("Bu ürün zaten sepete eklenmiş.");
      return;
    }
    const newCart = [...cartProducts, item];
    setCartProducts(newCart);
  };

  return (
    <button
      className="bg-light--gray py-2 px-4 rounded-full border-2 border-black w-48"
      onClick={() => addCart(product)}
    >
      Sepete Ekle
    </button>
  );
}

export default AddCartButton;
