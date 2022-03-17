import React, { useRef, useEffect } from 'react';

function useOutsideAlert(ref) {
   useEffect(() => {
      function handleClicklOutside(event) {
         if (ref.current && !ref.current.contains(event.target)) {
            console.log('afuera');
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
   useOutsideAlert(wrapperRef);

   return <div ref={wrapperRef}>{props.children}</div>;
}

export default ClickOutside;

