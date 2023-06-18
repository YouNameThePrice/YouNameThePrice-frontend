import React from "react";
import UserNavbar from "../components/UserNavbar";

function Register() {
  return (
    <div className="bg-orange min-h-screen h-auto w-full">
      <UserNavbar />

      <div className="flex items-center justify-center h-screen w-full">
        <div className="flex flex-col items-center bg-light--gray px-3 py-8 border-2 border-black w-3/5 sm:w-4/5 md:w-1/2 md:px-20 md:py-12">
          <h2 className="mb-8 font-bold text-2xl">Hesap Oluştur</h2>
          <form
            className="flex flex-col items-center w-auto md:w-96 sm:px-2 md:px-2"
            name="registerForm"
          >
            <div class="flex flex-col sm:flex-row">
              <div class="flex-grow sm:mr-2">
                <input
                  type="text"
                  placeholder="Ad"
                  className="py-2 px-3 my-2 w-full"
                  name="name"
                />
              </div>
              <div class="flex-grow">
                <input
                  type="text"
                  placeholder="Soyad"
                  className="py-2 px-3 my-2 w-full"
                  name="lastname"
                />
              </div>
            </div>
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
            <input
              type="password"
              placeholder="Şifre (Tekrar)"
              className=" py-2 px-3 my-2 w-full"
              name="password"
            />
            <button
              type="submit"
              className="bg-orange text-white rounded-md py-2 px-6 mt-6"
              name="registerSubmit"
            >
              Üye Ol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
