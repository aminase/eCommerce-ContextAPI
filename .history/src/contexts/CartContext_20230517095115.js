import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 }

    const removeFromCart = (id, product) => {
    const deletedItem = product.find(item => item.id !== id)

    //check if item is already in cart
    const cartItem = cart.find(item => {
      return item.id === id
    })

    //if cartItem is already in cart
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }
  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
}

export default CartProvider