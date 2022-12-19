
import React, {useState} from 'react';
import Image from 'next/image'



const sliderImg =[
  {
    img: '/sales-img/rect1 (1).png'
  },
  {
    img: '/sales-img/rect1 (2).png'
  },
  {
    img: '/sales-img/rect1 (3).png'
  },
  {
    img: '/sales-img/rect1 (3).png'
  }
  ,
  {
    img: '/sales-img/rect1 (3).png'
  }
]

const Auctions = () => {
    const [count, setCount] = useState(1);
    const nextSlider = () => {
        if (count > sliderImg.length - 3) {
          setCount(0);
        } else {
          setCount(count + 1);
        }
      };
    
      const transLateVal = () => {
        return -(count * 33.33);
      };
      const sliderStyle = () => {
        return {
          transform: `translateX(${transLateVal()}%)`,
          transition: "transform 1s ease-in-out",
          width: "100%",
        };
      };
  return (
    <div className="flex justify-center flex-col">
      <div className="w-[80%]">
        <div>
          <span>Home/</span>
          <span onClick={nextSlider}>Auctions</span>
        </div>
        <h1 className="satoshi font-[500] text-[25px] leading-[31.1px]">Here’s an overview of products actively on auction, explore!</h1>
        <div>
        <ul
          className="w-[100%] flex p-0 m-0 translate-x-0 gap-4"
          style={sliderStyle()}
          
        >
          {sliderImg.length > 0 &&
            sliderImg.map(({img}, index) => {
              return (
                <li
                  key={img + index}
                  className="w-[33.33%] border-2 border-[grey] shrink-0 h-[55vh] flex flex-col  items-center"
                >
                  <div className="text-3xl text-red-400 flex justify-end">
                  <span> &#9825;</span>
                  </div>
                 <div className=" w-[80%] h-[80%] relative">
                 <Image
                  src={img}
                  fill
                  objectFit={"cover"}
                  alt={"slider" +  index}
                  layout={"fill"}
                  
                  />
                 </div>
                </li>
              );
            })}
        </ul>

        </div>
      </div>
    </div>
  );
};

export default Auctions;
