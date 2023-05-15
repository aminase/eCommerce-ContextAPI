import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({ product }) => {
  const { id, image, price, rating, title, description, category } = product
  console.log(product, 'PRODUCT')
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        1
      </div>
      <div>2</div>
    </div>
  )
}

export default Product
