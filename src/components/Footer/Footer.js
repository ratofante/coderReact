import React, { useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';


const Footer = () => {
   const footerBtn = useRef(null);


   const toggleFooter = () => {
      const icon = document.getElementById('footer-btn').children[0].classList;
      console.log(icon);
      if (footerBtn.current.className === "footer-big") {
         icon.add('look-up');
         icon.remove('look-down');
         footerBtn.current.className = "footer-small";
      } else {
         icon.remove('look-up');
         icon.add('look-down');
         footerBtn.current.className = "footer-big";

      }
   }

   return (
      <footer ref={footerBtn}>
         <button id="footer-btn" onClick={() => { toggleFooter() }}><IoIosArrowUp /></button>
         <div className="footer-visible">
            <p className='text-white'>Thanks to <a className="text-yellow-500 font-medium" href="https://pokeapi.co/">PokeApi</a> for their amazing site !</p>
            <div className="footer-icons">
               <ul>
                  <li><a className="icon-button" href="https://github.com/ratofante/coderReact"><BsGithub /></a></li>
                  <li><a className="icon-button" href="https://www.linkedin.com/in/rodrigo-g-wilkens/"><AiFillLinkedin /></a></li>
               </ul>
            </div>
         </div>
      </footer>
   )
}

export default Footer