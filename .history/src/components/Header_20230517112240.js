import React, { useContext, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'

import { BsBag } from 'react-icons/bs'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  return (
    <header className='bg-pink-200'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to='/'>
          <div>
            <img src={Logo} alt='' className='w-[40px]' />
          </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify center items center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
