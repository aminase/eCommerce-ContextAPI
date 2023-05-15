import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  return (
    <div>
      <div>Header</div>
      <button onClick={() => setIsOpen(true)}>Open/close side bar</button>
    </div>
  )
}

export default Header
