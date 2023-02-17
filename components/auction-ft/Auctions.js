import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

import { toast } from "react-hot-toast";
const sliders = [
  "/sales-img/slid (1).png",
  "/sales-img/slid (2).png",
  "/sales-img/slid (3).png",
];

const Auctions = () => {
  const [resize, setResize] = useState(3);
  const updateWidth = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1000) {
      setResize(2);
    } else {
      setResize(3);
    }
    if (windowWidth <= 700) {
      setResize(1);
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: resize,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
  };
  return (
    <div className="flex justify-center">
      <div className="w-[85%] max-md:w-[80%]">
        <div>
          <span>Home/</span>
          <span>Auctions</span>
        </div>
        <h1 className="satoshi font-[500] text-[25px] leading-[31.1px] mt-10 max-md:text-center max-sm:text-[23px]">
          Here’s an overview of products actively on auction, explore!
        </h1>
        <div className="mt-10">
          <Slider {...settings} className="mt-10">
            <JoinLive image={sliders[0]} link={"/auction/auction1"} />
            <div>
              <JoinLive image={sliders[1]} link={"/auction/auctionLive2"} />
            </div>
            <div>
              <JoinLive image={sliders[2]} link={"/auction/autionLive"} />
            </div>
            <div>
              <JoinLive image={sliders[0]} link={"/auction/auction1"} />
            </div>
            <div>
              <JoinLive image={sliders[1]} link={"/auction/auctionLive2"} />
            </div>
            <div>
              <JoinLive image={sliders[2]} link={"/auction/autionLive"} />
            </div>
          </Slider>
        </div>
        <div className="mt-24">
          <h2 className="satoshi font-[700] text-[30px] max-sm:text-[24px]">
            Top bids from popular creators
          </h2>
        </div>
        <div className="w-full grid grid-cols-2 max-md:grid-cols-1 justify-center gap-10 max-md:gap-5">
          <Card
            header={" Out of the box"}
            creator={"Dan Murray"}
            date={"12/08/22"}
            highBid={"0.987 ETH"}
            currentBid={"0.987 ETH"}
            image={"/featured-img/light.png"}
          />
          <Card
            header={"Falling apart"}
            creator={"Jacob Banks"}
            date={"12/08/22"}
            highBid={"0.34 ETH"}
            currentBid={"0.787 ETH"}
            image={"/featured-img/chair.png"}
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Auctions;

export function JoinLive({ image, link }) {
  return (
    <div className="relative hover:scale-90 transition duration-[700ms] transition-scale">
      <Image src={image} width="400" height={"200"} alt="swipe" />
      <Link href={link}>
        <div className="absolute z-40 top-[30%] justify-center w-full flex items-center capitalize text-[1.3em] text-white gap-4">
          <p> join Live Stream</p>
          <p className="px-2 border border-[#ddd9] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
            <img
              src="./featured-img/arrow.png"
              className="w-11/12 brightness-0  invert"
              alt="icon"
            />
          </p>
        </div>
      </Link>

      <div className="absolute z-40 top-[70%] w-full grid grid-cols-1 justify-center">
        <span
          className="text-white w-[80%] bg-[#f5f4f43d] mx-auto h-[60px] inline-block 
                flex items-center justify-center rounded-[8px] border-none text-[30px] max-md:text-[20px]"
        >
          6hrs: 40mins: 20s
        </span>
      </div>
    </div>
  );
}



export function Card({ header, image, creator, date, highBid, currentBid }) {
  const placeBid = ()=>{
    toast(`Bid of ${currentBid}, successfully  placed`);
  }
  return (
    <div className="flex flex-col">
      <div className="min-h-[280px] max-md:w-full my-10 bg-white rounded-[16px] drop-shadow-[0px_0px_2px_rgba(0, 0, 0, 0.25)] border-[0.5px] border-[#00000040]">
        <div className="flex justify-end px-8 my-5">
          <span className="text-red-600 text-[2.2em]"> &#9829;</span>
        </div>
        <div>
          <img src={image} className="w-full" alt="bid-Img" />
        </div>
        <h3 className="font-[700] text-[30px] leadings-[64px] satoshi my-5 px-5">
          {header}
        </h3>
      </div>
      <ul className="space-y-6 satoshi ">
        <li className="flex gap-4 satoshi ">
          <span className="text-[#616161]">Creator : </span>{" "}
          <span className="font-[700]">{creator}</span>
        </li>
        <li className="flex gap-4">
          <span className="text-[#616161]">Date : </span>{" "}
          <span className="font-[700]">{date}</span>
        </li>
        <li className="flex gap-4">
          <span className="block text-[#616161] ">Highest bid : </span>{" "}
          <span className="block font-[700]">{highBid}</span>
        </li>
        <li className="flex items-center gap-5">
          <div className="space-y-4">
            {" "}
            <span className="text-[#616161] block">Current bid </span>{" "}
            <span className="block font-[700]">{currentBid}</span>
          </div>
          <button
            className="text-[25.78px] bg-[#3341C1] text-white w-[210px] py-2 hover:bg-[#051076] transition-background duration-[600ms]"
            onClick={placeBid}
          >
            Place bid
          </button>
        </li>
      </ul>
    </div>
  );
}
