import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const Home = () => {
  const { products } = useContext(ProductContext)
  console.log(products, 'home')

  const filteredProducts = products.filter(
    i => i.category === "men's clothing" && i.category === "women's clothing"
  )
  console.log(filteredProducts, 'filtere')
  return <div>Homepage</div>
}

export default Home
