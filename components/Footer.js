import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-[90%] mx-auto flex text-[22px] py-12 justify-around max-md:flex-wrap max-md:gap-6">
        <div className="my-auto shrink-0 max-[500px]:hidden">
          <Image
            src="/nav-img/ARTSY.png"
            alt="footer-Img"
            width={"110"}
            height={"100"}
            objectFit={"contain"}
          />
        </div>
        <ul className="space-y-5 capitalize shrink-0 max-md:space-y-1 max-[500px]:hidden">
          <li>Home</li>
          <li>Marketplace</li>
          <li>Auctions</li>
          <li>Drops</li>
        </ul>
        <ul className="space-y-5 capitalize shrink-0 max-md:space-y-1 max-[500px]:hidden">
          <li>Blog</li>
          <li>Wallets</li>
          <li>Rates</li>
          <li>High bids</li>
        </ul>
        <ul className="space-y-10 text-[21px] shrink-0 max-md:space-y-2">
          <li className="hidden max-[500px]:block capitalize">Reach us</li>
          <li className="flex items-center gap-3">
            <span>
              <Image
                src="/icon/email.png"
                alt="location-Img"
                width={"20"}
                height="10"
              />
            </span>
            <span>artsystudios@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <span>
               <Image
                src="/icon/location.png"
                alt="location-Img"
                width={"18"}
                height="10"
              />
            </span>
            <span>Lagos, Nigeria.</span>
          </li>
        </ul>
      </div>
      <div className="text-center py-4 px-5">
        Artsystudios © 2022. All Rights Reserved.
      </div>
    </footer>
  );
}
