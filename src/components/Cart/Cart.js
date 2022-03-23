import React, { useContext } from 'react'
import { CartContext } from '../../CartContextProvider'
import CartItem from './CartItem';


const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <>
            <div className='w-screen m-auto mt-10 p-4 bg-white w-11/12 rounded'>

                <h1 className='text-xl text-center color-gray-700'>My Cart</h1>

                {cartItems.map((item) => {
                    return <CartItem item={item} key={item.key}/>
                })}

            </div>

        </>
    )
}

export default Cart