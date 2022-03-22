import { Outlet } from 'react-router-dom';

import React from 'react'
import Products from './Products';

const ProductList = () => {
   return (<>
      <Outlet />
      <div className='h-screen w-screen py-6 flex items-center justify-center flex-wrap'>
         <Products />
      </div>
   </>)
}

export default ProductList