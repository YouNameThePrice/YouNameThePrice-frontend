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
        className="sm:hidden absolute top-0 left-0 z-10 cursor-pointer"
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

/* 
  return (
    <>
      {showMenu ? (
        <button
          className="text-4xl items-center cursor-pointer absolute left-0 top-0 z-50"
          onClick={toggleMenu}
        >
          <AiOutlineClose size={35} />
        </button>
      ) : (
        <button
          className="text-4xl items-center cursor-pointer absolute left-0 top-0 z-50"
          onClick={toggleMenu}
        >
          <AiOutlineMenu size={35} />
        </button>
      )}
      <div
        className={`absolute top-0 right-0 w-[90vw] bg-blue-600  p-10 pl-20 text-white h-full ease-in-out duration-300 ${
          showMenu ? "translate-x-0 " : "translate-x-full"
        }`}
      ></div>
    </>
  );
}

export default HamburgerMenu;

*/
