import React, { createContext, useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'

import axios from 'axios'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      console.log(response, typeof response, 'first')

      const responseData = response.data
      setProducts(responseData)
    }

    fetchProducts()
    console.log(products, 'second')
  }, [])

  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
}

export default ProductProvider
