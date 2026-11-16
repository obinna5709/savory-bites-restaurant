import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
export function CartProvider({ children }) {
  // Load the saved cart once when the app starts.
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('savory-bites-cart')) || []; }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem('savory-bites-cart', JSON.stringify(cart)); }, [cart]);
  const addToCart = (item) => setCart(current => {
    const found = current.find(entry => entry.id === item.id);
    return found ? current.map(entry => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...current, { ...item, quantity: 1 }];
  });
  const updateQuantity = (id, amount) => setCart(current => current.map(item => item.id === id ? { ...item, quantity: Math.max(1, amount) } : item));
  const removeFromCart = (id) => setCart(current => current.filter(item => item.id !== id));
  const clearCart = () => setCart([]);
  const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  return <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, itemCount, subtotal }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
