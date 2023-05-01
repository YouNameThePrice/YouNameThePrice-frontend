import React from "react";
import macbook from "../assets/macbook.png";
import AddCartButton from "./AddCartButton";
import AddFavoriteButton from "./AddFavoriteButton";

function ProductCard() {
  return (
    <div className="flex flex-wrap">
      <div className="w-64 max-w-xs rounded-lg border border-slate-900  mt-3 ml-8">
        <img className="w-full p-2" src={macbook} alt="product" />
        <div className="px-3 py-2 border-y border-y-slate-700 flex flex-col items-center">
          <h3 className="text-lg mb-2 overflow-clip text-left">
            Macbook PRO 13"
          </h3>
          <p className="font-bold text-xl ">40.000 TL</p>
        </div>
        <div className="px-4 py-2 flex justify-center">
          <AddCartButton />
          <AddFavoriteButton />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

/*
    mt-3 ve ml-8 stili daha sonra kaldırılacak
*/
