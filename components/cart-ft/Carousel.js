import sliderItems from "../assets/slideObjects";
import { useState} from "react";
import Image from "next/image";

const initials = {
  current: 0,
  storedAarray: sliderItems,
  direction: "",
  needTransition: false,
};

export default function Carousel() {
  const [sliders, setSliders] = useState(initials);

  function handleTransition() {
    if (sliders.direction === "next") {
      vaildNextSlider();
    }
  }

  function vaildNextSlider() {
    const { current, storedAarray } = sliders;
    let _current = current;
    _current -= 1;
    const _nums = [...storedAarray, ...storedAarray.slice(0, 1)].slice(-5);
    setSliders({
      ...sliders,
      current: _current,
      storedAarray: _nums,
      needTransition: false,
    });
  }

  const vaildPrevSlider = () => {
    const { current, storedAarray } = sliders;
    let _current = current;
    _current += 1;
    const _nums = [...storedAarray.slice(-1), ...storedAarray].slice(
      0,
      storedAarray.length - 1
    );
    setSliders({
      current: _current,
      storedAarray: _nums,
      needTransition: false,
    });
  };

  const nextHandler = () => {
    const { current, storedAarray } = sliders;
    let _current = current + 1;
    if (_current > storedAarray.length - 3) return;

    setSliders({
      ...sliders,
      current: _current,
      direction: "next",
      needTransition: true,
    });
  };

  const transLateVal = () => {
    return -(sliders.current * 33.333);
  };
  const sliderStyle = () => {
    if (sliders.needTransition) {
      return {
        transform: `translateX(${transLateVal()}%)`,
        transition: "transform 300ms ease-in-out",
      };
    }

    return {
      transform: `translateX(${transLateVal()}%)`,
    };
  };
  return (
    <div>
      <div className="w-full flex justify-center flex-col items-center">
        <ul
          className="w-[100%] flex p-0 m-0 translate-x-0 bg-[snow]"
          style={sliderStyle()}
          onTransitionEnd={handleTransition}
        >
          {sliders.storedAarray.length > 0 &&
            sliders.storedAarray.map(({ img, alt }, index) => {
              return (
                <li
                  key={alt + index}
                  className="w-[33.33%] border-2 border-[grey] shrink-0 p-10 relative"
                >
                <Image
                fill
                src={img}
                alt={alt} 
                />
                </li>
              );
            })}
        </ul>
        <div className="space-x-7">
          <button className="bg-[blue] px-5">Prev</button>
          <button className="bg-[blue] px-5" onClick={nextHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
