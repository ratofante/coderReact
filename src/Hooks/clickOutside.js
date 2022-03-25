import React, { useRef, useEffect, useContext } from 'react';
import { NavContext } from '../components/Navbar/NavContextProvider';

function useClickOutside(ref) {
   const { menuState, setMenuState } = useContext(NavContext);

   useEffect(() => {
      function handleClicklOutside(event) {
         if (ref.current && !ref.current.contains(event.target)) {
            console.log('click afuera');
            if (menuState) { setMenuState(false) };
         }
      }

      document.addEventListener("mousedown", handleClicklOutside);

      return () => {
         document.removeEventListener("mousedown", handleClicklOutside);
      };
   }, [ref]);
}

function ClickOutside(props) {
   const wrapperRef = useRef(null);
   useClickOutside(wrapperRef);

   return <div ref={wrapperRef}>{props.children}</div>;
}

export default ClickOutside;

