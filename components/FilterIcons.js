import React, { useState } from "react";

export default function FilterIcons() {
  const [rotateArrow, setRotateArrow] = useState({
    category: false,
    price: false,
    artist: false,
  });
  const { category, price, artist } = rotateArrow;
  const dropDown = (e) => {
    setRotateArrow({
      ...rotateArrow,
      [e.target.parentElement.id]: !rotateArrow[e.target.parentElement.id],
    });
  };
  return (
    <div className="w-full bg-white">
      <div className="space-y-2">
        <div className=" w-fit grid grid-cols-2 items-end">
          <span>
            <img src="../icon/filter.png" alt="filter-img" className="scale-75"/>
          </span>
          <span className="capitalize font-semibold text-[30px]">Filter</span>
        </div>
        <img src="../icon/line.png" alt="line-img" />
      </div>
      <IconHeader
        caption={"By category"}
        dropDown={dropDown}
        state={category}
        stateId={"category"}
      />
      <ul className={category ? "space-y-3 h-full" : "h-0 overflow-hidden"}>
        <li className="space-x-2">
          <span>
            <input
              id="editorials"
              type={"checkbox"}
              name="editorials"
              className="h-4 w-4 accent-[#D9D9D9] bg-transparent text-red-500 cursor-pointer rounded"
            />
          </span>
          <span className="text-[20px] capitalize">Editorials</span>
        </li>
        <li className="space-x-2">
          <span>
            <input
              id="Fashion"
              type={"checkbox"}
              name="Fashion"
              className="h-4 w-4 accent-[#D9D9D9] bg-transparent text-red-500 cursor-pointer rounded"
            />
          </span>
          <span className="text-[20px] capitalize">Fashion</span>
        </li>
        <li className="space-x-2">
          <span>
            <input
              id="Optics"
              type={"checkbox"}
              name="Optics"
              className="h-4 w-4 accent-[#D9D9D9] bg-transparent text-red-500 cursor-pointer rounded"
            />
          </span>
          <span className="text-[20px] capitalize">Optics</span>
        </li>
        <li className="space-x-2">
          <span>
            <input
              id="Art_Museum"
              type={"checkbox"}
              name="Art_Museum"
              className="h-4 w-4 accent-[#D9D9D9] bg-transparent text-red-500 cursor-pointer rounded"
            />
          </span>
          <span className="text-[20px] capitalize">Art & Museum</span>
        </li>
        <li className="space-x-2">
          <span>
            <input
              id="Nature"
              type={"checkbox"}
              name="Nature"
              className="h-4 w-4 accent-[#D9D9D9] bg-transparent text-red-500 cursor-pointer rounded"
            />
          </span>
          <span className="text-[20px] capitalize">Nature</span>
        </li>
      </ul>

      <IconHeader
        caption={"By price"}
        dropDown={dropDown}
        state={price}
        stateId={"price"}
      />
      <ul className={price ? "space-y-4 h-full w-full" : "h-0 overflow-hidden"}>
        <li className="flex w-full">
          $
          <input
            type={"text"}
            placeholder="100.00"
            className="outline-none bg-white text-xl w-[50%] h-10 text-black drop-shadow-sm"
            readOnly
          />
          <input
            type={"text"}
            placeholder="100.00"
            className="outline-none bg-white text-xl w-[50%] h-10 drop-shadow-sm"
            readOnly
          />
        </li>
        <li>
          <input
            type={"range"}
            id="price-range"
            className="w-full bg-[#333333] appearance-none rounded-lg h-2"
          />
        </li>
      </ul>

      <IconHeader
        caption={"By artist"}
        dropDown={dropDown}
        state={artist}
        stateId={"artist"}
      />
      <ul
        className={artist ? "space-y-2 capitalize h-full w-full" : "h-0 overflow-hidden"}
      >
        <li className="cursor-pointer">Mikel Angelo</li>
        <li className="cursor-pointer">Augustus VCF</li>
        <li className="cursor-pointer">Monalisa Vien</li>
        <li className="cursor-pointer">Jhon Elo</li>
      </ul>
    </div>
  );
}

function IconHeader({ state, stateId, caption, dropDown }) {
  return (
    <div
      className="flex items-center justify-between my-8"
      onClick={dropDown}
      id={stateId}
    >
      <h2 className="text-[23px] font-semibold cursor-pointer">{caption}</h2>
      <img
        src="../icon/arrow-up.png"
        alt="arrow-img"
        className={
          !state ? "rotate-180 cursor-pointer" : "rotate-0 cursor-pointer"
        }
      />
    </div>
  );
}
