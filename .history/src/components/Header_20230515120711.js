import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  console.log(isOpen, 'header is opne')
  return (
    <div>
      <div>Header</div>
      <button onClick={() => setIsOpen(!isOpen)}>Open/close side bar</button>
    </div>
  )
}

export default Header
