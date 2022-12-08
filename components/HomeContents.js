import styles from "../styles/Menu.module.css";
import BeforeFooter from "./BeforeFooter";
import Carousel from "./Carousel";
import Featured from "./Featured";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";
import SliderComponent from "./SliderComponent";

export default function HomeContents() {
  return (
    <div>
      <div className="font-Clash Display">
        <p className={`max-md:leading-[90px]  max-md:px-2 max-sm:text-[40px] max-sm:leading-normal ${styles.middleText} text-[80px] leading-[125px] text-center`}>
          Photography is poetry & beautiful untold stories
        </p>
        <div className="w-full flex justify-center my-6">
          <p
            className={`text-center font-sans w-4/6 text-2xl ${styles.miniText} max-sm:w-full max-sm:text-[21px]`}
          >
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>
      </div>
      <div>
        {/* <Carousel/> */}
        <SliderComponent/>
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <HomeBanner />
      </div>
      <section className="my-40 mx-20 max-[518px]:mx-0  " >
        <div className="text-black max-[518px]:px-3 font-semibold text-2xl border-y border-slate-300 py-10 flex justify-between items-center gap-3">
          <p>Explore marketplace</p>
          <p>
            <img
              src="/featured-img/arrow-two.png"
              alt="arrow-two"
              className="w-10 max-[380px]:h-6 max-[380px]:w-8"
            />
          </p>
        </div>
        <div className="text-black font-semibold text-2xl border-b border-slate-300 py-10 flex justify-between items-center max-[518px]:px-3">
          <p>See auctions</p>
          <p>
            <img
              src="/featured-img/arrow-two.png"
              alt="arrow-two"
              className="w-10 max-[380px]:h-6 max-[380px]:w-8"
            />
          </p>
        </div>
      </section>
      <>
      <BeforeFooter/>
      </>
      <>
      <NewsLetter/>
      </>

    </div>
  );
}
