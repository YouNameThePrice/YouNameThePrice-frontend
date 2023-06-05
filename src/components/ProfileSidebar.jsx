import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function ProfileSidebar() {
  return (
    <div className="w-64 flex-none overflow-y-auto border-r border-r-slate-400 text-center bg-light--gray">
      <div className="text-3xl font-bold px-4 py-4">Hesabım</div>
      <div className="border-b border-black my-4" />
      <div className="px-4 py-2 text-gray-700 hover:bg-gray-400 hover:text-white">
        <Link to="/profile">Üyelik Bilgilerim</Link>
      </div>
      <div className="px-4 py-2 text-gray-700 hover:bg-gray-400 hover:text-white">
        <Link to="/favorite">Favorilerim</Link>
      </div>
      <div className="flex justify-center items-center px-4 py-2 text-gray-700 hover:bg-gray-400 hover:text-white border-t border-black my-4 ">
        <button className="flex items-center">
          <RiLogoutBoxLine className="mr-2" size={35} />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default ProfileSidebar;
