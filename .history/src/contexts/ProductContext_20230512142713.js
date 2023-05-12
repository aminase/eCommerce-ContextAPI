import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      const data = await response.data
      setProducts(data)
      console.log(data, 'first')
    }

    fetchProducts()
    console.log(products, 'second')
  }, [])

  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

export default ProductProvider
