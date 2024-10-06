import { useEffect, useMemo, useState } from "react";

import { guitars } from "../data";

export const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [isCart, setIsCart] = useState(initialCart);
  const [isGuitars] = useState(guitars);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(isCart));
  }, [isCart]);

  function addCart(guitar) {
    const existingItem = isCart.findIndex(item => item.id === guitar.id);
    if (existingItem >= 0) {
      if (isCart[existingItem].quantity >= 5) return;
      const updatedCart = [...isCart];
      updatedCart[existingItem].quantity++;
      setIsCart(updatedCart);
    } else {
      guitar.quantity = 1;
      setIsCart([...isCart, guitar]);
    }
  }

  function removeFromCart(id) {
    setIsCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  }

  function incrementQuantityItem(id) {
    const updatedCart = isCart.map(item => {
      if (item.id === id && item.quantity < 5) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setIsCart(updatedCart);
  }

  function decrementQuantityItem(id) {
    const updatedCart = isCart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setIsCart(updatedCart);
  }

  function clearCart() {
    setIsCart([]);
  }

  const isEmpty = useMemo(() => [...isCart].length === 0, [isCart]);
  const totalPrice = useMemo(
    () =>
      [...isCart].reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
      }, 0),
    [isCart]
  );
  return {
    addCart,
    removeFromCart,
    incrementQuantityItem,
    decrementQuantityItem,
    clearCart,
    isGuitars,
    isCart,
    isEmpty,
    totalPrice,
  };
};
