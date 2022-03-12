import React, { useState } from 'react';

export const CartContext = React.createContext();

export function CartContextProvider({ children }) {
    const [itemsCart, setItemsCart] = useState([]);

    const addItemToCart = (item, qty) => {
        const newItem = { ...item, qty };
        console.log(newItem);
        setItemsCart([...itemsCart, newItem]);

    }

    return (
        <CartContext.Provider value={{ addItemToCart, itemsCart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;