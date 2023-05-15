import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const Home = () => {
  const { products } = useContext(ProductContext)
  console.log(products, 'home')

  const filteredProducts = products.filter(
    product => product.category === "men's clothing" || product.category === "women's clothing"
  )
  console.log(filteredProducts, 'filtere')
  return (
    <div>
      <section></section>
    </div>
  )
}

export default Home
