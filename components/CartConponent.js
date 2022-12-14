import { CartUseContext } from "./cartContext";
import CartMapping from "./CartMapping";


export default function CartConponent() {
  const { products, decrementCount, incrementCount, removeItem } =
    CartUseContext();

  return (
    <section className="flex justify-center">
      <div className="w-[80%] max-sm:w-[95%]">
        <div>
          {typeof window !== "undefined" && products.length === 0 && (
            <p>No Cart Item, Hey add some items</p>
          )}
        </div>
        <div>
          <CartMapping
            products={products}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            removeItem={removeItem}
          />
        </div>

      </div>
    </section>
  );
}
