import { useCartContext } from "./cartContext";
import CartMapping from "./CartMapping";

export default function CartConponent() {
  const { products, decrementCount, incrementCount, removeItem } =
    useCartContext();

  return (
    <section className="flex justify-center">
      <div className="w-[80%] max-sm:w-[95%]">
        <div>
          {products.length === 0 && <p>No Cart Item, Hey add some items</p>}
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 space-x-10 text-xl capitalize">
            <button className="border-none bg-none">Shopping Cart</button>
            <button className="border-none bg-none">Shopping details</button>
            <button className="border-none bg-none">Payment details</button>
          </div>
        </div>
        <div>
          <div>
            <div></div>
            <div>
              <CartMapping
                products={products}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                removeItem={removeItem}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
