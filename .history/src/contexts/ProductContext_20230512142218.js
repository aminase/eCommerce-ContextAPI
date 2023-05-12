import React, { createContext, useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'
import fetch from 'node-fetch'

import axios from 'axios'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')

      const data = await response.data
      setProducts(data)
      console.log(data, 'first')
    }

    fetchProducts()
    console.log(products, 'second')
  }, [])

  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
}

export default ProductProvider
