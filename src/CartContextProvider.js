import React, { useState } from 'react';
import { useEffect } from 'react';

import FirebaseApp from './credentials';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(FirebaseApp);

export const CartContext = React.createContext();

export function CartContextProvider({ children }) {

    //Products
    const [products, setProducts] = useState([]);
    //Items & Cart
    const [cartItems, setCartItems] = useState([]);
    const [storage, setStorage] = useState('');

    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        let productList = [];
        querySnapshot.forEach(doc => {
            productList.push({ ...doc.data(), key: doc.id, })
        });
        setProducts(productList);
    }
    // STORAGE SET UP
    const checkStorage = () => {

        let previous = sessionStorage.getItem('products');
        //chequeamos el estado del storage
        switch (previous) {
            case null:
                console.log('storage no seteado')
                break;
            //Si está seteado pero vacío.
            case '':
                sessionStorage.removeItem('products');
                break;
            //seteado y con elementos!
            default:
                setStorage(sessionStorage.getItem('products'));
                console.log(storage);
                break;
        }
    }

    useEffect(() => {
        getProducts();
        checkStorage();
    }, []);


    // ADD ITEMS TO CART
    const addItemToCart = (item, count) => {
        let yaEnCart = false;
        //item YA ESTÁ en el Cart
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].key === item.key) {
                //Si está, modificamos la count del item.
                cartItems[i].count = cartItems[i].count + count;
                setCartItems(cartItems);
                yaEnCart = true;

                //Storage


            }
        }
        //item NO ESTÁ EN EL CART, lo agregamos.
        if (yaEnCart === false) {
            const newItem = { ...item, count: count };
            setCartItems([...cartItems, newItem]);

            //Storage
            let itemToStorage = `${item.key}/${count},${storage}`;
            console.log(itemToStorage, storage);
            setStorage(itemToStorage);
            sessionStorage.setItem('products', itemToStorage);
            console.log(sessionStorage.getItem('products'));
        }
    }

    // REMOVE ITEMS FROM CART
    const removeItem = (id) => {
        let newCart = cartItems.filter(item => item.key !== id)
        setCartItems(newCart);
    }

    return (
        <CartContext.Provider value={{
            products,
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