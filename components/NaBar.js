import { useState } from "react";
import { cartUseContext } from "./cartContext";
import Image from "next/image";
import Link from "next/link";
const MENU_HOVER =
  "text-2xl cursor-pointer font-normal after:content-[''] after:duration-300 after:h-1 after:block after:w-0 after:bg-slate-400 hover:after:w-full max-md:after:hidden";
export default function NaBar() {
  const [openNav, setOpenNav] = useState(false);
  const collapseNav = () => {
    setOpenNav(!openNav);
  };
  const closeNav = () => {
    setOpenNav(false);
  };
  const { products } = cartUseContext();

  return (
    <div className="h-auto px-20 max-lg:px-5 relative max-sm:px-3">
      <nav className="flex justify-between py-10 items-center bg-white">
        <section
          className="bar hidden max-md:block cursor-pointer px-2"
          onClick={collapseNav}
        >
          <Image
            src="/featured-img/bar.png"
            alt="bar-img"
            width={"32"}
            height="110"
            objectFit="contain"
          />
        </section>
        <section className="logo">
          <Image
            src="/nav-img/ARTSY.png"
            alt="nav-img"
            width={"110"}
            height="110"
            objectFit="contain"
          />
        </section>
        <section
          className={
            !openNav
              ? "menu max-md:hidden transition duration-300 ease-in"
              : "transition max-md:fixed overflow-y-hidden max-md:inset-0 menu max-md:bg-white menu max-md:z-50 max-md:px-10 duration-300 ease-out"
          }
        >
          <ul className="flex gap-10 menu max-md:flex-col max-md:pt-20">
            <li className=" hidden max-md:flex justify-between">
              <section className="logo">
                <Image
                  src="/nav-img/ARTSY.png"
                  alt="nav-img"
                  width={"110"}
                  height="110"
                  objectFit="contain"
                />
              </section>
              <div
                className="cursor-pointer border border-gray-100 p-1"
                onClick={closeNav}
              >
                <Image
                  src="/featured-img/close.png"
                  alt="nav-img"
                  width={"20"}
                  height="10"
                />
              </div>
            </li>
            <li className={MENU_HOVER} onClick={closeNav}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={MENU_HOVER} onClick={closeNav}>
              <Link href={"/market_place/editorials"}>MarketPlace</Link>
            </li>
            <li className={MENU_HOVER} onClick={closeNav}>
              <Link href={"/auction"}>Auction</Link>
            </li>
            <li className={MENU_HOVER} onClick={closeNav}>
              <Link href={"/drop"}>Drop</Link>
            </li>
          </ul>
        </section>
        <div>
          <section className="flex-1 w-full justify-between">
            <ul className="grid grid-cols-3 gap-9 items-center menu max-md:grid-cols-2">
              <li>
                <Link href={"/search"}>
                  <Image
                    src="/nav-img/search.png"
                    width={"26"}
                    height={"29"}
                    alt={"search-img"}
                  />
                </Link>
              </li>
              <li className="relative pr-1">
                <Link href={"/cart"}>
                  {" "}
                  <Image
                    src="/nav-img/cart.png"
                    width={"26"}
                    height={"29"}
                    alt={"cart-img"}
                  />
                </Link>

                {products
                  ? products.length > 0 && (
                      <span
                        className="absolute  -
                    -right-3 -top-4 bg-red-600 w-4 h-4 p-3 rounded-full text-[12px] 
                    flex justify-center items-center text-white font-semibold
                    max-md:scale-75
                    max-md:right-0
                    transition-1
                    duration-300 ease-in-out
                    "
                      >
                        {products.length}
                      </span>
                    )
                  : ""}
              </li>
              <li className="menu max-md:hidden">
                <Link href={"/notify"}>
                  <Image
                    src="/nav-img/notify.png"
                    width={"26"}
                    height={"29"}
                    alt={"notify-img"}
                  />
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </div>
  );
}
