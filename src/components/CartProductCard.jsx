import React from "react";
import macbook from "../assets/macbook.png";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function CartProductCard() {
  return (
    <div className="flex items-center py-4  bg-light--gray border-b-2 border-b-black">
      <img src={macbook} alt="macbook" className="w-1/6 h-24 mr-4 pl-1" />
      <div className="w-2/3">
        <h2 className="pb-8 text-2xl">Macbook Pro 13"</h2>
        <div className="flex flex-row items-center">
          <button>
            <AiOutlinePlusCircle className="h-6 w-6" />
          </button>
          <p className="mx-2">1</p>
          <button>
            <AiOutlineMinusCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end ml-7 ">
        <button>
          <FaTrashAlt className="h-6 w-6 mb-10" />
        </button>
        <h3 className="text-lg font-bold">40000 TL</h3>
      </div>
    </div>
  );
}

export default CartProductCard;
