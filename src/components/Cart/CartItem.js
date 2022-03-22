import React from 'react'

const CartItem = ({ item }) => {
   //console.log(item)
   return (
      <div className='bg-gray-200 rounder flex flex-row border-b border-red-300 p-2'>
         <div>
            <h4>
               {item.name}
            </h4>
            <p>
               {item.price}
            </p>
            <p>
               Available: {item.qty - item.count}
            </p>
            <p>Items to purchase: {item.count} </p>

         </div>
         <div>
            <img src={item.smallImgFront} alt={item.name} />
         </div>


      </div>
   )
}

export default CartItem