import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../json/data.json";
import AddCartButton from "../components/AddCartButton";
import AddFavoriteButton from "../components/AddFavoriteButton";

function ProductDetail() {
  const { title } = useParams();
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    setDetailData(data.filter((item) => item.title === `${title}`));
  }, [title]);

  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center min-h-fit py-2">
      <div className="border border-slate-400 sm:rounded-2xl bg-light--gray px-2 py-4 my-auto md:h-3/5 md:w-4/6 md:p-10 ">
        {detailData.map((item, index) => {
          const splitDetail = item.detail?.split(",");
          return (
            <div key={index} className="flex flex-col md:flex-row max-h-fit">
              <div className="h-1/2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  height={250}
                  width={250}
                  className="md:max-h-full w-1/2 mx-auto sm:h-[250] sm:w-[250]"
                />
              </div>
              <div className="hidden sm:block sm:w-12" />
              <div className=" sm:flex sm:flex-col">
                <h1 className="text-center text-xl sm:text-2xl font-bold">
                  {item.title}
                </h1>
                <hr className="border-black w-full mb-4 mt-2" />

                <ul className="h-56">
                  {splitDetail.map((itemDetail) => (
                    <li className="mt-2">{itemDetail}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-evenly">
                  <div className="flex items-end">
                    <p className="font-bold text-lg md:text-3xl ">
                      {item.price} TL
                    </p>
                  </div>
                  {/* <div className="hidden md:block w-24" /> */}
                  <AddCartButton product={item} />
                  <AddFavoriteButton product={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetail;
