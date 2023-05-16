import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 }

    //check if item is already in cart
    const cartItem = cart.find(item => item.id === id)

    //if cartItem is already in cart
    if (cartItem) {
      const newCartItem = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem + 1 }
        } else {
          return item
        }
      })
      setCart(cart)
    } else {
      setCart([...cart, newItem])
    }
  }

  console.log(cart, 'cart')
  return <CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>
}

export default CartProvider
