import React, { useState } from "react";
import logo from "../assets/logo.svg";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";

function HomeNavbar() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const searchQuery = encodeURIComponent(searchText.trim());
    navigate(`/search?query=${searchQuery}`);
    setSearchText("");
  };

  return (
    <nav className="bg-orange w-screen flex justify-between items-center py-2 px-4">
      <div className="flex items-center">
        <h1 className="md:text-2xl font-bold mr-4 flex-shrink-0">
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
      <div className="hidden sm:flex items-center relative">
        <input
          className="rounded-3xl py-1 px-3 md:max-w-md lg:w-96 pr-10"
          type="text"
          placeholder="Ürün ara"
          value={searchText}
          onChange={handleInputChange}
        />
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={handleSearch}
        >
          <AiOutlineSearch size={25} />
        </div>
      </div>
      <div className="sm:mr-4">
        <ul className="flex">
          <li className="mr-2">
            <Link to="/">
              <AiOutlineHome size={35} />
            </Link>
          </li>
          <li className="mr-2">
            <Link to="/cart">
              <AiOutlineShoppingCart size={35} />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <AiOutlineUser size={35} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;
