import Link from "next/link";
import styles from "../../styles/Home.module.css";
export default function FeaturedText({headerText, direct}) {
  return (
    <div className="flex flex-col justify-between gap-4 items-start  min-h-56 py-0 pr-6 max-lg:pr-1 max-md:items-center max-sm:text-center">
      <h2 className={`text-4xl ${styles.featuredText} capitalize max-[500px]:hidden`}>
        {headerText}
       
      </h2>
      <div>
        <p className={`text-xl ${styles.miniText}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur
        </p>
      </div>
      <div className="flex justify-between w-full items-center ">
        <div className="flex items-center flex-1">
          <span>
            <img src="./featured-img/prof.png" alt=""/>
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof-two.png" alt=""/>
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof-three.png" alt=""/>
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof-four.png" alt=""/>
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof-five.png" alt=""/>
          </span>
       
          <div className="pl-5 text-xl font-semibold">
          <p>64 major creators</p>
        </div>
        </div>
        
        <div className="pr-10 max-md:pr-0 max-sm:hidden">
         <Link href={direct}>
         <p className="px-2 border border-[grey] w-10 h-10 flex items-center justify-center rounded-full">
            <img src="./featured-img/arrow.png" className="w-11/12" alt=""/>
          </p>
         </Link>
        </div>
      </div>
    </div>
  );
}
