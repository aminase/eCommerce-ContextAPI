import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  const { addToCarts } = useContext(CartContext)

  const product = products.find(item => item.id === parseInt(id))
  console.log(product, 'product')

  if (!product) {
    return <section className='h-screen flex justify-center items-center'> Loading..</section>
  }

  const { title, price, description, image } = product
  return (
    <section>
      <div className='container mx-auto'></div>
    </section>
  )
}

export default ProductDetails
