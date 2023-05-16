import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";
import Home from "./pages/Home";
import ProfileDetail from "./pages/ProfileDetail";
import MainCategory from "./components/MainCategory";

function App() {
  const location = useLocation();
  const showHomeNavbar =
    location.pathname !== "/register" && location.pathname !== "/login";

  return (
    <>
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
        <Route path="/profile" element={<ProfileDetail />} />
      </Routes>
    </>
  );
}

export default App;
