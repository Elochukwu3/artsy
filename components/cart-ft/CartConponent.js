import { useCartContext } from "./cartContext";
import CartMapping from "./CartMapping";
import ShoppingDetails from "./ShoppingDetails";
import { useState } from "react";
import ShoppingBtn from "./ShoppingBtn";

export default function CartConponent() {
  const { products, decrementCount, incrementCount, removeItem } =
    useCartContext();
  const [slideView, setSlideView] = useState(false);

  return (
    <section className="flex justify-center">
      <div className="w-[80%] max-sm:w-[95%]">
        <div>
          {products.length === 0 && <p>No Cart Item, Hey add some items</p>}
        </div>
        <ShoppingBtn setSlideView={setSlideView} />
        <div>
          <div
            className={
              slideView ? "grid grid-cols-2 space-x-10" : "grid grid-cols-1"
            }
          >
            <div
              className={
                slideView
                  ? "w-full block transition  duration-1000 opacity-1 h-auto"
                  : " duration-[.6s] overflow-x-hidden -translate-x-[2000px] opacity-1 h-0"
              }
            >
              <ShoppingDetails />
            </div>
            <div
              className={
                slideView
                  ? "w-full duration-1000 "
                  : "w-full duration-1000  translate-x-0"
              }
            >
              <CartMapping
                products={products}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                removeItem={removeItem}
                setSlideView= {setSlideView}
                slideView={slideView}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
