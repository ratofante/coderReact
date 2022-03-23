import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext();

export function CartContextProvider({ children }) {

    //Items & Cart
    const [cartItems, setCartItems] = useState([]);
    //const [enElCarrito, setEnElCarrito] = useState(false);


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


    // const addItemToCart = (item, count) => {

    //     for (let i = 0; i < cartItems.length; i++) {
    //         if (cartItems[i].key === item.key) {

    //             cartItems[i].count = cartItems[i].count + count;
    //             setCartItems(cartItems);
    //             setEnElCarrito(true);
    //             console.log(enElCarrito)
    //             console.log('actualizamos count');
    //         }
    //     }
    //     console.log(enElCarrito);
    //     if (enElCarrito === false) {
    //         const newItem = { ...item, count: count };
    //         //console.log(newItem);
    //         setCartItems([...cartItems, newItem]);
    //         console.log('agregamos item');
    //     }
    // }

    //

    return (
        <CartContext.Provider value={{
            addItemToCart,
            cartItems,
            items: cartItems.length
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;