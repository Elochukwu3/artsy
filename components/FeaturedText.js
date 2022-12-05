import styles from "../styles/Home.module.css";
export default function FeaturedText() {
  return (
    <div className="flex flex-col justify-between gap-4 items-start  h-56 py-0 pr-6">
      <h2 className={`text-4xl ${styles.featuredText}`}>
        The Boolean Egyptian
      </h2>
      <div>
        <p className={`text-xl ${styles.miniText}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur
        </p>
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center flex-1">
          <span>
            <img src="./featured-img/prof.png" />
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof.png" />
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof.png" />
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof.png" />
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof.png" />
          </span>
       
          <div className="pl-5 text-xl font-semibold">
          <p>64 major creators</p>
        </div>
        </div>
        
        <div className="pr-10">
          <p className="px-2 border border-[grey] w-10 h-10 flex items-center justify-center rounded-full">
            <img src="./featured-img/arrow.png" className="w-11/12" />
          </p>
        </div>
      </div>
    </div>
  );
}
