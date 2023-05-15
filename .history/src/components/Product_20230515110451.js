import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({ product }) => {
  const { id, image, price, rating, title, description, category } = product
  console.log(product, 'PRODUCT')
  return <div>Product</div>
}

export default Product
