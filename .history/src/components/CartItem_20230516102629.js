import React from 'react'

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item
  return (
    <div>
      <div>
        <div>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default CartItem
