import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 }

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

  const removeFromCart = id => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = id => {
    const cartItem = cart.find(item => item.id === id)
    addToCart(id, cartItem)
  }

  const decreaseAmount = id => {
    const cartItem = cart.filter(item => item.id === id)
    console.log(item.amount, 'item')
    if(cartItem)
    // removeFromCart(id)
    // setCart(item)
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
