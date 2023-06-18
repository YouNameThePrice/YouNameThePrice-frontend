import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function UserNavbar() {
  return (
    <nav className="flex items-center justify-between px-0 py-2 md:px-8 border-b-black border-b-2">
      <div className="flex items-center">
        <h1 className="text-sm sm:text-lg md:text-2xl font-bold md:mr-4 flex-shrink-0">
          You Name The Price
        </h1>
        <img
          src={logo}
          alt="brand-logo"
          height={45}
          width={45}
          className="hidden sm:block"
        />
      </div>
      <div className="flex items-center">
        <Link
          to="/register"
          className="border-2 border-black bg-light--gray p-2 text-sm whitespace-nowrap mr-4"
        >
          Üye Ol
        </Link>
        <Link
          to="/login"
          className="border-2 border-black bg-light--gray p-2 text-sm whitespace-nowrap"
        >
          Giriş Yap
        </Link>
      </div>
    </nav>
  );
}

export default UserNavbar;
