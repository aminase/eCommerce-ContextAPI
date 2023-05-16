import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (id, product) => {
    console.log(`${id} item with id added to cart`)
  }
  return <CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>
}

export default CartProvider
