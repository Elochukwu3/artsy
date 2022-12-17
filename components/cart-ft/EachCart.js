import React from "react";
import Image from "next/image";
import { formatOperand } from "../../assets/numberConvert.js";

export default function EachCart({
  items,
  decrementCount,
  incrementCount,
  removeItem,
}) {
  
  const { name, id, img, price, count } = items;
  let total = ` ${count * price}.00`;
  return (
    <>
      <div className="flex h-[200px]  gap-4 max-sm:justify-between">
        <div className="block h-full py-4 w-[185px] relative">
          <Image src={img} alt={name} fill />
        </div>

        <ul className="block h-full py-4 space-y-5 text-[18px] capitalize">
          <li className="text-black font-semibold">{name}</li>
          <li className="text-[#9ca3af]">Clearh</li>
          <li className="text-[#9ca3af]">size: 200ft</li>
          <li className="flex gap-4 font-semibold">
            <span
              className="cursor-pointer text-[1.4em]"
              onClick={(e) => decrementCount(e, id)}
            >
              -
            </span>
            <span className="cursor-pointer text-[1.4em]">{count}</span>
            <span
              className="cursor-pointer text-[1.4em]"
              onClick={(e) => incrementCount(e, id)}
            >
              +
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-between py-4 items-center">
        <p
          className="rounded-full border border-grey-600 p-1 cursor-pointer"
          onClick={() => removeItem(items)}
        >
          <Image
            src="/featured-img/close.png"
            width={"18"}
            height="10"
            alt=""
          />
        </p>
        <p>${formatOperand(total)}</p>
      </div>
    </>
  );
}
