import React, { useState, useContext } from 'react'

//create context

export const SidebarContext = useContext()

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(!isOpen)
  }
  return <SidebarContext.Provider>{children}</SidebarContext.Provider>
}

export default SidebarProvider
