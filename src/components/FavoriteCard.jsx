import React from "react";
import AddCartButton from "./AddCartButton";
import RemoveFavoriteButton from "./RemoveFavoriteButton";

function FavoriteCard({ item }) {
  return (
    <div className="flex justify-center sm:justify-normal sm:items-center sm:p-4  bg-light--gray border-b-2 border-b-black h-fit">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-1/4 h-3/4 mr-4 pl-1 lg:w-2/5 lg:h-5/6"
      />
      <div className="flex flex-col ml-11">
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h2 className="text-xl sm:pb-0 sm:text-2xl lg:text-3xl">
            {item?.title}
          </h2>
          <h3 className="sm:text-lg font-bold">{item.price} TL</h3>
        </div>
        <div className="flex items-center sm:ml-0 sm:pt-6 ">
          <AddCartButton product={item} />
          <div className="mx-1 sm:mx-2"></div>
          <RemoveFavoriteButton item={item} />
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
