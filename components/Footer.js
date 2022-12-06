export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-[90%] mx-auto flex text-[26px] py-12 justify-around">
        <div className="my-auto">
          <img src="/nav-img/ARTSY.png" alt="footer-Img" />
        </div>
        <ul className="space-y-5 capitalize">
          <li>Home</li>
          <li>Marketplace</li>
          <li>Auctions</li>
          <li>Drops</li>
        </ul>
        <ul className="space-y-5 capitalize">
          <li>Blog</li>
          <li>Wallets</li>
          <li>Rates</li>
          <li>High bids</li>
        </ul>
        <ul className="space-y-10 text-[21px]">
          <li className="flex items-center gap-3">
            <span>
              <img
                src="/icon/email.png"
                alt="location-Img"
                className="w-[.9em]"
              />
            </span>
            <span>artsystudios@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <span>
              <img
                src="/icon/location.png"
                alt="location-Img"
                className="w-[.9em]"
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
