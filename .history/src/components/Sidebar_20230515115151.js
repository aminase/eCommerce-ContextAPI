import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  return (
    <div className={`w-full bg-white fixed top-0 full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]à}>
      Sidebar
    </div>
  )
}

export default Sidebar
