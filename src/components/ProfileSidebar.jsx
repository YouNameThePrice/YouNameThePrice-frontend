import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function ProfileSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="hidden sm:block sm:w-36 md:w-64 flex-none overflow-y-auto border-r border-r-slate-400 text-center bg-light--gray">
      <div className="md:text-3xl font-bold px-4 py-4">Hesabım</div>
      <div className="border-b border-black my-4" />
      <div className="px-2 md:px-4 py-2 text-gray-700 hover:bg-gray-400 hover:text-white">
        <Link to="/profile">Üyelik Bilgilerim</Link>
      </div>
      <div className="px-4 py-2 text-gray-700 hover:bg-gray-400 hover:text-white">
        <Link to="/favorite">Favorilerim</Link>
      </div>
      <div className="flex justify-center items-center px-4 py-2 text-gray-700 hover:bg-gray-400 hover:text-white border-t border-black my-4 ">
        <button className="flex items-center" onClick={handleLogout}>
          <RiLogoutBoxLine className="mr-2" size={35} />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default ProfileSidebar;
