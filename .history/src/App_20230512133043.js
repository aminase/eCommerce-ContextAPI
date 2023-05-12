import React from 'react'

import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

import SideBar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          {/* <Route path='/' element={<Home />}></Route> <Route path='/' element={<Home />}></Route> */}
        </Routes>
        <SideBar />
        <Footer />
      </Router>
      react app
    </div>
  )
}

export default App
