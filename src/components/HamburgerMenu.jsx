import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function HamburgerMenu({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="relative">
      <button
        className="sm:hidden absolute top-0 left-0 z-10 cursor-pointer bg-orange"
        onClick={toggleMenu}
      >
        {showMenu ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
      </button>
      {showMenu && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-75">
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
