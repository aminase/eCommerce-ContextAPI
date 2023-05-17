import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCarts } = useContext(CartContext)

  const product = products.find(item => item.id === id)
  console.log(product, 'product')

  return <div>Product Details Page</div>
}

export default ProductDetails
