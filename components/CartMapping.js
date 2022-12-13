import EachCart from "./EachCart";

export default function CartMapping({
  products,
  decrementCount,
  incrementCount,
  removeItem,
}) {
  return (
    <div>
      <ul>
        {typeof window !== "undefined" && products.length > 0
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
      </ul>
    </div>
  );
}
