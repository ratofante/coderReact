import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/Products/ItemListContainer';
import Home from "./components/Home";
import Product from "./components/Products/Product/Product";
import CartContextProvider from "./components/CartContextProvider";
import Cart from "./components/Cart/Cart";


function App() {
    return (
        <CartContextProvider>
            <BrowserRouter className="App">
                <Navbar />
                <Routes>

                    <Route index element={<Home />} />

                    <Route path="products" element={<ItemListContainer />}>
                        <Route path="show/:id" element={<Product />} />
                    </Route>
                    <Route path="cart" element={<Cart />}></Route>

                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}
export default App;