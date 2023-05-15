import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const Home = () => {
  const { products } = useContext(ProductContext)
  console.log(products, 'home')

  const filteredProducts = products.filter(i => i.category === "men's clothing")
  return <div>Homepage</div>
}

export default Home
