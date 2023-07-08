import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        let response = await axios.get(
          `http://localhost:8080/Backend/backendProfileRequest.php`
        );
        let newResponse = response.toString().slice(1);
        let parsedData = JSON.parse(newResponse.data);
        setData(parsedData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-grow h-screen">
      {!data ? (
        <div>Loading...</div>
      ) : (
        <form name="profileInfo">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <label for="name">Ad</label>
              <input
                type="text"
                className="border border-black rounded-md ps-2"
                name="name"
                defaultValue={data.ad}
              />
            </div>
            <div className="flex flex-col">
              <label for="lastname">Soyad</label>
              <input
                type="text"
                className="border border-black rounded-md ps-2"
                name="lastname"
                defaultValue={data.soyad}
              />
            </div>
          </div>
          <div className="flex flex-col py-3">
            <label for="email">E-Posta</label>
            <input
              type="email"
              className="border border-black rounded-md ps-2"
              name="email"
              defaultValue={data.eposta}
            />
          </div>
          <div className="flex flex-col py-3">
            <label for="balance">Bakiye (TL)</label>
            <input
              type="number"
              className="border border-black rounded-md w-1/2 ps-2"
              name="balance"
              defaultValue={data.bakiye}
            />
          </div>
          <div className="flex flex-col py-3">
            <label for="address">Adres</label>
            <textarea
              className="border border-black rounded-md ps-2 p"
              name="address"
              defaultValue={data.adres}
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
      )}
    </div>
  );
}

export default ProfileInfo;
