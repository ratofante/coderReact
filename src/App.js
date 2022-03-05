import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/Products/ItemListContainer';

import Home from "./components/Home";
import Product from "./components/Products/Product/Product";


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />

                    <Route path="products" element={<ItemListContainer />}>
                        <Route path="show/:id" element={<Product />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;