import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import CartContextProvider from "./CartContextProvider";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/Auth/SignUp";

import FirebaseApp from "./credentials";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ProductList from "./components/Products/ProductList";
import Product from "./components/Products/Product/Product";
const auth = getAuth(FirebaseApp);

function App() {
    return (
        <CartContextProvider /*userEmail={regUser.email}*/>
            <BrowserRouter>
                <Navbar className='navbar fixed w-screen' />
                <Routes>

                    <Route index element={<Home />} />
                    <Route path="/home/:success" element={<Home />} />

                    <Route path="products" element={<ProductList />}>
                        <Route path="show/:id" element={<Product />} />
                    </Route>

                    <Route path="products/:type" element={<ProductList />}>
                        <Route path="show/:id" element={<Product />} />
                    </Route>

                    <Route path="cart" element={<Cart />}></Route>

                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}
export default App;