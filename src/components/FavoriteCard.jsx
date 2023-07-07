import React from "react";
import AddCartButton from "./AddCartButton";
import RemoveFavoriteButton from "./RemoveFavoriteButton";

function FavoriteCard({ item }) {
  return (
    <div className="flex justify-center sm:justify-normal sm:items-center sm:p-4  bg-light--gray border-b-2 border-b-black h-1/3">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-1/4 h-24 mr-4 pl-1 aspect-auto"
      />
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:pb-8 sm:text-2xl">{item?.title}</h2>
          <h3 className="sm:text-lg font-bold">{item.price} TL</h3>
        </div>
        <div className="flex items-center sm:ml-7 sm:pt-14 ">
          <AddCartButton product={item} />
          <div className="mx-1 sm:mx-2"></div>
          <RemoveFavoriteButton item={item} />
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
