"use client"
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // LocalStorage bilan saqlash – sahifa refresh bo‘lsa ham saqlansin
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const exists = cart.find(i => i.id === item.id && i.size === item.size);
    if (exists) {
      setCart(cart.map(i => i.id === item.id && i.size === item.size
        ? { ...i, quantity: i.quantity + 1 }
        : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter(i => !(i.id === id && i.size === size)));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);