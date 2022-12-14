import Image from 'next/image'
import React, {useState} from 'react'



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

export  function CartSlider() {
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
    <section className='w-full flex justify-center'>
      <div className='block w-[80%] overflow-x-hidden bg-grey-600'>
        <section className='flex justify-between items-center my-20'>
        <div className='text-[32px] font-medium'>Explore more from this collection</div>
        <div className='grid grid-cols-2 gap-4'>
           <p className='border border-gray-400 w-auto h-auto grid items-center place-center py-5 px-4 rounded-full'>
           <Image src={'/icon/arrow-up.png'} width="20" height={"10"} className="-rotate-90" alt=""/>
           </p>
            <p className='border border-gray-400 w-auto h-auto grid items-center place-center py-5 px-4 rounded-full' onClick={nextSlider}>
            <Image src={'/icon/arrow-up.png'} width="20" height={"10"} className="rotate-90" alt=""/>
            </p>
        </div>
        </section>
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
    </section>
  )
}
