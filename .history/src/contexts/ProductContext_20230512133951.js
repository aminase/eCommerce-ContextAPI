import React, { createContext, useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      const data = await response.json()
    }
    fetchProducts()
  }, [])

  return <ProductContext.Provider>{children}</ProductContext.Provider>
}

export default ProductProvider
