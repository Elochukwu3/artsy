import Image from "next/image";
import Link from "next/link";
const MENU_HOVER =
  "text-2xl cursor-pointer font-normal after:content-[''] after:duration-300 after:h-1 after:block after:w-0 after:bg-slate-400 hover:after:w-full";
export default function NaBar() {
  return (
    <div className="h-auto px-20">
      <nav className="flex justify-between py-10 items-center bg-white">
        <section className="logo">
          <img src="nav-img/ARTSY.png" />
        </section>
        <section className="menu">
          <ul className="flex gap-10">
            <li className={MENU_HOVER}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={MENU_HOVER}>
              <Link href={"/market_place"}>MarketPlace</Link>
            </li>
            <li className={MENU_HOVER}>
              <Link href={"/auction"}>Auction</Link>
            </li>
            <li className={MENU_HOVER}>
              <Link href={"/drop"}>Drop</Link>
            </li>
          </ul>
        </section>
        <div>
          <section className="flex-1 w-full justify-between">
            <ul className="grid grid-cols-3 gap-9 items-center">
              <li>
                <Link href={"/search"}>
                  <Image src="/nav-img/search.png" width={"26"} height={"29"} alt={"search-img"}/>
                </Link>
              </li>
              <li>
                <Link href={"/cart"}>
                  {" "}
                  <Image src="/nav-img/cart.png" width={"26"} height={"29"} alt={"cart-img"}/>
                </Link>
              </li>
              <li>
                <Link href={"/notify"}>
                  <Image src="/nav-img/notify.png" width={"26"} height={"29"} alt={"notify-img"} />
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
}
