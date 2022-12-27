import { useCartContext } from "./cartContext";
import CartMapping from "./CartMapping";
import ShoppingDetails from "./ShoppingDetails";
import { useState } from "react";
import ShoppingBtn from "./ShoppingBtn";
import PayPal from "./PayPal";

export default function CartConponent() {
  const { products, decrementCount, incrementCount, removeItem } =
    useCartContext();
  const [slideView, setSlideView] = useState(false);
  const [checkout, setCheckout] = useState(false);

  return (
    <section className="flex justify-center">
      <div className="w-[80%] max-sm:w-[91%]">
        <div>
          {products.length === 0 && <p>No Cart Item, Hey add some items</p>}
        </div>
        <div className="max-sm:hidden">
          {" "}
          <ShoppingBtn setSlideView={setSlideView} setCheckout={setCheckout} />
        </div>
        {checkout ? (
          <div className="flex justify-center">
            <PayPal />
          </div>
        ) : (
          <div>
            <div
              className={
                slideView
                  ? "grid grid-cols-2 space-x-10 max-md:grid-cols-1"
                  : "grid grid-cols-1"
              }
            >
              <div
                className={
                  slideView
                    ? "w-full block transition  duration-900 opacity-1 h-auto"
                    : " duration-[.6s] overflow-x-hidden -translate-x-[2000px] opacity-1 h-0"
                }
              >
                <ShoppingDetails
                  products={products}
                  setCheckout={setCheckout}
                />
              </div>
              <div
                className={
                  slideView
                    ? "w-full duration-1000 max-md:hidden"
                    : "w-full duration-1000  translate-x-0"
                }
              >
                <CartMapping
                  products={products}
                  decrementCount={decrementCount}
                  incrementCount={incrementCount}
                  removeItem={removeItem}
                  setSlideView={setSlideView}
                  slideView={slideView}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
