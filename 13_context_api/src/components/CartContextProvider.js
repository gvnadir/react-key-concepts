import { useState } from "react";
import CartContext from "../store/cart-context";

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const cartCtxValue = {
    cartItems: cartItems,
    addToCart: addItemHandler,
    removeFromCart: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
