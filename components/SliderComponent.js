import Image from "next/image";
import React, { useEffect, useState } from "react";
import sliderItems from "../assets/slideObjects";

export default function SliderComponent() {
  return (
    <div className="flex justify-center mt-20">
      <EachSlider counter={0} />
      <EachSlider counter={1} />
      <EachSlider counter={2} />
      <EachSlider counter={4} />
    </div>
  );
}

function EachSlider({ counter }) {
  const [count, setCount] = useState(counter);

  useEffect(() => {
    const nextSlider = () => {
      if (count > sliderItems.length - 2) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    };
    const intervalFunc = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalFunc);
  }, [count]);

  const transLateVal = () => {
    return -(count * 100);
  };
  const styleSlider = () => {
    return {
      transform: `translateX(${transLateVal()}%)`,
      transition: "transform 1s ease-in-out",
      width: "100%",
    };
  };
  return (
    <>
      <ul className="m-0 p-0 w-[28%] flex justify-right overflow-x-hidden">
        {sliderItems && sliderItems.length
          ? sliderItems.map(({ img, alt }) => {
              return (
                <li
                  key={alt}
                  className="w-[90%] shrink-0 p-2  h-auto"
                  style={styleSlider()}
                >
                  <img src={img} alt={alt} />
                  {/* <Image/> */}
                </li>
              );
            })
          : ""}
      </ul>
    </>
  );
}
