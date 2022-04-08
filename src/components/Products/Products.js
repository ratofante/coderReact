import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../CartContextProvider';
import { useParams } from 'react-router-dom';

import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

const Products = () => {

   const { products } = useContext(CartContext);
   const [loading, setLoading] = useState(true);

   let { type } = useParams();
   let displayProducts = '';

   if (typeof (type) !== 'undefined') {
      displayProducts = products.filter(e => {
         console.log(e.types, type);
         return e.types.includes(type);
      })
      console.log(displayProducts);
   } else {
      displayProducts = products;
   }

   useEffect(() => {

      if (displayProducts !== '') { setLoading(false) }

   }, []);

   return (<>
      {loading ? <Loading /> : displayProducts.map(e => {
         return (
            <Link to={'show/' + e.key} key={e.key}>
               <div
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
                  <div className='price-tag'>
                     <span>{e.qty === 0 ? 'Sold Out' : `$ ${e.price}`}</span>
                  </div>
               </div>
            </Link>
         );
      })}
   </>);
}

export default Products;