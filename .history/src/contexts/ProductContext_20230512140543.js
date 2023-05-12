import React, { createContext, useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'

import axiosClient from '../axiosClient'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axiosClient.get()
      console.log(response, 'proddd')

      // const responseData = await response.data
      // setProducts(responseData)
    }

    console.log(products, 'proddd')
    fetchProducts()
  }, [])

  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
}

export default ProductProvider
