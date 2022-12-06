import styles from "../styles/Menu.module.css";
import BeforeFooter from "./BeforeFooter";
import Featured from "./Featured";
import HomeBanner from "./HomeBanner";
import NewsLetter from "./NewsLetter";

export default function HomeContents() {
  return (
    <div>
      <div className="font-Clash Display">
        <p className={styles.middleText}>
          Photography is poetry & beautiful untold stories
        </p>
        <div className="w-full flex justify-center my-6">
          <p
            className={`text-center font-sans w-4/6 text-2xl ${styles.miniText}`}
          >
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <HomeBanner />
      </div>
      <section className="my-40 mx-20">
        <div className="text-black font-semibold text-2xl border-y border-slate-300 py-10 flex justify-between items-center">
          <p>Explore marketplace</p>
          <p>
            <img
              src="/featured-img/arrow-two.png"
              alt="arrow-two"
              className="w-10"
            />
          </p>
        </div>
        <div className="text-black font-semibold text-2xl border-b border-slate-300 py-10 flex justify-between items-center">
          <p>See auctions</p>
          <p>
            <img
              src="/featured-img/arrow-two.png"
              alt="arrow-two"
              className="w-10"
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
