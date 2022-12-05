import React from "react";
import FeaturedText from "./FeaturedText";

export default function Featured() {
  return (
    <div className="px-20 max-sm:px-6 my-20">
      <section>
        <div className="w-full my-7">
          <h2 className="py-5 font-bold text-2xl">Featured products</h2>
          <hr className=" border-[grey] w-4/5" />
        </div>
        <div className="flex w-full items-center gap-6 my-10">
          <>
            <FeaturedImage each_image={"/featured-img/feat-one.png"} />
          </>
          <div className="flex-1 w-full h-full">
            <FeaturedText />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full my-7">
          {/* <h2 className="py-5 font-bold text-2xl">Featured products</h2> */}
          <hr className=" border-[grey] w-4/5" />
        </div>
        <div className="flex w-full items-center gap-6 my-10">
          <div className="flex-1 w-full h-full">
            <FeaturedText />
          </div>
          <>
            <FeaturedImage each_image={"/featured-img/feat-two.png"} />
          </>
        </div>
      </section>
      <section>
        <div className="w-full my-7">
          {/* <h2 className="py-5 font-bold text-2xl">Featured products</h2> */}
          <hr className=" border-[grey] w-4/5" />
        </div>
        <div className="flex w-full items-center gap-6 my-10">
          <>
            <FeaturedImage each_image={"/featured-img/feat-three.png"} />
          </>
          <div className="flex-1 w-full h-full">
            <FeaturedText />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedImage({ each_image }) {
  return (
    <div className="flex-1 relative group">
      <img src={each_image} alt="featured_one" className="w-11/12 h-56" />
      <div className="absolute inset-0 flex items-center justify-center w-11/12 gap-5 bg-[#00000080] duration-500  scale-0 origin-center group-hover:scale-100">
        <p className="text-white">View Products</p>
        <p className="px-2 border border-[grey] w-10 h-10 flex items-center justify-center rounded-full">
          <img src="./featured-img/arrow.png" className="w-11/12" />
        </p>
      </div>
    </div>
  );
}
