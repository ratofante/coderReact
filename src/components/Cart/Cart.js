import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContextProvider'
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    const [total, setTotal] = useState('');
    const [checkout, setCheckout] = useState(false);

    useEffect(() => {
        let sumaTotal = 0;
        cartItems.forEach(e => {
            sumaTotal += e.count * e.price;
        });
        setTotal(sumaTotal);
    }, [cartItems]);

    return (
        <>
            <div className='m-auto mt-32 p-4 bg-white w-11/12 rounded'>
                <div className='cart-items-purchase'>
                    <h1 className='text-xl text-center color-gray-700'>My Cart</h1>
                    {cartItems.length > 0 ? cartItems.map((item) => {
                        return <CartItem item={item} key={item.key} />
                    }) : <p className="mt-6 text-center">There's no product in your cart</p>}
                    <div className='flex flex-row items-center p-6 pb-0'>
                        {total > 0 && <>
                            <p className='mr-20'>
                                Total : $ {total}
                            </p>
                            <button className='bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded' onClick={() => { setCheckout(true) }}>
                                Purchase
                            </button>
                            <button className='bg-red-800 hover:bg-red-400 text-white font-bold py-2 px-4 rounded'> Drop Cart </button>
                        </>}
                    </div>
                </div>
                {checkout && <Checkout total={total} />}
            </div>
        </>
    )
}

export default Cart