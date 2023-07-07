import React, { useContext } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import FavoriteCard from "../components/FavoriteCard";
import { MainContext } from "../context/context";

function Favorite() {
  const { favoriteProducts } = useContext(MainContext);

  return (
    <div className="flex flex-row max-h-screen w-screen">
      <ProfileSidebar />

      {/* Favorite products container */}
      <div className="flex flex-col space-y-4 p-2 sm:p-8 overflow-y-scroll w-full">
        {/* FavoriteCard */}
        {favoriteProducts.map((item, id) => (
          <FavoriteCard key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
