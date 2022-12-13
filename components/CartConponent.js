
import { cartUseContext } from './cartContext';
import CartMapping from './CartMapping';

export default function CartConponent() {
    const { products, decrementCount, incrementCount, removeItem } =cartUseContext();

    return (
      <section className="flex justify-center">
        <div className="w-[80%]">
          <div>
            { typeof window !== "undefined" && products.length === 0  && <p>No Cart Item, Hey add some items</p>
           }
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
