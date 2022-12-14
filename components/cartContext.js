import React, { createContext, useContext, useState, useEffect } from "react";
const CartContextProvider = createContext();

const initialStorage = () => {
  if (typeof window !== "undefined") {
    const localData = localStorage.getItem("storedItems");
    return localData ? JSON.parse(localData) : [];
  }
};

export function CartContextCreator({ children }) {
  const [products, setProducts] = useState(initialStorage);

  useEffect(() => {
    const concatDuplicated = [...products].reduce((findArray, current) => {
      const newObj = findArray.find((item) => {
        return item.id === current.id;
      });

      if (newObj) {
        return findArray;
      }
      return [...findArray, current];
    }, []);

    localStorage.setItem("storedItems", JSON.stringify(concatDuplicated))
  }, [products]);

  const [count, setCount] = useState(1); //count: this shows the qty of items added to the cart

  const addToCart = (items) => {
    const newItems = {
      ...items,
      count: 1,
      // id: Math.floor(Math.random() * 20000)
    };

    setProducts([...products, newItems]);
  };

  function onChangeCount(productId, count) {
    setProducts((oldState) => {
      const productIndex = oldState.findIndex((item) => {
        return item.id === productId;
      });

      if (productIndex !== -1) {
        oldState[productIndex].count = count;
      }
      return [...oldState];
    });
  }

  //   increase count(qty)
  const incrementCount = (e, productId) => {
    setCount((prev) => {
      prev = Number(e.target.previousElementSibling.textContent);
      let _count = prev + 1;
      onChangeCount(productId, _count);
      return _count;
    });
  };

  //decrease count(qty)
  const decrementCount = (e, productId) => {
    setCount((prev) => {
      prev = Number(e.target.nextElementSibling.textContent);
      let _count = prev > 1 ? prev - 1 : (prev = 1);
      onChangeCount(productId, _count);
      return _count;
    });
  };

  // removeItem from cart
  const removeItem = (product) => {
    setProducts((oldState) => {
      const productIndex = oldState.findIndex((item) => {
        return item.id === product.id;
      });

      if (productIndex !== -1) oldState.splice(productIndex, 1);

      return [...oldState];
    });
  };

  return (
    <CartContextProvider.Provider
      value={{
        addToCart,
        products,
        incrementCount,
        decrementCount,
        removeItem,
      }}
    >
      {children}
    </CartContextProvider.Provider>
  );
}
export const cartUseContext = () => {
  return useContext(CartContextProvider);
};
