import React, { useState, useContext } from 'react'

//create context

export const SidebarContext = useContext()
const SidebarProvider = ({ children }) => {
  return <SidebarContext.Provider>SidebarContext</div>
}

export default SidebarContext
