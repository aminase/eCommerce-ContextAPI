import React, { createContext, useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  return <ProductContext.Provider>{children}</ProductContext.Provider>
}

export default ProductContext
