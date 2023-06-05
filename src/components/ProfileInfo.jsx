import React from "react";

function ProfileInfo() {
  return (
    <div className="flex justify-center items-center flex-grow">
      <form name="profileInfo">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col">
            <label for="name">Ad</label>
            <input
              type="text"
              className="border border-black rounded-md ps-2"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label for="lastname">Soyad</label>
            <input
              type="text"
              className="border border-black rounded-md ps-2"
              name="lastname"
            />
          </div>
        </div>
        <div className="flex flex-col py-3">
          <label for="email">E-Posta</label>
          <input
            type="email"
            className="border border-black rounded-md ps-2"
            name="email"
          />
        </div>
        <div className="flex flex-col py-3">
          <label for="balance">Bakiye (TL)</label>
          <input
            type="number"
            className="border border-black rounded-md w-1/2 ps-2"
            name="balance"
          />
        </div>
        <div className="flex flex-col py-3">
          <label for="address">Adres</label>
          <textarea
            className="border border-black rounded-md ps-2 p"
            name="address"
          />
        </div>
        <div className="flex gap-7 flex-shrink-0">
          <button
            type="submit"
            className="border border-black bg-button--green rounded-xl p-3 text-white"
            name="profileSubmit"
          >
            Değişiklikleri Kaydet
          </button>
          <button
            type="reset"
            className="border border-black bg-button--red rounded-xl p-4 text-white"
            name="profileReset"
          >
            Vazgeç
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileInfo;
