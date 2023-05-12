import React from 'react'

import { BrowserRouter as Route, Routes, Router } from 'react-router-dom'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

import SideBar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          <Route path='/' element={<Home />}></Route> <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
      react app
    </div>
  )
}

export default App
