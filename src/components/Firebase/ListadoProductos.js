import React, { useEffect, useState } from 'react'

import FirebaseApp from '../../credentials';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(FirebaseApp);

const ListadoProductos = () => {

   const [products, setProducts] = useState([]);

   useEffect(() => {

      const asynCall = async () => {
         const querySnapshot = await getDocs(collection(db, 'products'));

         let productList = [];

         querySnapshot.forEach(doc => {
            productList.push({ ...doc.data(), key: doc.id, })
         });

         setProducts(productList)
      }
      asynCall();
   }, []);


   return (<>
      {products.map(e => {
         return (
            <div key={e.key}
               className='cursor-pointer bg-white w-72 h-96 p-1 shadow-sm hover:shadow-md shadow-white rounded m-3'>

               <div className="h-3/5 w-full border-2 border-double border-black rounded-sm bg-slate-600">
                  <img
                     className="w-full h-full object-cover rounded-t"
                     src={e.bigImg}
                     alt={e.name}
                  />
               </div>
               <div className="w-full h-1/4 p-3">
                  <button type='button' href="#" className=" hover:text-yellow-600 text-gray-700">
                     <span className="text-lg font-semibold uppercase tracking-wide">
                        {e.name}
                     </span>
                  </button>
                  <p className="text-gray-600 text-sm leading-5 mt-1">
                     {e.types}
                  </p>
                  <p className='bg-slate-600 text-white italic tracking-wider mt-1 p-2 text-xs rounded'>
                     {e.description}
                  </p>
               </div>
            </div>
         );
      })}
   </>)
}

export default ListadoProductos