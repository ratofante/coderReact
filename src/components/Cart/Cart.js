import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../CartContextProvider'
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = () => {
    const { cartItems, flushCartAndStorage } = useContext(CartContext);

    const [total, setTotal] = useState('');
    const [checkout, setCheckout] = useState(false);
    const [dropcart, setDropCart] = useState(false);

    useEffect(() => {
        let sumaTotal = 0;
        cartItems.forEach(e => {
            sumaTotal += e.count * e.price;
        });
        setTotal(sumaTotal);
    }, [cartItems]);

    const dropCart = () => {
        setDropCart(!dropcart);
    }
    const flushCart = () => {
        flushCartAndStorage();
    }

    return (
        <>
            <div className='m-auto mt-32 p-4 cart-container w-11/12 rounded'>
                <div className='cart-items-purchase'>
                    <h1 className='text-xl text-center text-yellow-500 font-bold mb-4 text-shadow'>My Cart</h1>
                    {cartItems.length > 0 ? cartItems.map((item) => {
                        return <CartItem item={item} key={item.key} />
                    }) : <p className="mt-6 text-center">There's no product in your cart</p>}
                    <div className='cart-btn-div relative flex flex-col sm:flex-row items-center justify-between max-w-sm p-6 pb-0'>
                        {total > 0 && <>
                            <p className='text-white'>
                                Total : $ <span className='text-yellow-500 font-bold'>{total}</span>
                            </p>
                            <button className='bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded' onClick={() => { setCheckout(true) }}>
                                Purchase
                            </button>
                            <button onClick={() => { dropCart() }}
                                className='bg-red-800 hover:bg-red-400 text-white font-bold py-2 px-4 rounded'>
                                Drop Cart
                            </button>
                            {dropcart && <div className='modal-drop-cart
                                absolute right-0 bottom-12 text-white bg-slate-700 p-3 rounded'>
                                <p>¿Are you sure?</p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => { flushCart() }}
                                        className='hover:text-slate-300'>yes
                                    </button>
                                    <span> / </span>
                                    <button
                                        onClick={() => { dropCart() }}
                                        className='hover:text-slate-300'>cancel
                                    </button>
                                </div>
                            </div>}
                        </>}
                    </div>
                </div>
                {checkout && <Checkout total={total} />}
            </div>
        </>
    )
}

export default Cart