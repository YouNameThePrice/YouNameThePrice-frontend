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
    <div className="bg-white max-h-screen w-full h-[83.2vh] flex justify-center items-center">
      <div className="border border-slate-400 rounded-2xl flex flex-row bg-light--gray max-h-screen h-3/5 w-4/6 p-10 ">
        {detailData.map((item, index) => {
          const splitDetail = item.detail?.split(",");
          return (
            <div key={index} className="flex">
              <div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  height={250}
                  width={250}
                />
              </div>
              <div className="w-12" />
              <div className="flex flex-col">
                <h1 className="text-center text-3xl font-bold">{item.title}</h1>
                <hr className="border-black w-full mb-4 mt-2" />

                <ul className="h-56">
                  {splitDetail.map((itemDetail) => (
                    <li className="mt-2">{itemDetail}</li>
                  ))}
                </ul>
                <div className="flex ">
                  <div className="flex items-end">
                    <p className="font-bold text-3xl  ">{item.price} TL</p>
                  </div>
                  <div className="w-24" />
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
