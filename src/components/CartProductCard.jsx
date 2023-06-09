import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MainContext } from "../context/context";

function CartProductCard({ item }) {
  const { cartProducts, setCartProducts, quantity, setQuantity } =
    useContext(MainContext);

  const removeCartItem = () => {
    const updatedCartItems = cartProducts.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartProducts(updatedCartItems);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex items-center py-4  bg-light--gray border-b-2 border-b-black">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-1/6 h-24 mr-4 pl-1"
      />
      <div className="w-2/3">
        <h2 className="pb-8 text-2xl">{item.title}</h2>
        <div className="flex flex-row items-center">
          <button onClick={increaseQuantity}>
            <AiOutlinePlusCircle className="h-6 w-6" />
          </button>
          <p className="mx-2">{quantity}</p>
          <button onClick={decreaseQuantity}>
            <AiOutlineMinusCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end ml-7 ">
        <button onClick={removeCartItem}>
          <FaTrashAlt className="h-6 w-6 mb-10" />
        </button>
        <h3 className="text-lg font-bold">{quantity * item.price} TL</h3>
      </div>
    </div>
  );
}

export default CartProductCard;
