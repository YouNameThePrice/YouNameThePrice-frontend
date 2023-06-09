import React, { useContext, useState, useEffect } from "react";
import CartProductCard from "../components/CartProductCard";
import { MainContext } from "../context/context";

function Cart() {
  const { cartProducts } = useContext(MainContext);
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cartProducts.forEach((item) => {
        totalPrice += item.price * item.quantity;
      });
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [cartProducts]);

  return (
    <div className="flex justify-center  h-[83.2vh] px-7 pt-10">
      {/* Product Section */}
      <div className="w-2/3 p-8 overflow-y-scroll">
        <div className="space-y-4 ">
          {/* Product Card */}
          {cartProducts.map((item, id) => (
            <CartProductCard key={id} item={item} />
          ))}
        </div>
      </div>

      {/* Space */}
      <div className="w-12" />

      {/* Order Detail Section */}
      <div className="flex flex-col justify-center items-center w-1/3 h-2/5 bg-light--gray border border-black">
        <h2 className="text-2xl font-bold mb-4">Sipariş Detayı</h2>
        <hr className="border-black w-full mb-4" />
        <div className="p-4 mb-4">
          <h3 className="text-lg font-bold">
            Toplam Tutar :
            <span className="-text--turquoise"> {totalPrice} TL</span>
          </h3>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-xl w-1/4">
          Satın Al
        </button>
      </div>
    </div>
  );
}

export default Cart;
