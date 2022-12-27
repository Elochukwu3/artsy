import React from "react";

const Notice = ({upcoming, bgColor, caption, notify, image}) => {
  return (
    <div className="flex justify-center bg-white">
      <div className="flex gap-5 my-10 space-x-10 justify-center max-md:flex-col max-md:items-center max-md:relative">
        <div className="w-[60%] relative h-fit max-md:w-full">
          <img src={image} className="w-full h-[50vh] max-md:h-[40vh]"/>
          <div className="absolute z-40 top-[60%] w-full grid grid-cols-1 justify-center max-md:top-[70%] max-sm:top-[55%]">
            <div
              className="text-white w-[90%] bg-[#f5f4f43d] mx-auto h-auto py-2 inline-block 
                px-6 rounded-[8px] border-none  "
            >
              <p className="pl-3">Time remaining</p>
              <div className="flex items-center gap-5 w-full justify-between">
                <p className="pl-3 text-[1.6em] font-medium max-md:text-[19px] max-sm:text-[17px]">
                  6hrs: 40mins: 20s
                </p>
                <p className="bg-[#4693ed] px-3 h-fit w-auto rounded-lg cursor-pointer">
                  join
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 satoshi">
          <button  style={{background: bgColor}} className={`uppercase  rounded-md px-3 w-[160px] py-2 text-white  max-md:absolute max-md:top-4 max-md:right-4 max-md:text-[16px] max-md:py-1 max-md:text-[14px]`}>{upcoming}</button>
          <p>November 21 at 11 am WAT</p>
          <h1 className="capitalize font-[700] text-[1.6em]">{caption}</h1>
          <div className="w-[70%] max-md:w-full ">Biggest event in Lago right now, first 100 streamers will win free tickets and lots more, click the notification for reminder</div>
          <h2>
            <span>Creator:</span> <span className="text-[#4693ed]">Aliya Minat</span>
          </h2>
          <p className="text-[#4693ed] underline cursor-pointer capitalize">{notify}</p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
