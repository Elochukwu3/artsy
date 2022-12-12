import React, { createContext, useContext, useState, useEffect } from "react";

const CartContextProvider = createContext(null);

export function CartContextCreator({ children }) {
  const [products, setProducts] = useState([] || JSON.parse(localStorage.getItem("storedItem")));

  const [count, setCount] = useState(1); //count: this shows the qty of items added to the cart

  useEffect(() => {
    localStorage.setItem("storedIems", JSON.stringify(products));
  }, [products]);

  const addToCart = (items) => {
    const newItems = {
      ...items,
      count: 1,
    };
    setProducts([...products, newItems]);
  };

  function onChangeCount(productId) {
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
  const incrementCount = (productId) => {
    setCount((prev) => prev + 1);
    onChangeCount(productId);
  };

  //decrease count(qty)
  const decrementCount = (productId) => {
    setCount((prev) => (prev > 1 ? prev - 1 : (prev = 1)));
    onChangeCount(productId);
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
