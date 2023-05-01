import React from "react";
import logo from "../assets/logo.svg";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function HomeNavbar() {
  return (
    <nav className="bg-orange flex justify-between items-center py-2 px-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-4 flex-shrink-0">
          You Name The Price
        </h1>
        <img src={logo} alt="brand-logo" height={45} width={45} />
      </div>
      <div className="flex items-center relative">
        <input
          className="rounded-3xl py-1 px-3 w-96 pr-10"
          type="text"
          placeholder="Ürün ara"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <AiOutlineSearch size={25} />
        </div>
      </div>
      <div className="mr-4">
        <ul className="flex">
          <li className="mr-2">
            <AiOutlineHome size={35} />
          </li>
          <li className="mr-2">
            <AiOutlineShoppingCart size={35} />
          </li>
          <li>
            <AiOutlineUser size={35} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;
