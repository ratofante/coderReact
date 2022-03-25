import React, { useState } from 'react'

export const NavContext = React.createContext();

const NavContextProvider = ({ children }) => {

   const [menuState, setMenuState] = useState(false);

   const toggleMenu = () => {
      setMenuState(!menuState);
   }



   return (
      <NavContext.Provider value={{
         menuState,
         setMenuState,
         toggleMenu
      }}>
         {children}
      </NavContext.Provider>
   )
}

export default NavContextProvider