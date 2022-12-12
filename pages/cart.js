import { cartUseContext } from "../components/cartContext";

export default function Cart() {
  const { products, decrementCount, incrementCount, removeItem } =cartUseContext();

  
  return (
    <section className="flex justify-center">
      <div className="w-[80%]">
        <div>
          {products.length === 0 && <p>No Cart Item, Hey add some items</p>}
        </div>
        <div>
          <ul>
            {products.length > 0
              ? products.map((items) => {
                  const { name, id, img, price, count } = items;

                  return (
                    <li
                      key={id}
                      className="flex justify-between border-y border-grey-500 py-5"
                    >
                      <div className="flex h-[200px]  gap-4">
                        <img
                          src={img}
                          alt={name}
                          className="block h-full py-4 w-[185px]"
                        />
                        <ul className="block h-full py-4 space-y-5 text-[18px] capitalize">
                          <li className="text-black font-semibold">Philome</li>
                          <li className="text-[#9ca3af]">Clearhh</li>
                          <li className="text-[#9ca3af]">size: 200ft</li>
                          <li className="flex gap-4 font-semibold">
                            <span
                              className="cursor-pointer"
                              onClick={() => decrementCount(id)}
                            >
                              -
                            </span>
                            <span className="cursor-pointer">{count}</span>
                            <span
                              className="cursor-pointer"
                              onClick={() => incrementCount(id)}
                            >
                              +
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col justify-between py-4 items-center">
                        <p
                          className="rounded-full border border-grey-600 p-1 cursor-pointer"
                          onClick={() => removeItem(items)}
                        >
                          <img
                            src="../featured-img/close.png"
                            className="scale-75"
                          />
                        </p>
                        <p>${count * price}.00</p>
                      </div>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    </section>
  );
}
