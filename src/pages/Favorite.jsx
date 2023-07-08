import React, { useContext } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import FavoriteCard from "../components/FavoriteCard";
import { MainContext } from "../context/context";
import HamburgerMenu from "../components/HamburgerMenu";

function Favorite() {
  const { favoriteProducts } = useContext(MainContext);

  return (
    <div className="flex flex-row max-h-screen w-screen">
      {window.innerWidth < 640 ? (
        <HamburgerMenu>
          <ProfileSidebar />
        </HamburgerMenu>
      ) : (
        <ProfileSidebar />
      )}

      {/* Favorite products container */}
      <div className="flex flex-col space-y-4 p-2 sm:p-4 overflow-y-scroll w-full">
        {/* FavoriteCard */}
        {favoriteProducts.map((item, id) => (
          <FavoriteCard key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
