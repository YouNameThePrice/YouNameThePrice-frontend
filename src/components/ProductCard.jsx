import React from "react";
import AddCartButton from "./AddCartButton";
import AddFavoriteButton from "./AddFavoriteButton";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="w-64 max-w-xs rounded-lg border border-slate-900  mt-3 ml-8 h-fit">
      <Link to={`/${product.category}/${product.subCategory}/${product.title}`}>
        <img
          className="w-full p-2"
          src={product.imageUrl}
          alt={product.title}
        />
      </Link>
      <div className="px-3 py-2 border-y border-y-slate-700 flex flex-col items-center">
        <h3 className="text-lg mb-2 text-left">{product.title}</h3>
        <p className="font-bold text-xl">{product.price} TL</p>
      </div>
      <div className="px-4 py-2 space-x-1 sm:space-x-0 flex justify-center">
        <AddCartButton product={product} />
        <AddFavoriteButton product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
