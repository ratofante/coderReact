import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/Products/ItemListContainer';
import Home from "./components/Home";
import Product from "./components/Products/Product/Product";
import CartContextProvider from "./components/CartContextProvider";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/Auth/SignUp";

import FirebaseApp from "./credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ProductList from "./components/Products/ProductList";
const auth = getAuth(FirebaseApp);


function App() {

    // const [regUser, setRegUser] = useState(null);

    // Detecta cambios en const auth. En SignUp.js, al ingresar o crear usuario
    // pasa userFirebase y lo guardamos en el sate regUser. Esto nos permite
    // acceder luego a propiedades guardadas de ese usuario como, más abajo, en 
    // CartContextProvider, pasamos regUser.email
    // onAuthStateChanged(auth, (userFirebase) => {
    //     if (userFirebase) {
    //         //with session init
    //         setRegUser(userFirebase);
    //     } else {
    //         setRegUser(null);
    //     }
    // })

    // if (regUser) {
    return (
        <CartContextProvider /*userEmail={regUser.email}*/>
            <BrowserRouter>
                <Navbar />
                <Routes>

                    <Route index element={<Home />} />

                    <Route path="products" element={<ProductList />}>
                        <Route path="show/:id" element={<Product />} />
                    </Route>
                    <Route path="cart" element={<Cart />}></Route>

                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
    // } else {
    //     return (
    //         <>
    //             <SignUp></SignUp>
    //         </>

    //     );
    // }


}
export default App;