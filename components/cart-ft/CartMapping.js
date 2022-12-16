import EachCart from "./EachCart";
import { formatOperand } from "../../assets/numberConvert.js";
import Link from "next/link";
export default function CartMapping({
  products,
  decrementCount,
  incrementCount,
  removeItem,
  setSlideView,
  slideView,
}) {
  const totaling = () => {
    const totall = products.reduce((total, cumm) => {
      return total + cumm.price;
    }, 0);
    return totall.toString();
  };
  const slideIn = (e) => {
    setSlideView(true);
  };
  return (
    <div>
      <ul>
        {products.length > 0
          ? products.map((items) => {
              return (
                <li
                  key={items.name + items.id}
                  className="flex justify-between border-y border-grey-500 py-5"
                >
                  <EachCart
                    items={items}
                    decrementCount={decrementCount}
                    incrementCount={incrementCount}
                    removeItem={removeItem}
                  />
                </li>
              );
            })
          : ""}
        <li className="flex my-10">
          <div className={!slideView ? "block basis-[40%]" : "hidden"}>
            <button
              onClick={slideIn}
              type="submit"
              className="w-full  text-white text-[1.3em] font-medium py-3 
            bg-[#3341C1] hover:bg-[#051076] scale-95 hover:scale-100 transition-transform duration-[.5s] mb-5"
            >
              Proceed to Payment
            </button>
            <p>
              <Link
                href={"/market_place/editorilas"}
                className="capitalize text-xl text-blue-500 underline pl-5 "
              >
                Continue Shopping
              </Link>
            </p>
          </div>
          <div className="basis-[60%]">
            <div
              className={
                !slideView
                  ? "flex space-x-10 justify-around"
                  : "flex space-x-10 justify-between"
              }
            >
              <span className="text-xl font-[700]">Products in cart:</span>
              <span className="text-[17px font-[600]">
                {products.length} items
              </span>
            </div>
            <div
              className={
                !slideView
                  ? "flex space-x-10 justify-around"
                  : "flex space-x-10 justify-between"
              }
            >
              <span className="text-xl font-[700]">Shipping:</span>
              <span className="text-[17px font-[600]">
                ${Math.floor(Math.random() * 70)}.00
              </span>
            </div>
            <div
              className={
                !slideView
                  ? "flex space-x-10 justify-around"
                  : "flex space-x-10 justify-between"
              }
            >
              <span className="text-xl font-[700]">Total:</span>
              <span className="text-[17px font-[600]">
                ${formatOperand(totaling())}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
