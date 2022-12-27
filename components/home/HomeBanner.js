import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function HomeBanner() {
  return (
    <div>
      <section className={`${styles.homeBanner} h-[680px] mt-40 max-md:min-h-[auto]`}>
        <div className="flex justify-center w-full h-full">
          <div className="w-10/12 py-5 text-white h-full">
            <div className="my-5">
              <p className="font-semibold text-2xl px-4 max-[580px]:text-[1.3em] max-[580px]:text-center max-[320px]:px-1">
                See Upcoming Auctions and Exhibitions
              </p>
            </div>
            <div className="w-full h-[80%] bg-[url('/featured-img/banner.png')]">
              <section className="flex h-full w-full items-end py-7 px-8 flex-wrap max-md:items-start max-md:px-4">
                <div className="w-full space-y-4 max-md:flex max-md:flex-col max-md:gap-7 max-md:h-full max-[320px]:gap-1">
                  <div className="flex items-start">
                    <p className="w-3 h-3 mt-2 rounded-full bg-white"></p>{" "}
                    <p className="w-[200px] pl-5 max-md:text-[1.5em] max-md:w-[100%]">
                      MONALISA REDEFINED IN STYLE.
                    </p>
                  </div>
                  <div className="block">
                    <p className="inline text-2xl font-bold -ml-2">01</p>
                    <p className="inline pl-3">
                      Start on : 08:00 GTS . Monday{" "}
                    </p>
                  </div>
                  <div className=" w-full flex items-center justify-between pl-8 max-md:flex-col max-md:gap-7 max-[320px]:gap-4 max-[320px]:pl-4">
                    <div className="w-[530px] max-md:w-[100%] max-sm:text-[.9em]">
                      GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                      INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                      HIGHEST AND LOWEST BIDS.
                    </div>
                    <div className="flex items-center gap-2 shrink-0 max-md:w-[100%] max-[320px]:flex-wrap">
                      <Link href={"/auction"}>
                      <p className="underline decoration-2 ">See More</p>
                      </Link>
                      <Link href={"/drop"}>
                      <button className="border border-[#FFFFFF] px-2 py-2.5 rounded-md max-[320px]:text-[.8em] max-[320px]:py-1">Set a reminder</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </div>
  );
}
