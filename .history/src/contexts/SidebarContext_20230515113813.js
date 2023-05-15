import React, { useState, useContext } from 'react'

//create context

export const SidebarContext = useContext()

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return <SidebarContext.Provider>{children}</SidebarContext.Provider>
}

export default SidebarProvider
