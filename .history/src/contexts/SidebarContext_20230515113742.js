import React, { useState, useContext } from 'react'

//create context

export const SidebarContext = useContext()

const SidebarProvider = ({ children }) => {
  return <SidebarContext.Provider>SidebarContext</SidebarContext.Provider>
}

export default SidebarProvider
