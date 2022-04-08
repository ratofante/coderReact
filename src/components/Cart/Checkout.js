import React, { useContext } from 'react';
import { CartContext } from '../../CartContextProvider'

import FirebaseApp from '../../credentials';
import { getFirestore, addDoc, collection, doc, updateDoc } from 'firebase/firestore';
const db = getFirestore(FirebaseApp);

const Checkout = ({ total }) => {
   const { cartItems } = useContext(CartContext);

   let items = [];
   let qty = [];
   let prices = [];

   cartItems.forEach(i => {
      items.push(i.name);
      qty.push(i.count);
      prices.push(i.price);
   })

   console.log(items, qty, prices, total, cartItems);

   const checkout = (e) => {
      e.preventDefault();
      const form = document.querySelector('#purchase-form');
      const AsyncInsert = async () => {

         await addDoc(collection(db, 'orders'), {
            name: form.name.value,
            email: form.email.value,
            address: form.address.value,
            products: items,
            qty: qty,
            prices: prices,
            total: total
         });
      }
      AsyncInsert();
      const AsyncUpdate = async () => {
         await cartItems.forEach(i => {
            let reference = doc(db, `products/${i.key}`);
            updateDoc(reference, {
               qty: i.qty - i.count
            });
         })
      }
      AsyncUpdate();
      sessionStorage.removeItem('products');
   }

   return (
      <div className='form-container mt-8'>
         <form id="purchase-form" action="">
            <div className='form-control p-5 w-96 flex items-center justify-evenly'>
               <label
                  className='text-lg'
                  htmlFor="name"> Name:
               </label>
               <input className='bg-gray-200 p-2 rounded'
                  type="text"
                  id='name'
                  name='name' />
            </div>
            <div className='form-control p-5 w-96 flex items-center justify-evenly'>
               <label
                  className='text-lg'
                  htmlFor="email"> Email:
               </label>
               <input className="bg-gray-200 p-2 rounded"
                  type="email"
                  id='email'
                  name='email' />
            </div>
            <div className='form-control p-5 w-96 flex items-center justify-evenly'>
               <label
                  className='text-lg'
                  htmlFor="address"> Address:
               </label>
               <input className="bg-gray-200 p-2 rounded"
                  type="text"
                  id='address'
                  name='address' />
            </div>
            <div className='form-button p-5'>
               <button type="submit"
                  onClick={(e) => { checkout(e) }}
                  className='bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded'>
                  Confirm
               </button>
            </div>
         </form>
      </div>
   )
}

export default Checkout