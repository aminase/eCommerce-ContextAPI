import React, { createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartProvider
