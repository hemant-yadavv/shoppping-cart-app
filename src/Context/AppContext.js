"use client";

import { data } from "@/data/data"; 
import { createContext, useContext, useEffect, useState } from "react"; 

// Create a context for the app
export const AppContext = createContext();

// AppContextProvider component to provide context values to children components
export function AppContextProvider({ children }) {
  const [ProductList, setProductList] = useState([]);
  const [cart, setCart] = useState([]); 

  // Load product data on component mount
  useEffect(() => {
    setProductList(data);
  }, []);

  // Function to add an item to the cart or increase its quantity
  const add = (id) => {
    const itemInCart = cart.find((cartItem) => cartItem.item.id === id);
    if (itemInCart) {
      // Increase the quantity if the item is already in the cart
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Add the item to the cart if it's not already there
      const product = ProductList.find((product) => product.id === id);
      setCart((prevCart) => [...prevCart, { item: product, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart or decrease its quantity
  const remove = (id) => {
    const itemInCart = cart.find((cartItem) => cartItem.item.id === id);

    if (itemInCart && itemInCart.quantity > 1) {
      // Decrease the quantity of the item if it's more than 1
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      // Remove the item from the cart if its quantity is 1 or less
      setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.item.id !== id)
      );
    }
  };

  // Function to completely remove an item from the cart
  const removeComplete = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== id));
  };

  // Context value to be provided to the components
  const value = {
    ProductList,
    cart,
    add,
    remove,
    removeComplete,
    setCart
  };

  // Providing the context to the children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook to use the cart context
export function useCart() {
  return useContext(AppContext);
}