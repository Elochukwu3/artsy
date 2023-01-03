import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Menu.module.css";
import BeforeFooter from "./BeforeFooter";
import Featured from "./Featured";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";
import SliderComponent from "./SliderComponent";
import { useInView } from "react-intersection-observer";

export default function HomeContents() {
  const {ref:headerText, inView:headerView} = useInView();
  const {ref:miniText, inView:miniView} = useInView();
let effect = headerView || miniView ?"translate-y-0 transition-transform duration-[600ms]": "-translate-y-20"


  return (
    <div>
      <div className="font-Clash Display">
        <p
        ref={headerText}
          className={`max-md:leading-[90px]  max-md:px-2 max-sm:text-[40px] max-sm:leading-normal ${effect} ${styles.middleText} text-[80px] leading-[125px] text-center`}
        >
          Photography is poetry & beautiful untold stories
        </p>
        <div className="w-full flex justify-center my-6">
          <p
          ref={miniText}
            className={`text-center font-sans w-4/6 text-2xl ${effect} ${styles.miniText} max-sm:w-full max-sm:text-[21px]`}
          >
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>
      </div>
      <div>
     
        <SliderComponent />
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <HomeBanner />
      </div>
      <section className="my-40 mx-20 max-[518px]:mx-0  ">
        <div className="text-black max-[518px]:px-3 font-semibold text-2xl border-y border-slate-300 py-10 flex justify-between items-center gap-3">
          <p>Explore marketplace</p>

          <Link href={"market_place/editorials"}>
            <p className="w-11 h-9 max-[380px]:h-6 max-[380px]:w-8 relative">
              <Image fill src="/featured-img/arrow-two.png" alt="arrow-two" />
            </p>
          </Link>
        </div>
        <div className="text-black font-semibold text-2xl border-b border-slate-300 py-10 flex justify-between items-center max-[518px]:px-3">
          <p>See auctions</p>
          <p className="w-11 h-9 max-[380px]:h-6 max-[380px]:w-8 relative">
            <Link href={"/auction"}>
            <Image fill src="/featured-img/arrow-two.png" alt="arrow-two" />
            
            </Link>
          </p>
        </div>
      </section>
      <>
        <BeforeFooter />
      </>
      <>
        <NewsLetter />
      </>
    </div>
  );
}
