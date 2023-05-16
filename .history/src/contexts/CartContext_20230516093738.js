import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCart = () => {
    setCart([...cart])
  }
  return <CartContext.Provider value={'this is cart'}>{children}</CartContext.Provider>
}

export default CartProvider
