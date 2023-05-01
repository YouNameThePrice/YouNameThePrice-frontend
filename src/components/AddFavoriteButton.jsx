import React from "react";
import { IoStarSharp } from "react-icons/io5";

function AddFavoriteButton() {
  return (
    <button className="ml-2">
      <IoStarSharp className="text-orange" size={50} />
    </button>
  );
}

export default AddFavoriteButton;
