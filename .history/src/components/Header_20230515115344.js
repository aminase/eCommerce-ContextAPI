import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'

const Header = () => {
  useContext(SidebarContext)
  return (
    <div>
      <div>Header</div>
      <div>Open/close side bar</div>
    </div>
  )
}

export default Header
