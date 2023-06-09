import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";
import Home from "./pages/Home";
import ProfileDetail from "./pages/ProfileDetail";
import MainCategory from "./components/MainCategory";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import { MainContext } from "./context/context";
import product from "./json/data.json";

function App() {
  const location = useLocation();
  const showHomeNavbar =
    location.pathname !== "/register" && location.pathname !== "/login";

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  let [quantity, setQuantity] = useState(1);

  const data = {
    favoriteProducts,
    setFavoriteProducts,
    cartProducts,
    setCartProducts,
    product,
    quantity,
    setQuantity,
  };

  return (
    <MainContext.Provider value={data}>
      {showHomeNavbar && (
        <>
          <HomeNavbar />
          <MainCategory />
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
        <Route path="/:category/:subcategory" element={<Home />} />

        <Route path="/profile" element={<ProfileDetail />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
