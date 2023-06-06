import React from "react";
import AddCartButton from "./AddCartButton";
import macbook from "../assets/macbook.png";
import RemoveFavoriteButton from "./RemoveFavoriteButton";

function FavoriteCard() {
  return (
    <div className="flex items-center p-4  bg-light--gray border-b-2 border-b-black h-1/4">
      <img src={macbook} alt="macbook" className="w-1/6 h-24 mr-4 pl-1" />
      <div className="w-2/3">
        <h2 className="pb-8 text-2xl">Macbook Pro 13"</h2>
        <h3 className="text-lg font-bold">40000 TL</h3>
      </div>
      <div className="flex flex-row justify-end items-end ml-7 pt-14 ">
        <AddCartButton />
        <div className="mx-2"></div>
        <RemoveFavoriteButton />
      </div>
    </div>
  );
}

export default FavoriteCard;
