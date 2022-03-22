import React, { useContext } from 'react'
import { CartContext, CartContextProvider } from '../../CartContextProvider'


const Cart = () => {
    const { itemsCart } = useContext(CartContext);

    return (
        <>
            <h1 className='cart-header'>My Cart</h1>
            {itemsCart.map((item) => {
                return (
                    <div key={item.id} className='cart-product'>
                        <h2 className='product-name'>{item.name}</h2>
                        <span className='product-qty'>x {item.qty}</span>
                        <div className='product-cart-img'>
                            <img src={item.smallImgFront} alt={item.name} />
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Cart