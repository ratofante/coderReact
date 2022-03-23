import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../../CartContextProvider';
import LoadingMin from '../../Loading/LoadingMin';

import { BsCart3 as CartIcon } from 'react-icons/bs';
import { GrFormAdd as Add, GrFormSubtract as Minus } from 'react-icons/gr';

const ProductCardFooter = ({ product }) => {

   const { addItemToCart, cartItems } = useContext(CartContext);

   const [available, setAvailable] = useState(product.qty);
   const [itemCount, setItemCount] = useState(0);
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState('');

   useEffect(() => {

      let card = document.getElementById('product-card-container');
      if (card.classList.contains('move-left')) {
         card.classList.remove('move-left');
      }


      /* Chequeamos si el item ya está en el carrito
         Si está, seteamos itemCount y available para que
         muestren las cantidades correspondientes */
      cartItems.forEach(e => {
         if (e.key === product.key) {
            // el item está en el carrito! :
            setAvailable((product.qty - e.count) - itemCount);
         }
      });
   }, [addItemToCart]);



   const addItem = () => {
      if (available > 0) {
         setItemCount(itemCount + 1);
         setAvailable(available - 1);
      }
   }
   const removeItem = () => {
      if (itemCount > 0) {
         setItemCount(itemCount - 1);
         setAvailable(available + 1);
      }
   }

   const check = (item, count) => {
      setLoading(true);
      if (count > 0) {
         addItemToCart(item, count);
         const card = document.getElementById('product-card-container');
         const navMsg = document.getElementById('nav-message');
         setTimeout(() => {
            card.classList.add('move-left');

         }, 500);
         setTimeout(() => {
            navMsg.style.transform = "translate(110vw, -5px)";
         }, 500);
         setTimeout(() => {
            window.history.replaceState(null, null, "/products")
         }, 1000);
         card.classList.remove('move-left');
         console.log('llegamos aquí');

         navMsg.style.transform = "translate(110vw, -5px)";

      } else {
         setMessage('Please tell us how many items do you want to add');
         showMessage();
      }
   }

   const showMessage = () => {
      const message = document.getElementById('cart-message');
      message.style.transform = "translateY(0%)";
      setTimeout(() => {
         message.style.transform = "translateY(-100%)";
         setLoading(false);
      }, 2000);
   }

   return (<>
      <div id='cart-message'>El mensaje{message}</div>
      <div className="product-card-footer">
         <div className="qty-counter">
            <span>Available items: {available}</span>
            <div className="item-counter">
               Items: <span><b>{itemCount}</b></span>
            </div>
            <div className="add-item-counter">
               <button className='counter-btn' onClick={() => { addItem() }}><Add /></button>
               <button className='counter-btn' onClick={() => { removeItem() }}><Minus /></button>
            </div>
         </div>
         <div className="price-cart-like">
            <div className="footer-price-qty">
               <span className="title-font font-medium text-2xl text-gray-900">$ {product.price}</span>
            </div>
            {loading && <LoadingMin />}
            <button onClick={() => { check(product, itemCount) }} className="add-product-button flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add <CartIcon /></button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
               <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
               </svg>
            </button>
         </div>
      </div>
   </>)
}

export default ProductCardFooter