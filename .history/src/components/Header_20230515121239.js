import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  console.log(isOpen, 'header is opne')
  return (
    <div>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
        <BsBag className='text-2xl' />
      </div>
    </div>
  )
}

export default Header
