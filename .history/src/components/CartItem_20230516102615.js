import React from 'react'

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item
  return (
    <div>
      <div>
        <div>
          <img alt='' />
        </div>
      </div>
    </div>
  )
}

export default CartItem
