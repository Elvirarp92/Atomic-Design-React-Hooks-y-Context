import React, { createContext, useState } from 'react';

export const MobileContext = createContext();

const MobileContextProvider = ({children}) => {
  const [ mobileMenu, setMobileMenu ] = useState(false);

  return (
    <MobileContext.Provider value={{mobileMenu, setMobileMenu}}>
      {children}
    </MobileContext.Provider>
  )
} 

export { MobileContextProvider };