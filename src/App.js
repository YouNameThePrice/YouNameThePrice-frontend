import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";
import MainCategory from "./components/MainCategory";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <HomeNavbar />
      <MainCategory />
      <ProductCard />
    </>
  );
}

export default App;

/* 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

*/
