import styles from "../styles/Home.module.css";
export default function FeaturedText() {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  // const _nums = [...nums, ...nums.slice(0, 1)].slice(-7);
  const _nums = [...nums.slice(-1), ...nums].slice(0, 7)
  console.log(_nums);
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
            <img src="./featured-img/prof-two.png" />
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof-three.png" />
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof-four.png" />
          </span>
          <span className="-ml-4">
            <img src="./featured-img/prof-five.png" />
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
