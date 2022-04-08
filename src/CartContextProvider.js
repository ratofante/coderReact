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

    // STORAGE SET UP & CHECK
    const checkStorage = () => {
        let initialState = sessionStorage.getItem('products');
        const itemsInStorage = [];
        if (initialState !== null && initialState.length > 0) {
            setStorage(initialState);
            //Separamos cada producto por la ,
            let itemArray = initialState.split(',');
            itemArray.pop();
            let finalArray = [];
            //armamos un array con duplas [key, qty] por cada producto en el storage
            itemArray.forEach(e => {
                finalArray.push(e.split('/'));
            })
            // chequeamos en products las coincidencias con el storage
            // y le pasamos el count de items seleccionados. 
            // generamos nuevo array con itemsInStorage
            finalArray.forEach(e => {
                products.forEach(p => {
                    if (p.key === e[0]) {
                        const newItem = { ...p, count: e[1] };
                        itemsInStorage.push(newItem);
                    }
                })
            });
            // Seteamos los items del storage en el cart! 
            setCartItems(itemsInStorage);
        }
    }
    //Query Select ALL
    async function getProducts() {
        const querySnapshot = await getDocs(collection(db, 'products'));
        let productList = [];
        let prepareItems = new Promise((resolve, reject) => {
            querySnapshot.forEach(doc => {
                productList.push({ ...doc.data(), key: doc.id, })
            });
            resolve();
        });
        prepareItems.then(() => {
            setProducts(productList);
        });
    }
    // Primer effect setea los products
    useEffect(() => {
        getProducts();
    }, []);
    //segundo effect chequea el storage cuando hayan cambios en products,
    // Así chequeo cuando ya estén cargados los products si es que hay 
    // coincidencias en el storage para cargarlos en el carrito. 
    useEffect(() => {
        checkStorage();
    }, [products]);



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

                //Manejo en el Storage
                let previous = sessionStorage.getItem('products');
                previous = previous.split(',');
                previous.pop();
                let storageArray = [];
                storageArray.splice(0, storageArray.length);

                previous.forEach(e => {
                    storageArray.push(e.split('/'));
                });

                console.log(storageArray);
                for (let i = 0; i < storageArray.length; i++) {
                    console.log(storageArray[i][0], storageArray[i][1]);
                    if (storageArray[i][0] === item.key) {
                        storageArray[i][1] = parseInt(storageArray[i][1]) + parseInt(count);
                    }
                }
                console.log(storageArray);

                let storageString = '';
                storageArray.forEach(e => {
                    storageString += `${e[0]}/${e[1]},`;
                });
                console.log(storageString);
                storageString.slice(0, -1);
                setStorage(storageString);
                sessionStorage.setItem('products', storageString);
            }
        }
        //item NO ESTÁ EN EL CART, lo agregamos.
        if (yaEnCart === false) {
            console.log('no está en el cart');
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
        console.log(id);
        let itemToRemove = [];
        cartItems.forEach(e => {
            console.log(e.key);
            if (e.key === id) {
                itemToRemove = e;
            }
        })
        console.log(itemToRemove);

        let newCart = cartItems.filter(item => item.key !== id)
        let previous = sessionStorage.getItem('products');
        console.log(previous);
        console.log(itemToRemove.count);
        let actualItems = previous.replace(`${id}/${itemToRemove.count},`, "");
        sessionStorage.setItem('products', actualItems);
        setStorage(actualItems);

        setCartItems(newCart);
    }

    // Flush CART & STORAGE
    const flushCartAndStorage = () => {
        setCartItems([]);
        sessionStorage.removeItem('products');
        sessionStorage.clear();
    }

    return (
        <CartContext.Provider value={{
            products,
            addItemToCart,
            cartItems,
            items: cartItems.length,
            removeItem,
            flushCartAndStorage
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;