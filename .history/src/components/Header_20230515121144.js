import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  console.log(isOpen, 'header is opne')
  return (
    <div>
      <div>Header</div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <BsBag />
      </button>
    </div>
  )
}

export default Header
