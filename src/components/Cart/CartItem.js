import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContextProvider';
import { IoTrashOutline } from 'react-icons/io5';


const CartItem = ({ item }) => {
   //console.log(item)

   const { removeItem } = useContext(CartContext);

   const [soldOut, setSoldOut] = useState(false);
   const [deleteMsg, setDeleteMsg] = useState(false);

   useEffect(() => {
      if (item.qty === item.count) {
         setSoldOut(!soldOut);
      }
   }, [item.count, item.qty]);

   const DeleteMsg = () => {
      return (<>
         <div className='delete-msg text-yellow-500 border-red-900'>
            <p className='mb-3'>¿Are you sure you want to delete this item?</p>
            <button onClick={() => { removeItem(item.key) }}>Yes</button>
            <button onClick={() => { setDeleteMsg(!deleteMsg) }} className='ml-5'>No</button>
         </div>
      </>);
   }

   return (
      <div className='relative bg-gray-200 rounder border-b border-red-300 p-4'>
         <h4 className='block text-center sm:text-left'>
            {item.name.toUpperCase()}
         </h4>
         <div className='flex flex-row justify-between items-center'>
            <div className='bg-slate-300 h-24 flex flex-col items-left justify-center w-full p-2 rounded-l'>
               <p>Unit $ {item.price}</p>
               <p>Items to purchase: {item.count} </p>
               <p>Available: {soldOut ? <SoldOut /> : item.qty - item.count}</p>
            </div>
            <div className='bg-slate-400 rounded-r h-24 w-40 block'>
               <img src={item.smallImgFront} alt={item.name} />
            </div>
         </div>
         <div className='p-2'>
            <p className='text-lg'>Product total :<span className='ml-2 mr-2 text-xs'> $</span><span className='text-yellow-500 font-bold text-shadow'>{item.count * item.price}</span></p>
         </div>
         <button onClick={() => { setDeleteMsg(!deleteMsg) }} id="delete-item" className="bg-slate-800 hover:bg-red-800 text-white font-bold p-2 rounded-full">
            <IoTrashOutline />
         </button>
         {deleteMsg && <DeleteMsg />}
      </div>
   )
}

const SoldOut = () => {
   return (<>
      <div>
         <span>There are no more items available</span>
      </div>
   </>);
}

export default CartItem