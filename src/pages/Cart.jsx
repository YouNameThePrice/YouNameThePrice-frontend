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
    <div className="flex flex-col md:flex-row justify-center px-2 lg:px-7 pt-10 md:mb-[2rem]">
      {/* Product Section */}
      <div className="w-full md:w-3/5 lg:w-2/3">
        <div className="space-y-4 ">
          {/* Product Card */}
          {cartProducts.map((item, id) => (
            <CartProductCard key={id} item={item} />
          ))}
        </div>
      </div>

      {/* Space */}
      <div className="hidden md:block md:w-8 lg:w-12" />

      {/* Order Detail Section */}
      <div className="flex flex-col justify-center items-center space-y-3 py-2 md:py-2  my-4 sm:my-8 md:my-0 md:w-1/3 sm:h-2/5 bg-light--gray border border-black">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold lg:mb-4">
          Sipariş Detayı
        </h2>
        <hr className="border-black w-full mb-4" />
        <div className="p-4 mb-4">
          <h3 className="sm:text-lg font-bold">
            Toplam Tutar :
            <span className="-text--turquoise"> {totalPrice} TL</span>
          </h3>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-xl sm:w-1/4 md:w-3/6">
          Satın Al
        </button>
      </div>
    </div>
  );
}

export default Cart;
