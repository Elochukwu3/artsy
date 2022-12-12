import { useState } from "react";
import { cartUseContext } from "../../../components/cartContext";
import { useRouter } from "next/router";
import { storedItems } from "../../../assets/salesItems";

export const getStaticPaths = () => {
  const paths = storedItems.map((items) => {
    return {
      params: { name: items.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const name = context.params.name;
  const filterdname = storedItems.filter((items) => {
    return items.name === name;
  });

  return {
    props: { pages: filterdname },
  };
};
export default function Phiomena({ pages }) {
  const [heart, setHeart] = useState(false);
  const hanleHeartChange = () => {
    setHeart(!heart);
  };

  const router = useRouter();
  const redirectPage = () => {
    router.back(-1);
  };

  const { addToCart } = cartUseContext();
  const handleCart = (items) => {
    router.push("/cart");
    addToCart(items);
  };
  return (
    <div>
      {pages.map((items) => {
        const { name, img, id } = items;
        return (
          <div key={id} className="w-full">
            <div className="w-full flex justify-center my-12">
              <div className="w-[80%] text-[24px] text-[#BCB7B7]">
                <span className="cursor-pointer">Home/ Marketplace/</span>
                <span className="cursor-pointer" onClick={redirectPage}>
                  Editorials/
                </span>
                <span className="cursor-pointer text-black">Philomena ‘22</span>
              </div>
            </div>
            <section className="w-full flex justify-center">
              <div className="w-[80%] bg-white flex h-[850px] border border-gray-500">
                <div className="basis-[50%] h-full border-r border-gray-500  py-6 px-4 ">
                  <img
                    src={`../${img}`}
                    className="w-[100 %] h-[100%] object-cover"
                  />
                </div>
                <ul className="flex-1 w-[50%] mg-0">
                  <li className="flex px-4 py-6 items-center justify-between border-b border-gray-500">
                    <h1 className="font-bold text-[34px]">Boolean Egyptian</h1>
                    <div className="flex items-center gap-3">
                      <img src={"/icon/pyramid.jpg"} />
                      <span className="text-[36px] font-medium">0.09</span>
                    </div>
                  </li>
                  <li className="px-4 py-10 space-y-5 text-[24px] font-normal border-b border-gray-500">
                    <p>
                      <span>Creator:</span>
                      <span className="text-[#4693ED] px-2">Ali Dawa</span>
                    </p>
                    <p>Made in Italy</p>
                    <p>
                      <span className="font-Medium">Total views:</span>
                      <span>1.7K views</span>
                    </p>
                    <p className="space-x-4 text-[30px] font-semibold ">
                      <span className="cursor-pointer">-</span>
                      <span className="cursor-pointer">1</span>
                      <span className="cursor-pointer">+</span>
                    </p>
                    <div className="w-[90%] h-[68px] flex gap-2">
                      <button
                        className="bg-[#3341C1] h-full w-[70%] text-white grid grid-cols-2 items-center"
                        onClick={() => handleCart(items)}
                      >
                        <p className="block">Add to cart </p>
                        <img src="/icon/sm-arrow.png" className="block" />
                      </button>
                      <div
                        onClick={hanleHeartChange}
                        className="  border border-[#292929] w-[25%] h-full p-auto block text-[2em] flex justify-center items-center cursor-pointer"
                      >
                        {!heart ? (
                          <span> &#9825;</span>
                        ) : (
                          <span className="text-red-600">&#9829;</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="text-[30px] font-medium text-black capitalize px-4 py-8 border-b border-gray-500">
                    Description
                  </li>
                  <li className="text-[30px] font-medium text-black capitalize px-4 py-8 border-b border-gray-500">
                    Listings
                  </li>
                  <li className="text-[30px] font-medium text-black capitalize px-4 py-8">
                    Status{" "}
                  </li>
                </ul>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
