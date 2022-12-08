import React from "react";

export default function NewsLetter() {
  return (
    <div>
      <section className="w-full mt-32">
        <div className="block mx-auto flex justify-center items-center
         flex-col w-[90%] border border-[black] py-10 space-y-6
         max-[890px]:w-full max-[890px]:px-3
         max-[890px]:flex-col max-[890px]:border-none max-[890px]:items-start
         ">
          <p className="font-normal uppercase text-[30px]">NewsLetter</p>
          <p
            style={{ fontFamily: "satoshi" }}
            className="text-[32px] text-[#333333]  max-[890px]:text-[21px]"
          >
            Subscribe to get daily updates on new drops & exciting deals{" "}
          </p>
          <form 
          className="flex w-full justify-center gap-4
          max-[890px]:justify-start
          max-[890px]:gap-1
          max-sm:block
          max-sm:space-y-4
          ">
            <input
              placeholder="Enter your Email"
              className="px-4 w-[45%] bg-white text-black placeholder:text-black 
              placeholder:uppercase outline-none border border-slate-500 

              max-sm:w-[90%]
              max-sm:h-9"
            />
            <button className="uppercase w-auto p-4 bg-black text-white max-sm:h-9 max-sm:py-0">
              Subscribe{" "}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
