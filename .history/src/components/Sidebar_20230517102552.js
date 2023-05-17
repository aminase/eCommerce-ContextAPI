import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import CartProvider, { CartContext } from '../contexts/CartContext'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart } = useContext(CartContext)

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        <div
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
          onClick={handleClose}
        >
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div>
        {' '}
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })}{' '}
      </div>
      <div>
        <div className='bg-pink-200 flex w-full justify-center items-center text-xl'>
          <div>
            <span>Total:</span>$ 100
          </div>
          <div>
            <FiTrash2 className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl' />{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
