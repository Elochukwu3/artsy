import styles from "../styles/Home.module.css";

export default function HomeBanner() {
  return (
    <div>
      <section className={`${styles.homeBanner} h-[680px] mt-40 `}>
        <div className="flex justify-center w-full h-full">
          <div className="w-10/12 py-5 text-white h-full">
            <div className="my-5">
              <span className="font-semibold text-2xl px-4">
                See Upcoming Auctions and Exhibitions
              </span>
            </div>
            <div className="w-full h-[80%] bg-[url('/featured-img/banner.png')]">
              <section className="flex flex-end h-full w-full items-end py-7 px-8">
                <div className="w-full space-y-4">
                  <div className="flex items-start">
                    <p className="w-3 h-3 mt-2 rounded-full bg-white"></p>{" "}
                    <p className="w-[200px] pl-5">
                      MONALISA REDEFINED IN STYLE.
                    </p>
                  </div>
                  <div className="block">
                    <p className="inline text-2xl font-bold -ml-2">01</p>
                    <p className="inline pl-3">
                      Start on : 08:00 GTS . Monday{" "}
                    </p>
                  </div>
                  <div className=" w-full flex items-center justify-between pl-8">
                    <div className="w-[530px]">
                      GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                      INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                      HIGHEST AND LOWEST BIDS.
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="underline decoration-2">See More</p>
                      <button className="border border-[#FFFFFF] px-2 py-2.5 rounded-md">Set a reminder</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="flex justify-end gap-4 px-6 py-3">
              <div className="shadow-xl w-[3rem] h-[3rem] bg-[#ddac88] rounded-full font-semibold text-xl flex items-center justify-center cursor-pointer">
                {"<"}
              </div>
              <div className="shadow-xl w-[3rem] h-[3rem] bg-[#ddac88] rounded-full font-semibold text-xl flex items-center justify-center cursor-pointer">
                {">"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
