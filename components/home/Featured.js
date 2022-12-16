import Link from "next/link";
import React from "react";
import FeaturedText from "./FeaturedText";

export default function Featured() {
  return (
    <div className="px-20 max-lg:px-8 max-sm:px-6 my-20 ">
      <section>
        <div className="w-full my-7">
          <h2 className="py-5 font-bold text-2xl">Featured products</h2>
          <hr className=" border-[grey] w-4/5" />
        </div>
        <div className="flex w-full items-center gap-6 my-10 max-lg:gap-4 max-md:flex-col  max-md:items-center  max-md:w-full relative">
          <>
            <FeaturedImage
              each_image={"/featured-img/feat-one.png"}
              headerText={"The Boolean Egyptian"}
              direct={"/market_place/editorials/Lawmakers"}
            />
          </>
          <div className="flex-1 w-full h-full">
            <FeaturedText
              headerText={"The Boolean Egyptian"}
              direct={"/market_place/editorials/Lawmakers"}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full my-7">
          {/* <h2 className="py-5 font-bold text-2xl">Featured products</h2> */}
          <hr className=" border-[grey] w-4/5" />
        </div>
        <div className="flex w-full items-center gap-6 my-10 max-lg:gap-4 max-md:flex-col-reverse max-md:flex-reverse max-md:items-center  max-md:w-full">
          <div className="flex-1 w-full h-full">
            <FeaturedText
              headerText={"are we there yet"}
              direct={"/market_place/editorials/Yet There"}
            />
          </div>
          <>
            <FeaturedImage
              each_image={"/featured-img/feat-two.png"}
              headerText={"are we there yet"}
              direct={"/market_place/editorials/Yet There"}
            />
          </>
        </div>
      </section>
      <section>
        <div className="w-full my-7">
          {/* <h2 className="py-5 font-bold text-2xl">Featured products</h2> */}
          <hr className=" border-[grey] w-4/5" />
        </div>
        <div className="flex w-full items-center gap-6 my-10 max-lg:gap-4 max-md:flex-col  max-md:items-center  max-md:w-full">
          <>
            <FeaturedImage
              each_image={"/featured-img/feat-three.png"}
              headerText={"oloibiri 1997"}
              direct={"/market_place/editorials/Oloibiri"}
            />
          </>
          <div className="flex-1 w-full h-full">
            <FeaturedText
              headerText={"oloibiri 1997"}
              direct={"/market_place/editorials/Oloibiri"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedImage({ each_image, headerText, direct }) {
  return (
    <div className="flex-1 relative group max-[500px]:pointer-events-none">
      <img src={each_image} alt="featured_one" className="w-11/12 h-56" />
      <div
        className="absolute
       inset-0 flex items-center justify-center w-11/12 gap-5
        bg-[#00000080] duration-500  scale-0 origin-center 
        group-hover:scale-100  max-[500px]:scale-100  max-[500px]:flex-col  max-[500px]:justify-start max-[500px]:space-y-8"
      >
        <p className="text-white  max-[500px]:hidden">View Products</p>
        <h2
          className={`capitalize   hidden max-[500px]:text-2xl max-[500px]:text-[white]  max-[500px]:block font-semibold max-[330px]:text-[20px] text-center `}
        >
          {headerText}
        </h2>
        <Link href={direct}>
          <p className="px-2 border border-[grey] w-10 h-10 flex items-center justify-center rounded-full">
            <img
              src="./featured-img/arrow.png"
              className="w-11/12  max-[500px]:brightness-0  max-[500px]:invert"
              alt=""
            />
          </p>
        </Link>
      </div>
    </div>
  );
}
