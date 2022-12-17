import React, { useState } from "react";

const ShoppingBtn = ({ setSlideView }) => {
  const [activeButton, setSlActiveButton] = useState("");

  const shoppingHandler = (e) => {
    setSlideView(true);
    setSlActiveButton(e.target.id);
  };

  const shoppingDetailHandler = (e) => {
    setSlideView(false);
    setSlActiveButton(e.target.id);
  };
  return (
    <div className="flex justify-center my-6 py-5 border-b-[3px] border-[#f2f2f2]">
      <div className="grid grid-cols-3 space-x-10 text-xl capitalize">
        <button
          className={
            activeButton === "btn_1"
              ? "border-none bg-[#f2f2f2]"
              : "border-none bg-none"
          }
          onClick={shoppingDetailHandler}
          id="btn_1"
        >
          Shopping Cart
        </button>
        <button
          className={
            activeButton === "btn_2"
              ? "border-none bg-[#f2f2f2]"
              : "border-none bg-none"
          }
          id="btn_2"
          onClick={shoppingHandler}
        >
          Shopping details
        </button>
        <button
          className={
            activeButton === "btn_3"
              ? "border-none bg-[#f2f2f2]"
              : "border-none bg-none"
          }
          id="btn_3"
        >
          Payment details
        </button>
      </div>
    </div>
  );
};

export default ShoppingBtn;
