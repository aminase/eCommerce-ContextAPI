import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item
  return (
    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/products/${id}`}>
          <img src={image} alt='' className='max-w-[80px]' />
        </Link>
        <div>
          <div>
            <Link
        <Link to={`/products/${id}`}>
              className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
