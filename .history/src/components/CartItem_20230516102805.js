import React from 'react'

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item
  return (
    <div>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <div>
          <img src={image} alt='' className='max-w-[80px]' />
        </div>
      </div>
    </div>
  )
}

export default CartItem
