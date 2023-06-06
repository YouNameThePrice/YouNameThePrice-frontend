import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import FavoriteCard from "../components/FavoriteCard";

function Favorite() {
  return (
    <div className="flex flex-row  h-[83.2vh] max-h-screen">
      <ProfileSidebar />

      {/* Favorite products container */}
      <div className="flex flex-col space-y-4 p-8 overflow-y-scroll w-full">
        {/* FavoriteCard */}
        <FavoriteCard />
      </div>
    </div>
  );
}

export default Favorite;
