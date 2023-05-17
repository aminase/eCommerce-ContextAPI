import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  c

  const { id } = useParams()
  console.log(id, '---id')
  return <div>Product Details Page</div>
}

export default ProductDetails
