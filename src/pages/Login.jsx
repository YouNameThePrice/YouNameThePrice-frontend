import React from "react";
import UserNavbar from "../components/UserNavbar";

function Login() {
  return (
    <div className="bg-orange min-h-screen">
      <UserNavbar />

      <div className="flex items-center justify-center h-screen ">
        <div className="flex flex-col items-center bg-light--gray px-20 py-12 border-2 border-black">
          <h2 className="mb-8 font-bold text-2xl">Giriş Yap</h2>
          <form className="flex flex-col items-center w-96">
            <input
              type="email"
              placeholder="E-posta"
              className="py-2 px-3 my-2 w-full"
            />
            <input
              type="password"
              placeholder="Şifre"
              className=" py-2 px-3 my-2 w-full"
            />
            <button
              type="submit"
              className="bg-orange text-white rounded-md py-2 px-6 mt-6 "
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
