import styles from "../styles/Home.module.css";

export default function HomeBanner() {
  return (
    <div>
      <section className={`${styles.homeBanner} h-[580px] mt-40 `}>
        <div className="flex justify-center w-full h-full">
          <div className="w-10/12 py-5 text-white h-full">
            <div className="my-5">
              <span className="font-semibold text-2xl px-4">
                See Upcoming Auctions and Exhibitions
              </span>
            </div>
            <div className="w-full h-[85%] bg-[url(/feaured-img/banner.png)]">
              <section className="flex flex-end h-full w-full items-end py-7 px-8">
                <div className="w-full space-y-4">
                  <div className="flex items-start">
                    <p className="w-3 h-3 mt-2 rounded-full bg-white"></p>{" "}
                    <p className="w-[200px] pl-5">MONALISA REDEFINED IN STYLE.</p>
                  </div>
                  <div className="block">
                    <p className="inline text-2xl font-bold -ml-2">01</p>
                    <p className="inline pl-3">Start on : 08:00 GTS . Monday </p>
                  </div>
                  <div className=" w-full flex items-center justify-between pl-8">
                   <div className="w-[530px]">
                   GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                    INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                    HIGHEST AND LOWEST BIDS.
                   </div>
                   <div className="flex items-center">
                    <p>See More</p>
                    <button>Set a reminder</button>
                   </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
