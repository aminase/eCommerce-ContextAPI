import React from 'react'

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item
  return <div>{item.title}</div>
}

export default CartItem
