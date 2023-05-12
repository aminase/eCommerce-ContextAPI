import React, { createContext, useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'
import axios from 'axios'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      const responseData = await response.data
      const products = responseData
      setProducts(products)
      console.log(responseData, products, 'products')
    }
    fetchProducts()
  }, [])

  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
}

export default ProductProvider
