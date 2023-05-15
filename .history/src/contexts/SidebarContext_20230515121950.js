import React, { useState, createContext } from 'react'

//create context
export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    return setIsOpen(isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
