import React, { createContext, useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>ProductContext</ProductContext.Provider>
}

export default ProductContext
