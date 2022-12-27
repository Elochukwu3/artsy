import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";

const liveAuctions = [
  { bid: "auction1" },
  { bid: "auctionLive2" },
  { bid: "autionLive" },
];

export const getStaticPaths = () => {
  const paths = liveAuctions.map((items) => {
    return {
      params: { bid: items.bid },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const pageUrl = context.params.bid;
  const filterdUrl = liveAuctions.filter((items) => {
    return items.bid === pageUrl;
  });
  return {
    props: { pages: filterdUrl },
  };
};

const Bid = ({ pages }) => {
  const [userInput, setUserInput] = useState("");
  const [newItem, setNewItem] = useState([]);

  const redirect = useRouter();
  const myElement = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      myElement.current.scrollIntoView({ behavior: "smooth" });
    };
    handleClick();
    // return () => handleClick();
  }, [newItem]);

  const submitForm = (e) => {
    e.preventDefault();
    if (userInput !== "") {
      setNewItem([...newItem, userInput]);
      setUserInput("");
    }
  };

  return (
   <>
   <div className="flex justify-center">
   <div className="w-[80%] text-xl py-10">
   <span className="text-left opacity-[.5] cursor-pointer" onClick={()=> redirect.push('/')}>Home</span>/
    <span onClick={()=> redirect.push('/auction')} className="opacity-[.5] cursor-pointer">Auction</span>/
    <span className="cursor-pointer">Live</span>
   </div>
   </div>
    <div className="flex justify-center w-full">
      
      <div className="w-[80%] grid grid-cols-2 max-md:grid-cols-1 relative max-md:w-[95%]">
        <div className="h-[100vh] w-[90%] relative max-md:w-full max-md:h-[80vh]">
          <Image fill src="/featured-img/liv.png" alt="big-bannerImg" />
          <div className="absolute inset-0 w-full flex flex-col justify-between py-10 text-white">
            <div className="flex w-full justify-between px-5">
              <p
                className="relative w-8 h-8 border border-white rounded-full "
                onClick={() => redirect.back(-1)}
              >
                <Image
                  fill
                  src="/featured-img/close.png"
                  alt="big-bannerImg"
                  className="invert brightness-1"
                />
              </p>
              <p className="bg-[#006CA2] w-fit px-5 rounded-[8px] uppercase">
                live
              </p>
            </div>
            <div className="flex w-full justify-center text-[35px] font-bold max-md:text-[20px] max-md:mt-[-250px]">
              <p>
                Current Bid <span>$4500</span>
              </p>
            </div>
            <div className="flex w-full pl-8 gap-3 text-[18px] font-[500] max-md:opacity-0">
              <p>Tag:</p>
              <p>Lost or Wither</p>
            </div>
          </div>
        </div>
        <div className="max-h-screen max-md:max-[80vh] overflow-hidden  border border-[#ddd] relative max-md:absolute max-md:top-0 z-index-30 w-full ">
          <div className="full-block">
            <div className="relative min-h-screen relative bottom-[0%] trans max-md:min-h-[80vh]">
              <ul className=" space-y-5 pl-12 py-5  absolute bottom-0 left-0 w-full bg-none overflow-auto max-md:max-h-[50vh] scroll-smooth max-md:bg-none max-md:pl-5">
                <Streamers
                  image={"/live-img/live.png"}
                  name={"James Kin"}
                  text={"hello guy"}
                />
                <Streamers
                  image={"/live-img/live2.png"}
                  name={"Salle Mane"}
                  text={"WFT guy!!!"}
                />
                <Streamers
                  image={"/live-img/live3.png"}
                  name={"Elliot Gha"}
                  text={"Good job Man"}
                />
                <Streamers
                  image={"/live-img/live4.png"}
                  name={"Bushc"}
                  text={"Pain Guy, live"}
                />

                {newItem[newItem.length - 1] !== "" &&
                  newItem.map((item, index) => {
                    return (
                      <Streamers
                        image={"/featured-img/profile.png"}
                        text={item}
                        key={item + index}
                        className="rounded-full"
                        name={"quest"}
                      />
                    );
                  })}
                <li ref={myElement} className="opacity-0 h-20">
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
          <div className="form-grad h-[7vh] p-[.4px] rounded-full absolute bottom-0 w-full max-md:border-none">
            <form
              className="w-full flex h-[100%] rounded-full bg-white border text-[21px] max-md:bg-[#00000034]"
              onSubmit={submitForm}
            >
              <input
                type={"search"}
                placeholder="palce a bid"
                className="outline-none w-[80%] h-full bg-inherit border border-[grey] rounded-full px-5 
                max-md:bg-[#00000034] max-md:border-none max-md:bg-[#00000034] max-md:text-white"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <div className="flex items-center space-x-6 px-2">
                <button type="submit">
                  <Image
                    src={"/icon/send.png"}
                    width="30"
                    height={"3"}
                    alt="send-btn"
                    className="max-md:invert"
                  />
                </button>
                <div className="">
                  <span className="text-red-600 text-4xl cursor-pointer">
                    &#9829;
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Bid;

export const Streamers = ({ image, text, name }) => {
  return (
    <li className="flex items-center gap-5 each-li max-md:gap-2 max-md:text-white max-md:font-medium">
      <div className="w-20 h-20 relative max-md:w-10 max-md:h-10">
        <Image
          fill
          src={image}
          objectFit="contain"
          alt="stream-img"
          className="rounded-full"
        />
      </div>
      <div className="text-left">
        <p className="font-[700]">{name}</p>
        <p className="text-left font-mono">{text}</p>
      </div>
    </li>
  );
};
