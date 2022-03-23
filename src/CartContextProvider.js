import React, { useState } from 'react';

export const CartContext = React.createContext();

export function CartContextProvider({ children }) {

    //Items & Cart
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item, count) => {
        let state = false;

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].key === item.key) {

                cartItems[i].count = cartItems[i].count + count;
                setCartItems(cartItems);
                state = true;
                console.log(state);
                console.log('actualizamos count');
            }
        }
        console.log(state);
        if (state === false) {
            const newItem = { ...item, count: count };
            setCartItems([...cartItems, newItem]);
            console.log('agregamos item');
        }
    }
    const removeItem = (id) => {
        let newCart = cartItems.filter(item => item.key !== id)
        setCartItems(newCart);
        // for (let i = 0; i < cartItems.length; i++) {
        //     if(cartItems[i].key === id) {

        //     }
        // }
    }

    return (
        <CartContext.Provider value={{
            addItemToCart,
            cartItems,
            items: cartItems.length,
            removeItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;