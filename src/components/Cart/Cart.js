import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContextProvider'
import CartItem from './CartItem';


const Cart = () => {
    const { cartItems } = useContext(CartContext);

    const [total, setTotal] = useState('');

    useEffect(() => {
        let sumaTotal = 0;
        cartItems.forEach(e => {
            sumaTotal += e.count * e.price;
        });
        console.log(sumaTotal);
        setTotal(sumaTotal);
    }, []);


    return (
        <>
            <div className='w-screen m-auto mt-10 p-4 bg-white w-11/12 rounded'>

                <h1 className='text-xl text-center color-gray-700'>My Cart</h1>

                {cartItems.map((item) => {
                    return <CartItem item={item} key={item.key} />
                })}

                <div>
                    {total > 0 && <p>Total : $ {total}</p>}
                </div>

            </div>


        </>
    )
}

export default Cart