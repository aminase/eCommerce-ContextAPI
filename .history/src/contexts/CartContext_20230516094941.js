import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 }
    console.log(`${newItem}`)
  }
  return <CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>
}

export default CartProvider
