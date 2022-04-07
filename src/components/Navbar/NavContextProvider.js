import React, { useState } from 'react'

export const NavContext = React.createContext();

const NavContextProvider = ({ children }) => {

   const [menuState, setMenuState] = useState(null);

   return (
      <NavContext.Provider value={{
         menuState,
         setMenuState
      }}>
         {children}
      </NavContext.Provider>
   )
}

export default NavContextProvider