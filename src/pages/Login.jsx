import React from "react";
import UserNavbar from "../components/UserNavbar";

function Login() {
  return (
    <div className="bg-orange min-h-screen h-auto w-full">
      <UserNavbar />

      <div className="flex items-center justify-center h-screen w-full">
        <div className="flex flex-col items-center bg-light--gray border-2 border-black sm:w-4/5 md:w-1/2 px-10 py-6 md:px-20 md:py-12 ">
          <h2 className="mb-8 font-bold text-2xl">Giriş Yap</h2>
          <form
            className="flex flex-col items-center sm:w-auto md:w-96 sm:px-2 md:px-2"
            name="loginForm"
            id="loginForm"
          >
            <input
              type="email"
              placeholder="E-posta"
              className="py-2 px-3 my-2 w-full"
              name="email"
            />
            <input
              type="password"
              placeholder="Şifre"
              className=" py-2 px-3 my-2 w-full"
              name="password"
            />
            <button
              type="submit"
              className="bg-orange text-white rounded-md py-2 px-6 mt-6"
              name="loginSubmit"
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
