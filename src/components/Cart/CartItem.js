import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContextProvider';


const CartItem = ({ item }) => {
   //console.log(item)

   const { removeItem } = useContext(CartContext);

   const [soldOut, setSoldOut] = useState(false);

   // useEffect(() => {
   //    if (item.qty === item.count) {
   //       setSoldOut(!soldOut);
   //    }
   // }, [item.count, item.qty]);




   return (
      <div className='bg-gray-200 rounder flex flex-row border-b border-red-300 p-2'>
         <div>
            <h4>
               {item.name.toUpperCase()}
            </h4>
            <p>
               $ {item.price}
            </p>
            <p>
               Available: {soldOut ? <SoldOut /> : item.qty - item.count}
            </p>
            <p>Items to purchase: {item.count} </p>

         </div>
         <div>
            <img src={item.smallImgFront} alt={item.name} />
         </div>
         <div className='flex items-center justify-center'>
            <p className='text-2xl'><span className='mr-5 text-xs'>x</span>{item.count * item.price}</p>
         </div>
         <div className='ml-24 flex items-center justify-center'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               onClick={() => { removeItem(item.key) }}>
               Remove
            </button>
         </div>
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